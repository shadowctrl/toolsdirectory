import {
  Code,
  Pencil,
  Palette,
  Megaphone,
  GraduationCap,
  Search,
  Filter,
  MousePointerClick,
  Clock,
  Gem,
  TrendingUp,
  Target,
  CheckSquare,
  Database,
  Zap,
  ClipboardCheck,
  Users,
  FileText,
  Folder,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";
import { CardDesign, CardContent } from "@/app/components/ui/cardDesign";
import Link from "next/link";

const MainFeatures = () => {
  const features = [
    {
      title: "Advanced Filters",
      icon: <Filter className="w-8 h-8 mb-4 text-blue-500" />,
      description: (
        <>
          Find the right AI tool easily with our advanced filters. You can
          filter by category or pricing model to find what you need. Just find
          the perfect AI tools{" "}
          <Link href={"/job"} className="underline text-bold text-black">
            for your job
          </Link>{" "}
          in a flash without wasting time scrolling.
        </>
      ),
    },
    {
      title: "Dedicated Pages",
      icon: <FileText className="w-8 h-8 mb-4 text-green-500" />,
      description: (
        <>
          Each AI tool has its own individual page. Here, you will find
          descriptions, specifications, and how each can help your project. You
          can view all the in-depth information about the tool. That makes the
          decision-making process much simpler. We even provide you with a link
          to the official website for AI tools.
        </>
      ),
    },
    {
      title: "Curated Collections",
      icon: <Folder className="w-8 h-8 mb-4 text-purple-500" />,
      description: (
        <>
          We understand that time is so precious. That’s why we have done all
          the heavy lifting for you. Our curated collections take{" "}
          <Link
            href={"/all-ai-tools"}
            className="underline text-bold text-black"
          >
            {" "}
            all important AI tools
          </Link>{" "}
          and group them into meaningful categories. It will help you to cut
          through the noise easily to get the answers you need.
        </>
      ),
    },
    {
      title: "User-friendly Design",
      icon: <LayoutDashboard className="w-8 h-8 mb-4 text-yellow-500" />,
      description: (
        <>
          Our AI Tools directory website design is all about simplicity. It
          comes up with a clean and intuitive layout to help you find AI tools
          by just clicking on a button. Even newbies with zero technical
          knowledge can quickly find, compare, and select the right fit AI tools
          from our website. You do not even need to create an account to access
          the directory.
        </>
      ),
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 my-10">
      <div className="max-w-7xl mx-auto mb-5">
        <h2 className="text-3xl font-bold my-8 text-center">Main Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <CardDesign
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center mt-5">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-justify text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </CardDesign>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIToolsSection = () => {
  const tools = [
    {
      title: "Coding",
      icon: <Code className="w-8 h-8 mb-4 text-blue-500" />,
      description: (
        <>
          Coding is no longer a one-man task. Nowadays, there are many AI tools
          to automate the process. You can use them for everything, right from
          spotting errors to generating code. Get more done in less time!
        </>
      ),
    },
    {
      title: "Writing",
      icon: <Pencil className="w-8 h-8 mb-4 text-green-500" />,
      description: (
        <>
          Write smarter, not harder. AI tools in writing can offer valuable
          suggestions to improve your content. Some can even generate content
          from scratch. Try them out now!
        </>
      ),
    },
    {
      title: "Graphic Designing",
      icon: <Palette className="w-8 h-8 mb-4 text-purple-500" />,
      description: (
        <>
          Still stuck behind that white canvas? Check out the AI tools that can
          help you create stunning visuals in no time. Just drop in what you
          need to make, as a prompt. Within seconds, AI can give life to your
          idea with an image.
        </>
      ),
    },
    {
      title: "Marketing",
      icon: <Megaphone className="w-8 h-8 mb-4 text-red-500" />,
      description: (
        <>
          Explore the best AI tools that give insights into what drives
          engagements and conversions. It lets you create tailored campaigns
          that resonate with your target audience. Utilize them to optimize your
          marketing strategies.
        </>
      ),
    },
    {
      title: "Education",
      icon: <GraduationCap className="w-8 h-8 mb-4 text-yellow-500" />,
      description: (
        <>
          Make your learning process easier with AI. You can practice
          interactive quizzes and even solve the answers to previous question
          papers. Check out AI tools now!
        </>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-5">
      <div className="max-w-7xl mx-auto mb-5">
        <h2 className="text-3xl font-bold text-center mb-4">
          AI Tools for Every Task
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          No matter what your job is, we have the right tools to match them.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <CardDesign
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center mt-5">
                <div className="flex mt-5">
                  {tool.icon}
                  <h3 className="text-xl font-semibold ml-4">{tool.title}</h3>
                </div>
                <p className="text-sm text-justify text-gray-600 dark:text-gray-300">
                  {tool.description}
                </p>
              </CardContent>
            </CardDesign>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowToUseSection = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-blue-500" />,
      title: "Search for a Tool",
      description: (
        <>
          Type what you're looking for into the search bar. We have an
          intelligent search engine that comes up with relevant tools in our
          vast database in no time.
        </>
      ),
    },
    {
      icon: <Filter className="w-6 h-6 text-green-500" />,
      title: "Filter Your Results",
      description: (
        <>
          Narrow down the results with our advanced filtering features. You can
          sort out by the use case or price range for which you are looking.
        </>
      ),
    },
    {
      icon: <MousePointerClick className="w-6 h-6 text-purple-500" />,
      title: "Visit Tool Pages",
      description: (
        <>
          Click on a tool to view a detailed description that provides all the
          information you need about the tool to make an informed decision.
        </>
      ),
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-red-500" />,
      title: "Make Your Choice",
      description: (
        <>
          Compare options side by side to see which one ticks all your boxes.
          Try out the tool using the official link on its dedicated page, or add
          it to your favorites.
        </>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-5">
      <div className="max-w-7xl mx-auto mb-5">
        <h2 className="text-3xl font-bold mb-4 text-center">How To Use?</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Using our AI Tools directory is pretty simple and fast. Follow these
          steps to choose the right tools that fit your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <CardDesign
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center mt-5">
                <div className="flex justify-center mb-3">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-justify text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </CardContent>
            </CardDesign>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUseSection = () => {
  const reasons = [
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Save Time",
      description: (
        <>
          Instead of wasting a few hours of your life trawling through countless
          websites and reviews, directories bring all AI tools together in one
          place. Assume that you need a design tool or a coding assistant you do
          not have to go through your search results to test dozens of options.
          All you would do is have an organized list at your fingertips, so to
          speak; it's as if you had a trusted guide to show you the way.
        </>
      ),
    },
    {
      icon: <Gem className="w-8 h-8 text-purple-500" />,
      title: "Explore Hidden Gems",
      description: (
        <>
          The internet is replete with some important AI tools, but many of them
          are flying under the radar. So, how do you find those gems if you
          don't even know they exist? Well, an AI directory lists almost all AI
          tools, irrespective of their popularity. If you spend a little time on
          our AI directory, you can find many important AI tools that you can’t
          view in the search results. You may stumble upon a tool that can
          change the way how you work.
        </>
      ),
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Stay Ahead",
      description: (
        <>
          The AI industry is constantly changing. An AI tool directory can let
          you catch up with it. Unlike websites carrying on with old
          information, directories are regularly updated. You will always know
          what is happening. We even provide you with a dedicated{" "}
          <Link href={"/ai-news"} className="underline text-bold text-black">
            AI news
          </Link>{" "}
          page to inform you of the latest trends in the industry.
        </>
      ),
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Tailored To Your Needs",
      description: (
        <>
          Not all AI tools are the same. Some are better suited for creative
          tasks, while some may be better at solving technical challenges. Our
          AI directory helps you filter through tools based on features and use
          cases. That makes it easier to find what exactly you’re looking for.
        </>
      ),
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Make Informed Choices",
      description: (
        <>
          Our AI tool directory has well-descriptive, dedicated pages for each
          tool. You can view all about AI tools here, right from founding year
          to price. That means you need not browse through multiple websites for
          that. So you can make an informed decision quickly.
        </>
      ),
    },
  ];

  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Use An AI Directory?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Have a look at how our AI directory can help you find the right fit
          from a list of all AI tools:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <CardDesign
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 mt-5">
                <div className="flex items-center mb-3 mt-5">
                  {reason.icon}
                  <h3 className="text-lg font-semibold ml-4">{reason.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-justify text-sm">
                  {reason.description}
                </p>
              </CardContent>
            </CardDesign>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: "Extensive Collection",
      description: (
        <>
          We have a vast compilation of AI tools. No matter what your
          requirements are, you can find a match from our collection.
        </>
      ),
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Latest AI Tools",
      description: (
        <>
          The AI industry is changing rapidly. We are always keeping pace with
          it by updating our listings with the latest tools on the market. You
          can even find the latest{" "}
          <Link href={"/ai-news"} className="underline text-bold text-black">
            {" "}
            AI news
          </Link>{" "}
          on our website to stay ahead with the updates.
        </>
      ),
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-green-500" />,
      title: "Accurate Information",
      description: (
        <>
          Any tool in our directory comes packed with accurate, well-thought-out
          information. You can find everything, right from features to pricing,
          to make a confident choice. We even provide{" "}
          <Link
            href={"/ai-tutorials"}
            className="underline text-bold text-black"
          >
            video tutorials
          </Link>{" "}
          to help you get started.
        </>
      ),
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "User Trust",
      description: (
        <>
          We've earned the trust of professionals and enthusiasts alike. Join
          the thousands of users who have made our platform the one-stop
          solution for finding the right AI tools.
        </>
      ),
    },
  ];

  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let's guess what you're thinking: "There are so many AI directories
            out there. Why should I choose this one?" Here's what sets us apart:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <CardDesign
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 mt-5">
                <div className="flex items-center justify-center mb-3 mt-5">
                  {feature.icon}
                  <h3 className="text-lg font-semibold ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-justify text-gray-600 dark:text-gray-300 py-2">
                  {feature.description}
                </p>
              </CardContent>
            </CardDesign>
          ))}
        </div>
      </div>
    </section>
  );
};

export {
  MainFeatures,
  AIToolsSection,
  HowToUseSection,
  WhyUseSection,
  WhyChooseUsSection,
};
