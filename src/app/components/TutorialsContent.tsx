import React, { useState } from "react";
import { BookOpen, Settings, Combine, Brain, PenTool } from "lucide-react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/app/components/ui/TabsCN";

import { CardDesign, CardContent } from "./ui/cardDesign";
import Link from "next/link";

const TipsToUse = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 mb-2 text-blue-500" />,
      title: "Learn Prompt Engineering",
      description: (
        <>
          The way you talk to AI matters a lot. As a general rule of thumb, you
          must always try to submit precise and context-rich prompts to get the
          most out of the tool. Always be specific. Let’s take the case of logo
          generation itself. Never write a generic prompt like: “Generate a logo
          for my clothing store.” Instead, describe the colors and mood you
          want.
        </>
      ),
    },
    {
      icon: <PenTool className="w-6 h-6 mb-2 text-green-500" />,
      title: "Understand Tool Limitations",
      description: (
        <>
          Every AI tool has its strengths and its weak spots. For instance, Chat
          GPT works really well for creative purposes. But when it comes to
          research, Perplexity AI has an edge. With this knowledge, you can
          choose the right tool for <Link href={"/job"}>your job purpose</Link>.
        </>
      ),
    },
    {
      icon: <Settings className="w-6 h-6 mb-2 text-[#607D8B]" />,
      title: "Customize Settings",
      description: (
        <>
          Most AI tools are customizable to meet your specific needs. Change
          parameters or set your preferences to get more personalized results.
          Take the case of Chat GPT itself. There’s a dedicated section to
          customize the tool. You can simply type in how you would like it to
          respond. You can even manage the memories. This way, you can get more
          effective results without the need for much re-prompting.
        </>
      ),
    },
    {
      icon: <Brain className="w-6 h-6 mb-2 text-[#FF9800]" />,
      title: "Stay Updated",
      description: (
        <>
          AI technology is constantly changing. Tools often update with new
          features. You must keep track of these changes through their official
          websites or our dedicated <Link href={"/ai-news"}>news section</Link>.
          Try out the latest features to utilize the tools effectively.
        </>
      ),
    },
    {
      icon: <Combine className="w-6 h-6 mb-2 text-amber-800" />,
      title: "Combine Tools",
      description: (
        <>
          Sometimes, a single tool isn’t enough to achieve your goal. Consider
          using multiple AI tools to cover all the aspects of your workflow. A
          combination of the strengths of different tools gives you the perfect
          workflow.
        </>
      ),
    },
  ];

  return (
    <div className=" bg-gray-50 dark:bg-gray-900">
      {/* Main Content */}
      <div className="container mx-auto px-4 my-5 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-2 gap-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="Tips">
              Tips to Use AI Tools Effectively
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="Tips"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <CardDesign
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 mt-5">
                  <div className="flex items-center justify-center">
                    {feature.icon}
                    <h3 className="text-xl font-semibold ml-4 mb-2">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm mt-2 link_design">
                    {feature.description}
                  </p>
                </CardContent>
              </CardDesign>
            ))}
          </TabsContent>

          <TabsContent value="overview" className="space-y-8">
            <CardDesign>
              <p className="text-md p-5 text-left text-gray-600 dark:text-gray-300">
                AI tools are getting better day by day with new features. But
                let’s be honest. It’s not always easy for newbies to keep up
                with these changes. Most of them find it challenging to use the
                tools effectively. That’s why we have carefully curated a list
                of the most informative YouTube videos to guide you on using
                various tools. Check out the tutorials to make the most of AI
                tools without the headache.
              </p>
              <h2 className="text-xl font-semibold leading-none tracking-tight p-5">
                Why Watch Tutorials Before Using AI Tools?
              </h2>
              <CardContent className="space-y-4">
                <p>
                  Merely jumping into <Link href={"/"}>AI tools</Link>{" "}
                  straightly is not advised. Here are some reasons as to why you
                  must watch tutorial videos before getting started:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>
                    Not <Link href={"/all-ai-tools"}>all AI tools</Link> are
                    user-friendly. Sometimes, you need to watch step-by-step
                    video tutorials to know how to use them.
                  </li>
                  <li>
                    Save your valuable time and effort instead of experimenting
                    with a tool blindly.
                  </li>
                  <li>
                    You will know how to make use of all features of AI tools
                    effectively.
                  </li>
                  <li>
                    Avoid pitfalls and use them smarter to get the best output.
                  </li>
                </ul>
              </CardContent>
            </CardDesign>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TipsToUse;
