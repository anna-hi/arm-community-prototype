"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ChevronDown, Bell, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const members = [
  {
    id: 1,
    name: "Aaron Prather",
    organization: "ASTM",
    title: "Director, Robotics & Autonomous...",
    avatar: "/placeholder.svg?height=64&width=64",
    tags: ["Automation", "Autonomous Vehicles", "TAC Committee Member"],
    hasPhoto: true,
  },
  {
    id: 2,
    name: "Aaron Williams",
    organization: "HartX",
    title: "(No Title Provided)",
    avatar: null,
    tags: ["Classroom Training", "VR/AR", "Curricula Development"],
    hasPhoto: false,
  },
  {
    id: 3,
    name: "Adam Newberry",
    organization: "On the Road Companies",
    title: "(No Title Provided)",
    avatar: null,
    tags: [],
    hasPhoto: false,
  },
  {
    id: 4,
    name: "Amir Barati Farimani",
    organization: "Carnegie Mellon University",
    title: "(No Title Provided)",
    avatar: null,
    tags: ["AI", "Automation", "Drones"],
    hasPhoto: false,
  },
  {
    id: 5,
    name: "John Smith",
    organization: "ASTM",
    title: "Director, Robotics & Autonomous...",
    avatar: null,
    tags: ["Automation", "Autonomous Vehicles", "TAC Committee Member"],
    hasPhoto: false,
  },
  {
    id: 6,
    name: "Abdullah Alturki",
    organization: "University of Pittsburgh",
    title: "(No Title Provided)",
    avatar: null,
    tags: [],
    hasPhoto: false,
  },
  {
    id: 7,
    name: "Amir Sharif",
    organization: "3Laws Dynamics Safety",
    title: "(No Title Provided)",
    avatar: null,
    tags: ["Automation", "Cyber Security", "Fundraising"],
    hasPhoto: false,
  },
  {
    id: 8,
    name: "John Smith",
    organization: "ASTM",
    title: "Director, Robotics & Autonomous...",
    avatar: null,
    tags: ["Automation", "Autonomous Vehicles", "TAC Committee Member"],
    hasPhoto: false,
  },
  {
    id: 9,
    name: "Aaron Perkins",
    organization: "Fairmont Robotics Team",
    title: "(No Title Provided)",
    avatar: null,
    tags: [],
    hasPhoto: false,
  },
]

export default function CommunityMembers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [interestedInProjects, setInterestedInProjects] = useState(false)

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
                <DropdownMenuTrigger className="flex items-center space-x-1 text-orange-500 hover:text-orange-600 font-medium text-base">
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
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-900 hover:text-orange-500 font-medium text-base">
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
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Member Directory</h1>

        {/* Search Bar */}
        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search for Members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters Section */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>

          {/* Interested in projects checkbox */}
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox
              id="interested-projects"
              checked={interestedInProjects}
              onCheckedChange={setInterestedInProjects}
            />
            <label htmlFor="interested-projects" className="text-sm text-gray-700">
              Interested in projects
            </label>
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="automotive">Automotive</SelectItem>
                <SelectItem value="aerospace">Aerospace</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Membership Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tier1">Tier 1</SelectItem>
                <SelectItem value="tier2">Tier 2</SelectItem>
                <SelectItem value="tier3">Tier 3</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Knowledgeable Skills" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="automation">Automation</SelectItem>
                <SelectItem value="ai">AI</SelectItem>
                <SelectItem value="robotics">Robotics</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Committee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tac">TAC Committee</SelectItem>
                <SelectItem value="education">Education Committee</SelectItem>
                <SelectItem value="workforce">Workforce Committee</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Lead Organization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="astm">ASTM</SelectItem>
                <SelectItem value="cmu">Carnegie Mellon University</SelectItem>
                <SelectItem value="university">University of Pittsburgh</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      {member.hasPhoto ? (
                        <AvatarImage src={member.avatar || "/placeholder.svg?height=48&width=48"} />
                      ) : null}
                      <AvatarFallback className="bg-gray-200 text-gray-600">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.organization}</p>
                      <p className="text-sm text-gray-500">{member.title}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600">
                    <Star className="w-4 h-4" />
                  </Button>
                </div>

                {/* Tags */}
                {member.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {member.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className={`text-xs ${
                          tag === "TAC Committee Member"
                            ? "bg-green-100 text-green-800"
                            : tag === "Automation" || tag === "Autonomous Vehicles"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
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
