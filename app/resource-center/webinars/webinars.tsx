"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const webinars = [
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

export default function WebinarsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  return (
    <>
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Webinars</h1>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search for Webinars..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-gray-300"
          />
        </div>

        {/* Webinars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {webinars.map((webinar) => (
            <Card
              key={webinar.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="aspect-video relative">
                <img
                  src={webinar.image || "/placeholder.svg"}
                  alt={webinar.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                  {webinar.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {webinar.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Views and Date */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{webinar.views} Views</span>
                  <span>{webinar.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="text-gray-600"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Prev
          </Button>

          <span className="text-sm text-gray-600">
            {currentPage} of {totalPages}
          </span>

          <Button
            size="sm"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="bg-[#fdb619] hover:bg-[#e6a517] text-white"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </main>
    </>
  );
}
