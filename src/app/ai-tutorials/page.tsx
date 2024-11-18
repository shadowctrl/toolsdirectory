"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import VideoModal from "../components/VideoModal";

interface Tutorial {
  id: number;
  icon: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  videoId: string;
  viewCount: string;
  likeCount: string;
}

interface Category {
  name: string;
}

const formatCount = (count: string): string => {
  const num = parseInt(count);
  if (isNaN(num)) return "0";

  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

const decodeHtmlEntities = (text: string): string => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [filtered, setFiltered] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("none");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>(["all"]);
  const [activeCategories, setActiveCategories] = useState<string[]>(["all"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Tutorial | null>(null);

  const handleSearch = (e: { target: { value: string } }) => {
    setSearchTerm(e.target.value);
  };

  const handleVideoClick = (video: Tutorial, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleSort = (e: { target: { value: string } }) => {
    setSortBy(e.target.value);
    let sortedTutorials = [...filtered];

    switch (e.target.value) {
      case "viewsAsc":
        sortedTutorials.sort(
          (a, b) => parseInt(a.viewCount) - parseInt(b.viewCount)
        );
        break;
      case "viewsDesc":
        sortedTutorials.sort(
          (a, b) => parseInt(b.viewCount) - parseInt(a.viewCount)
        );
        break;
      case "likesAsc":
        sortedTutorials.sort(
          (a, b) => parseInt(a.likeCount) - parseInt(b.likeCount)
        );
        break;
      case "likesDesc":
        sortedTutorials.sort(
          (a, b) => parseInt(b.likeCount) - parseInt(a.likeCount)
        );
        break;
      default:
        applyFilters(tutorials, searchTerm, selectedCategory);
        return;
    }
    setFiltered(sortedTutorials);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    applyFilters(tutorials, searchTerm, category);
  };

  const updateActiveCategories = (
    tutorials: Tutorial[],
    categories: string[]
  ) => {
    const activeCats = new Set<string>(["all"]);

    tutorials.forEach((tutorial) => {
      categories.forEach((category) => {
        if (category !== "all") {
          const categoryLower = category.toLowerCase();
          const titleMatch = tutorial.title
            .toLowerCase()
            .includes(categoryLower);
          const tagsMatch = tutorial.tags.some((tag) =>
            tag.toLowerCase().includes(categoryLower)
          );

          if (titleMatch || tagsMatch) {
            activeCats.add(category);
          }
        }
      });
    });

    setActiveCategories(Array.from(activeCats));
  };

  const applyFilters = (
    tutorials: Tutorial[],
    search: string,
    category: string
  ) => {
    let filteredResults = [...tutorials];

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filteredResults = filteredResults.filter(
        (tutorial) =>
          tutorial.title.toLowerCase().includes(searchLower) ||
          tutorial.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    // Apply category filter
    if (category !== "all") {
      const categoryLower = category.toLowerCase();
      filteredResults = filteredResults.filter(
        (tutorial) =>
          tutorial.title.toLowerCase().includes(categoryLower) ||
          tutorial.tags.some((tag) => tag.toLowerCase().includes(categoryLower))
      );
    }

    // Apply current sort
    if (sortBy !== "none") {
      handleSort({ target: { value: sortBy } });
      return;
    }

    setFiltered(filteredResults);
  };

  // Fetch categories and tutorials
  useEffect(() => {
    setLoading(true);

    // Fetch categories
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data: Category[]) => {
        const categoryNames = data.map((category) => category.name);
        setCategories(["all", ...categoryNames]);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    // Fetch tutorials
    fetch("/api/tutorial")
      .then((res) => res.json())
      .then((d) => {
        const decodedData = d.map((item: Tutorial) => ({
          ...item,
          title: decodeHtmlEntities(item.title),
        }));
        setTutorials(decodedData);
        setFiltered(decodedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tutorials:", error);
        setLoading(false);
      });
  }, []);

  // Update active categories whenever tutorials or categories change
  useEffect(() => {
    updateActiveCategories(tutorials, categories);
  }, [tutorials, categories]);

  useEffect(() => {
    applyFilters(tutorials, searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white dark:bg-gray-800 w-full pt-10 pl-6 pr-6 pb-6 text-center">
        {loading === false ? (
          <>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex w-full md:w-2/3 lg:w-1/2 gap-4">
                <input
                  type="text"
                  placeholder="Search for tutorials..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="flex-1 px-4 py-2 border rounded-md text-gray-700 dark:text-gray-300 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  onChange={handleSort}
                  value={sortBy}
                  className="px-4 py-2 border rounded-md text-gray-700 dark:text-gray-300 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="none">Sort by...</option>
                  <option value="viewsDesc">Most Views</option>
                  <option value="viewsAsc">Least Views</option>
                  <option value="likesDesc">Most Likes</option>
                  <option value="likesAsc">Least Likes</option>
                </select>
              </div>

              <div className="flex flex-wrap justify-center gap-2 w-full md:w-2/3 lg:w-1/2 mt-4">
                {activeCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.map((video, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
                    onClick={(e) => handleVideoClick(video, e)}
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div className="relative">
                        <Image
                          src={video.icon || "https://via.placeholder.com/150"}
                          alt={video.title}
                          width={400}
                          height={100}
                          className="w-full h-[180px] object-cover"
                        />
                      </div>

                      <h3 className="text-lg font-semibold p-4 text-gray-800 dark:text-white">
                        {video.title}
                      </h3>

                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2 p-4">
                        <span>👁️ {formatCount(video.viewCount)}</span>
                        <span>👍 {formatCount(video.likeCount)}</span>
                      </div>
                      <div className="px-4 pb-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {video.tags.map((tag: string, i: number) => (
                            <span key={i} className="mr-2">
                              #{tag}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-row justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black dark:border-white"></div>
          </div>
        )}
      </main>
      <Footer />{" "}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={selectedVideo?.videoId || ""}
        title={selectedVideo?.title || ""}
      />
    </div>
  );
}
