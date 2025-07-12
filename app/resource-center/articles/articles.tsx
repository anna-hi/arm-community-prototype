"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    id: 1,
    title: "Member-to-Member Tech Talk Featuring Ulendo Technologies, Inc.",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["ARM Focus", "Technology", "Webinar", "Member Contributed Content"],
    views: 14,
    date: "05-Jun-2025",
  },
  {
    id: 2,
    title:
      "ARM Exchange Public Webinar: Robotics Innovations to Secure & Re-S...",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["ARM Focus", "Technology", "Webinar", "Member Contributed Content"],
    views: 14,
    date: "05-Jun-2025",
  },
  {
    id: 3,
    title: "ARM Institute Spring 2025 Member Update",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["ARM Focus", "Webinar"],
    views: 14,
    date: "05-Jun-2025",
  },
  {
    id: 4,
    title:
      "ARM Exchange Public Webinar: Employer Features on RoboticsCareer...",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["ARM Focus", "Education & Workforce Development", "Webinar"],
    views: 14,
    date: "05-Jun-2025",
  },
  {
    id: 5,
    title: "ARM Exchange Public Webinar: Best Practices for the Future of Work",
    image: "/placeholder.svg?height=200&width=350",
    tags: [
      "Education & Workforce Development",
      "Webinar",
      "ARM Focus",
      "Member Contributed Content",
    ],
    views: 14,
    date: "05-Jun-2025",
  },
  {
    id: 6,
    title: "ARM Exchange Member Webinar: Shape Our Emerging AI Capabilities",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["Webinar"],
    views: 14,
    date: "05-Jun-2025",
  },
];

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Articles</h1>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search for Articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <div className="flex flex-wrap gap-1 mb-3">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{article.views} Views</span>
                  <span>{article.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-4">
          <Button variant="ghost" size="sm" className="flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Prev
          </Button>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">1</span>
            <span className="text-sm text-gray-500">of</span>
            <span className="text-sm text-gray-700">6</span>
          </div>

          <Button
            size="sm"
            className="flex items-center bg-[#fdb619] hover:bg-[#e6a516]"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </main>
    </>
  );
}
