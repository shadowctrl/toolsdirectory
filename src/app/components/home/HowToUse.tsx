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
} from "lucide-react";
import { CardDesign, CardContent } from "./cardDesign";

const MainFeatures = () => {
  const features = [
    {
      title: "Advanced Filters",
      icon: <Filter className="w-8 h-8 mb-4 text-blue-500" />,
      description:
        "Find the right AI tool easily with our advanced filters. Filter by category or pricing model to find what you need.",
    },
    {
      title: "Dedicated Pages",
      icon: <FileText className="w-8 h-8 mb-4 text-green-500" />,
      description:
        "Each AI tool has its own individual page with descriptions, specifications, and detailed information.",
    },
    {
      title: "Curated Collections",
      icon: <Folder className="w-8 h-8 mb-4 text-purple-500" />,
      description:
        "Our curated collections group important AI tools into meaningful categories to help you find what you need.",
    },
    {
      title: "User-friendly Design",
      icon: <LayoutDashboard className="w-8 h-8 mb-4 text-yellow-500" />,
      description:
        "Clean and intuitive layout to help you find AI tools with just a few clicks.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Main Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <CardDesign
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center mt-5">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
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
      description:
        "Coding is no longer a one-man task. Nowadays, there are many AI tools to automate the process. You can use them for everything, right from spotting errors to generating code. Get more done in less time!",
    },
    {
      title: "Writing",
      icon: <Pencil className="w-8 h-8 mb-4 text-green-500" />,
      description:
        "Write smarter, not harder. AI tools in writing can offer valuable suggestions to improve your content. Some can even generate content from scratch. Try them out now!",
    },
    {
      title: "Graphic Designing",
      icon: <Palette className="w-8 h-8 mb-4 text-purple-500" />,
      description:
        "Still stuck behind that white canvas? Check out the AI tools that can help you create stunning visuals in no time. Just drop in what you need to make, as a prompt. Within seconds, AI can give life to your idea with an image.",
    },
    {
      title: "Marketing",
      icon: <Megaphone className="w-8 h-8 mb-4 text-red-500" />,
      description:
        "Explore the best AI tools that give insights into what drives engagements and conversions. It lets you create tailored campaigns that resonate with your target audience. Utilize them to optimize your marketing strategies.",
    },
    {
      title: "Education",
      icon: <GraduationCap className="w-8 h-8 mb-4 text-yellow-500" />,
      description:
        "Make your learning process easier with AI. You can practice interactive quizzes and even solve the answers to previous question papers. Check out AI tools now!",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          AI Tools for Every Task
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          No matter what your job is, we have the right tools to match them.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <CardDesign
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center mt-5">
                <div className="flex justify-center">{tool.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
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
      description:
        "Type what you're looking for into the search bar. We have an intelligent search engine that comes up with relevant tools in our vast database in no time.",
    },
    {
      icon: <Filter className="w-6 h-6 text-green-500" />,
      title: "Filter Your Results",
      description:
        "Narrow down the results with our advanced filtering features. You can sort out by the use case or price range for which you are looking.",
    },
    {
      icon: <MousePointerClick className="w-6 h-6 text-purple-500" />,
      title: "Visit Tool Pages",
      description:
        "Click on a tool to view a detailed description that provides all the information you need about the tool to make an informed decision.",
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-red-500" />,
      title: "Make Your Choice",
      description:
        "Compare options side by side to see which one ticks all your boxes. Try out the tool using the official link on its dedicated page, or add it to your favorites.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How To Use?</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Using our AI Tools directory is pretty simple and fast. Follow these
          steps to choose the right tools that fit your needs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 right-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 transform translate-x-1/2" />
              )}
              <CardDesign className="relative z-10 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center mb-4 mt-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </CardContent>
              </CardDesign>
            </div>
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
      description:
        "Instead of wasting hours trawling through countless websites and reviews, directories bring all AI tools together in one place.",
    },
    {
      icon: <Gem className="w-8 h-8 text-purple-500" />,
      title: "Explore Hidden Gems",
      description:
        "Find important AI tools flying under the radar. Discover tools that can change the way you work.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Stay Ahead",
      description:
        "Keep up with the constantly changing AI industry through our regularly updated directory and dedicated AI news page.",
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Tailored To Your Needs",
      description:
        "Filter through tools based on features and use cases to find exactly what you're looking for.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Use An AI Directory?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Have a look at how our AI directory can help you find the right fit
          from a list of all AI tools:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <CardDesign
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4 mt-4">
                  {reason.icon}
                  <h3 className="text-xl font-semibold ml-4">{reason.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
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
      icon: <Database className="w-12 h-12 text-blue-500" />,
      title: "Extensive Collection",
      description:
        "We have a vast compilation of AI tools. No matter what your requirements are, you can find a match from our collection.",
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Latest AI Tools",
      description:
        "The AI industry is changing rapidly. We are always keeping pace with it by updating our listings with the latest tools on the market. You can even find the latest AI news on our website to stay ahead with the updates.",
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-green-500" />,
      title: "Accurate Information",
      description:
        "Any tool in our directory comes packed with accurate, well-thought-out information. You can find everything, right from features to pricing, to make a confident choice. We even provide video tutorials to help you get started.",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: "User Trust",
      description:
        "We've earned the trust of professionals and enthusiasts alike. Join the thousands of users who have made our platform the one-stop solution for finding the right AI tools.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
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
              <CardContent className="p-8 mt-5">
                <div className="flex flex-col items-center md:items-start md:flex-row">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
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