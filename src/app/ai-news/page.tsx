"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import FormatMarkdownText from "../components/textFormatter";
// Types for better type safety
type NewsItem = {
  title: string;
  description: string;
  date: string;
  icon: string;
  slugUrl: string;
  category?: string;
};

const getTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();

  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);

  if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`;
  } else if (diffInWeeks < 4) {
    return `${diffInWeeks} ${diffInWeeks === 1 ? "week" : "weeks"} ago`;
  } else {
    return `${diffInMonths} ${diffInMonths === 1 ? "month" : "months"} ago`;
  }
};

export default function Page() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<string>("all");

  useEffect(() => {
    setLoading(true);
    fetch("/api/news")
      .then((res) => res.json())
      .then((d) => {
        setLoading(false);
        setNews(d);
      });
  }, []);

  const filteredNews = news.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const date = new Date(item.date);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    const matchesTimeFrame =
      selectedTimeFrame === "all" ||
      (selectedTimeFrame === "today" && diffInDays < 1) ||
      (selectedTimeFrame === "week" && diffInDays < 7) ||
      (selectedTimeFrame === "month" && diffInDays < 30);

    return matchesSearch && matchesTimeFrame;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white dark:bg-gray-800 w-full pt-5 pb-6 text-center">
        <div className="container py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Latest AI News & Trends
          </h1>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto mb-8 px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
              {/* Search Bar */}
              <div className="relative w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              {/* Time Frame Filter */}
              <select
                value={selectedTimeFrame}
                onChange={(e) => setSelectedTimeFrame(e.target.value)}
                className="w-full md:w-auto px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-row justify-center items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black dark:border-white"></div>
            </div>
          ) : filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-5">
              {filteredNews.map((n: NewsItem, index: number) => (
                <Link
                  href={"/ai-news/" + encodeURIComponent(n.slugUrl)}
                  target="_blank"
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden w-[320px] h-[380px] flex flex-col justify-around gap-1 hover:shadow-xl transition-shadow duration-200"
                >
                  <Image
                    src={n.icon || "/ai-tools-directory.webp"}
                    alt={n.title}
                    width={400}
                    height={180}
                    className="w-[400px] h-[180px] object-cover rounded-[inherit]"
                  />

                  <h2 className="text-lg font-semibold p-2 line-clamp-2">
                    {n.title}
                  </h2>
                  <div className="px-4 mb-4">
                    <p className="text-gray-600 text-[12px] text-justify line-clamp-3 leading-tight text-balance font-normal">
                      <FormatMarkdownText text={n.description} />
                    </p>
                  </div>
                  <div className="px-4 pb-4">
                    <p className="text-left text-xs text-gray-500 font-semibold">
                      {getTimeAgo(n.date)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-8">
              No results found for your search criteria
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
