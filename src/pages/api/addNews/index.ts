import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/primsa";

// Define the structure of the news item and stories
type Story = {
  title: string;
  link: string;
  thumbnail: string;
  date: string;
  slugUrl: string;
};

type NewsItem = {
  title: string;
  url: string;
  icon: string;
  stories?: Story[];
};

const newsEndpoint = async (): Promise<NewsItem[]> => {
  const response = await fetch(
    `https://${process.env.SERP_API_ENDPOINT}?engine=google_news&topic_token=${process.env.SERP_API_TOPIC_TOKEN}&api_key=${process.env.SERP_API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch news: ${response.statusText}`);
  }

  const data = await response.json();
  const newsResults = data.news_results;
  return newsResults as NewsItem[];
};

const rephraseTitle = async (title: string): Promise<string> => {
  const messagecontent = [
    {
      role: "system",
      content:
        "Be precise and conscise. Return only title without any additional informations. Do not include hyperlinks and things like [1][2] etc.",
    },
    {
      role: "user",
      content: `${title} - Rephrase the title of the article, by keeping its original meaning.
      - Make it click-worthy
      - Use a simple english grammar`,
    },
  ];
  const response = await fetch(`https://api.perplexity.ai/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.1-sonar-small-128k-online",
      messages: messagecontent,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to generate description: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
};

const generateDescription = async (
  title: string,
  url: string
): Promise<string> => {
  const messagecontent = [
    {
      role: "system",
      content:
        "Browser Web, Be precise and conscise. Return only description without any additional informations. Do not include hyperlinks and [1][2] etc.",
    },
    {
      role: "user",
      content: `Provide description in less than 200 words for this latest AI news - ${title} - ${url}`,
    },
  ];
  const response = await fetch(`https://api.perplexity.ai/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.1-sonar-small-128k-online",
      messages: messagecontent,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to generate description: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // return await prisma.news.deleteMany({});

  if (req.method === "GET") {
    try {
      const results = await newsEndpoint();
      const formattedResults = [];
      let newsCount = 0;
      let maxNews = 1;
      for (const item of results) {
        if (item.stories) {
          for (const story of item.stories) {
            if (newsCount >= maxNews) break;
            const title = await rephraseTitle(story.title);
            const description = await generateDescription(
              story.title,
              story.link
            );
            formattedResults.push({
              title,
              url: story.link,
              slugUrl: encodeURIComponent(
                `${story.title.replaceAll(" ", "-")}`
              ),
              icon: story.thumbnail || "",
              date: story.date,
              description,
            });
            newsCount++;
          }
          if (newsCount >= maxNews) break;
        }
      }

      const prismaRes = await prisma.news.createMany({
        data: formattedResults,
        skipDuplicates: true,
      });
      return res.status(200).json({ formattedResults, prismaRes });
    } catch (error: any) {
      return res
        .status(500)
        .json({ error: error.message || "Internal Server Error" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
};

export default handler;
