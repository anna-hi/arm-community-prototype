"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import MemberCard from "@/components/ui/member-card";
import Link from "next/link";

const members = [
  {
    id: "aaron-prather",
    name: "Aaron Prather",
    organization: "ASTM",
    role: "Director, Robotics & Autonomous Systems Programs",
    imageSrc: "/images/members/aaron-prather.jpeg",
    tags: ["Automation", "Autonomous Vehicles"],
    committeeTag: "TAC Committee Member",
    isFavorite: true,
  },
  {
    id: 2,
    name: "Aaron Williams",
    organization: "HartX",
    role: "(No Title Provided)",
    imageSrc: "/placeholder.svg?height=64&width=64",
    tags: ["Classroom Training", "VR/AR", "Curricula Development"],
    committeeTag: undefined,
    isFavorite: false,
  },
  {
    id: 3,
    name: "Adam Newberry",
    organization: "On the Road Companies",
    role: "(No Title Provided)",
    imageSrc: "/placeholder.svg?height=64&width=64",
    tags: [],
    committeeTag: undefined,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Amir Barati Farimani",
    organization: "Carnegie Mellon University",
    role: "(No Title Provided)",
    imageSrc: "/placeholder.svg?height=64&width=64",
    tags: ["AI", "Automation", "Drones"],
    committeeTag: undefined,
    isFavorite: false,
  },
  {
    id: 5,
    name: "John Smith",
    organization: "ASTM",
    role: "Director, Robotics & Autonomous...",
    imageSrc: "/placeholder.svg?height=64&width=64",
    tags: ["Automation", "Autonomous Vehicles"],
    committeeTag: "TAC Committee Member",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Abdullah Alturki",
    organization: "University of Pittsburgh",
    role: "(No Title Provided)",
    imageSrc: "/placeholder.svg?height=64&width=64",
    tags: [],
    committeeTag: undefined,
    isFavorite: false,
  },
  {
    id: 7,
    name: "Amir Sharif",
    organization: "3Laws Dynamics Safety",
    role: "(No Title Provided)",
    imageSrc: "/placeholder.svg?height=64&width=64",
    tags: ["Automation", "Cyber Security", "Fundraising"],
    committeeTag: undefined,
    isFavorite: false,
  },
  {
    id: 8,
    name: "John Smith",
    organization: "ASTM",
    role: "Director, Robotics & Autonomous...",
    imageSrc: "/placeholder.svg?height=64&width=64",
    tags: ["Automation", "Autonomous Vehicles"],
    committeeTag: "TAC Committee Member",
    isFavorite: false,
  },
  {
    id: 9,
    name: "Aaron Perkins",
    organization: "Fairmont Robotics Team",
    role: "(No Title Provided)",
    imageSrc: "/placeholder.svg?height=64&width=64",
    tags: [],
    committeeTag: undefined,
    isFavorite: false,
  },
];

export default function CommunityMembers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [interestedInProjects, setInterestedInProjects] = useState(false);

  // Filter members based on checkbox
  const filteredMembers = interestedInProjects
    ? members.filter((member) => member.name === "Aaron Prather")
    : members;

  return (
    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <h1 className="mb-8">Member Directory</h1>

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
          <div className="flex justify-end items-center space-x-2 mb-4">
            <Checkbox
              id="interested-projects"
              checked={interestedInProjects}
              onCheckedChange={() => setInterestedInProjects((prev) => !prev)}
            />
            <label
              htmlFor="interested-projects"
              className="text-sm text-gray-700"
            >
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
                <SelectItem value="university">
                  University of Pittsburgh
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <Link
              key={member.id}
              href={`/community/members/${member.id}`}
              className="block"
            >
              <MemberCard
                tags={member.tags}
                committeeTag={member.committeeTag}
                imageSrc={member.imageSrc}
                name={member.name}
                organization={member.organization}
                role={member.role}
                isFavorite={member.isFavorite}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
