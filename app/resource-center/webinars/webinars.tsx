"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ArticleWebinarCard from "@/components/ui/article-webinar-card";

const webinars = [
	{
		id: 1,
		title: "Member-to-Member Tech Talk Featuring Ulendo Technologies, Inc.",
		image: "/images/webinars-articles/webinar-2.png",
		tags: [
			"ARM Focus",
			"Technology",
			"Webinar",
			"Member Contributed Content",
		],
		views: 14,
		date: "07-Jul-2025",
	},
	{
		id: 2,
		title:
			"ARM Exchange Public Webinar: Robotics Innovations to Secure & Re-Secure the Supply Chain",
		image: "/images/webinars-articles/webinar-4.png",
		tags: [
			"ARM Focus",
			"Technology",
			"Webinar",
			"Member Contributed Content",
		],
		views: 4,
		date: "05-Jun-2025",
	},
	{
		id: 3,
		title: "ARM Institute Spring 2025 Member Update",
		image: "/images/webinars-articles/webinar-3.png",
		tags: ["ARM Focus", "Webinar"],
		views: 51,
		date: "05-Jun-2025",
	},
	{
		id: 4,
		title:
			"ARM Exchange Public Webinar: Employer Features on RoboticsCareer...",
		image: "/images/webinars-articles/webinar-5.png",
		tags: [
			"ARM Focus",
			"Education & Workforce Development",
			"Webinar",
		],
		views: 20,
		date: "29-May-2025",
	},
	{
		id: 5,
		title: "ARM Exchange Public Webinar: Best Practices for the Future of Work",
		image: "/images/webinars-articles/webinar-6.png",
		tags: [
			"Education & Workforce Development",
			"Webinar",
			"ARM Focus",
			"Member Contributed Content",
		],
		views: 4,
		date: "16-Apr-2025",
	},
	{
		id: 6,
		title: "ARM Exchange Member Webinar: Shape Our Emerging AI Capabilities",
		image: "/images/webinars-articles/webinar-1.png",
		tags: ["Webinar"],
		views: 140,
		date: "05-Apr-2025",
	},
];

export default function WebinarsPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 6;

	return (
		<>
			{/* Main Content */}
			<main className="max-w-7xl mx-[127px] py-12">
				{/* Page Title */}
				<h1 className="text-4xl font-bold text-gray-900 mb-8">
					Webinars
				</h1>

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
						<ArticleWebinarCard
							key={webinar.id}
							imagePath={webinar.image || "/placeholder.svg"}
							imageAlt={webinar.title}
							title={webinar.title}
							tags={webinar.tags.join(", ")}
							views={webinar.views}
							date={webinar.date}
							href="#"
						/>
					))}
				</div>

				{/* Pagination */}
				<div className="flex items-center justify-center space-x-4">
					<Button
						variant="ghost"
						size="sm"
						onClick={() =>
							setCurrentPage(Math.max(1, currentPage - 1))
						}
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
