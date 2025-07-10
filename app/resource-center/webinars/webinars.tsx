"use client"

import { useState } from "react"
import { Search, Bell, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"

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
    title: "ARM Exchange Public Webinar: Robotics Innovations to Secure & Re-S...",
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
    title: "ARM Exchange Public Webinar: Employer Features on RoboticsCareer...",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["ARM Focus", "Education & Workforce Development", "Webinar"],
    views: 14,
    date: "05-Jun-2025",
  },
  {
    id: 5,
    title: "ARM Exchange Public Webinar: Best Practices for the Future of Work",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["Education & Workforce Development", "Webinar", "ARM Focus", "Member Contributed Content"],
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
]

export default function WebinarsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 6

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-12">
            {/* Logo placeholder - left blank for separate upload */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=48&width=120"
                  alt="ARM Institute"
                  width={120}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/project-calls" className="text-gray-900 hover:text-orange-500 font-medium text-base">
                Project Calls
              </Link>
              <Link href="/project-proposal" className="text-gray-900 hover:text-orange-500 font-medium text-base">
                Project Proposal
              </Link>
              <Link href="/all-projects" className="text-gray-900 hover:text-orange-500 font-medium text-base">
                All Projects
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-900 hover:text-orange-500 font-medium text-base">
                  Community
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/community/events" className="w-full">
                      Events
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/community/members" className="w-full">
                      Members
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/community/organizations" className="w-full">
                      Organizations
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-orange-500 hover:text-orange-500 font-medium text-base">
                  Resource Center
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/resource-center/arm-member-guide" className="w-full">
                      ARM Member Guide
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/resource-center/webinars" className="w-full">
                      Webinars
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/resource-center/articles" className="w-full">
                      Articles
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-blue-500 text-white">M</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

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
            <Card key={webinar.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video relative">
                <img
                  src={webinar.image || "/placeholder.svg"}
                  alt={webinar.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">{webinar.title}</h3>

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
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="bg-[#fdb619] hover:bg-[#e6a517] text-white"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ARM</span>
                </div>
                <span className="font-semibold">ARM INSTITUTE</span>
              </div>
              <p className="text-gray-400 text-sm">
                Advancing American Robotics Manufacturing through Innovation, Education and Collaboration
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Address</h4>
              <p className="text-gray-400 text-sm">
                Mill 19 at Hazelwood Green
                <br />
                4720 Technology Dr, Suite 300
                <br />
                Pittsburgh, PA 15219
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Phone</h4>
              <p className="text-gray-400 text-sm">412.322.7800</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Need Help?</h4>
              <Button className="bg-orange-500 hover:bg-orange-600">Contact ARM</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
