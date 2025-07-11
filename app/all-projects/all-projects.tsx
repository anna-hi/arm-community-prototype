import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, ChevronDown, Search, List, Grid3X3, ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AllProjects() {
  const projects = [
    {
      id: "T-24-C19-01-01",
      title: "Automated T-Shirt Assembly System",
      status: "Performing",
      tags: ["Textiles", "Control", "Modeling"],
      leadOrg: "Henderson Sewing Machine Co., Inc.",
      principalInvestigator: "Frank Henderson",
      isFavorite: true,
    },
    {
      id: "T-24-DDC-11-01",
      title: "Robotic Non-Contact 3D Inspection Replacing Hard Gaging",
      status: "Completed",
      tags: ["Technology", "Intelligent Robotic Systems"],
      leadOrg: "ARIS Technology, LLC",
      principalInvestigator: "Mingu Kang",
      isFavorite: true,
    },
    {
      id: "T-24-C19-01-10",
      title: "Fixtureless Robotic Assembly for Manufacturing Environments 2.0",
      status: "Completed",
      tags: ["Automotive", "Technology", "Human-Robot Interaction"],
      leadOrg: "Lockheed Martin Corporation",
      principalInvestigator: "Reyneal Reyes",
      isFavorite: true,
    },
    {
      id: "T-24-C19-01-24",
      title: "Automated Finishing of Castings: Parting Line Grinding",
      status: "Completed",
      tags: ["Intelligent Robotic Systems", "Control"],
      leadOrg: "Capsen Robotics",
      principalInvestigator: "Jared Glover",
      isFavorite: true,
    },
    {
      id: "T-24-C19-01-23",
      title: "Agile Robotic Path Planning for Spray Coating Complex Geometry",
      status: "Completed",
      tags: ["Reconfigurable Robotic Systems"],
      leadOrg: "Northrop Grumman Corporation",
      principalInvestigator: "Amanda Howell",
      isFavorite: true,
    },
    {
      id: "T-24-DDC-11-01",
      title: "Rapid Robotic Diagnostic Kit Discovery (R2D2)",
      status: "Completed",
      tags: ["Control", "Modeling"],
      leadOrg: "Siemens Corporation, Corporate Technology",
      principalInvestigator: "/",
      isFavorite: true,
    },
    {
      id: "T-24-C19-01-01",
      title: "Autonomous Multi-Tool Head Surface Prep",
      status: "Performing",
      tags: ["Aerospace", "Automotive", "Modeling"],
      leadOrg: "Henderson Sewing Machine Co., Inc.",
      principalInvestigator: "Frank Henderson",
      isFavorite: true,
    },
    {
      id: "T-24-DDC-11-01",
      title: "Robotic Non-Contact 3D Inspection Replacing Hard Gaging",
      status: "Completed",
      tags: ["Technology", "Intelligent Robotic Systems"],
      leadOrg: "ARIS Technology, LLC",
      principalInvestigator: "Mingu Kang",
      isFavorite: true,
    },
    {
      id: "T-24-C19-01-10",
      title: "Fixtureless Robotic Assembly for Manufacturing Environments 2.0",
      status: "Completed",
      tags: ["Automotive", "Technology", "Human-Robot Interaction"],
      leadOrg: "Lockheed Martin Corporation",
      principalInvestigator: "Reyneal Reyes",
      isFavorite: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-12">
            {/* Logo */}
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
              <Link
                href="/all-projects"
                className="text-gray-900 hover:text-orange-500 font-medium text-base border-b-2 border-orange-500"
              >
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
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Projects</h1>

        {/* Search and View Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search for Projects..." className="pl-10" />
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <List className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Grid3X3 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aerospace">Aerospace</SelectItem>
                <SelectItem value="automotive">Automotive</SelectItem>
                <SelectItem value="textiles">Textiles</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="TRL at Project End" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trl1">TRL 1</SelectItem>
                <SelectItem value="trl2">TRL 2</SelectItem>
                <SelectItem value="trl3">TRL 3</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Strategic Focus Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ai">AI & Machine Learning</SelectItem>
                <SelectItem value="robotics">Robotics</SelectItem>
                <SelectItem value="automation">Automation</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Project Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="research">Research</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="pilot">Pilot</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Project Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="performing">Performing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="planned">Planned</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Lead Organization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="henderson">Henderson Sewing Machine Co.</SelectItem>
                <SelectItem value="aris">ARIS Technology, LLC</SelectItem>
                <SelectItem value="lockheed">Lockheed Martin Corporation</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              {(index === 2 || index === 8) &&
              project.title === "Fixtureless Robotic Assembly for Manufacturing Environments 2.0" ? (
                <Link href="/projects/fixtureless-robotic-assembly" className="block">
                  <CardContent className="p-6">
                    {/* Status and Favorite */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        variant={project.status === "Performing" ? "default" : "secondary"}
                        className={
                          project.status === "Performing"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-green-100 text-green-800"
                        }
                      >
                        {project.status === "Performing" && "●"} {project.status}
                      </Badge>
                      {project.isFavorite && <Star className="w-4 h-4 text-orange-500 fill-current" />}
                    </div>

                    {/* Project Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="Project icon"
                          width={40}
                          height={40}
                          className="opacity-60"
                        />
                      </div>
                    </div>

                    {/* Project ID */}
                    <p className="text-sm text-gray-600 mb-2">{project.id}</p>

                    {/* Project Title */}
                    <h3 className="font-semibold text-gray-900 mb-4 line-clamp-2">{project.title}</h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Organization Info */}
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Lead Organization:</span>
                        <p className="text-gray-600">{project.leadOrg}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Principal Investigator:</span>
                        <p className="text-gray-600">{project.principalInvestigator}</p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              ) : (
                <CardContent className="p-6">
                  {/* Status and Favorite */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant={project.status === "Performing" ? "default" : "secondary"}
                      className={
                        project.status === "Performing"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-green-100 text-green-800"
                      }
                    >
                      {project.status === "Performing" && "●"} {project.status}
                    </Badge>
                    {project.isFavorite && <Star className="w-4 h-4 text-orange-500 fill-current" />}
                  </div>

                  {/* Project Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Project icon"
                        width={40}
                        height={40}
                        className="opacity-60"
                      />
                    </div>
                  </div>

                  {/* Project ID */}
                  <p className="text-sm text-gray-600 mb-2">{project.id}</p>

                  {/* Project Title */}
                  <h3 className="font-semibold text-gray-900 mb-4 line-clamp-2">{project.title}</h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Organization Info */}
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Lead Organization:</span>
                      <p className="text-gray-600">{project.leadOrg}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Principal Investigator:</span>
                      <p className="text-gray-600">{project.principalInvestigator}</p>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-4">
          <Button variant="ghost" size="sm" disabled>
            <ChevronLeft className="w-4 h-4 mr-1" />
            Prev
          </Button>
          <div className="flex items-center space-x-2">
            <Button variant="default" size="sm" className="bg-orange-500 hover:bg-orange-600">
              1
            </Button>
            <span className="text-sm text-gray-600">of 6</span>
          </div>
          <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600">
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
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
                Copyright © 2024 Advanced Robotics for Manufacturing Institute. All rights reserved.
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
              <p className="text-gray-400 text-sm">412-785-6544</p>
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
