import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, ChevronDown, Search, Filter, Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AllProjects() {
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
              <Link href="/all-projects" className="text-orange-500 hover:text-orange-600 font-medium text-base">
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

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">All Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Explore the complete portfolio of ARM Institute projects. Discover innovative solutions, research outcomes,
            and collaborative efforts advancing the future of manufacturing.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filters */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Search projects by title, organization, or technology..." className="pl-10 h-12" />
            </div>
            <Button variant="outline" className="h-12 px-6 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Project Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Technology Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Technologies</SelectItem>
                <SelectItem value="ai">Artificial Intelligence</SelectItem>
                <SelectItem value="robotics">Robotics</SelectItem>
                <SelectItem value="automation">Automation</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                <SelectItem value="automotive">Automotive</SelectItem>
                <SelectItem value="aerospace">Aerospace</SelectItem>
                <SelectItem value="textiles">Textiles</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600">Showing 1-12 of 156 projects</p>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by: Newest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="title">Title A-Z</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Projects Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Project Card 1 */}
          <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="bg-green-100 text-green-800">
                  Completed
                </Badge>
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
              <div className="text-sm text-gray-600 mb-2">T3-04-01-16</div>
              <h3 className="font-semibold mb-3 text-gray-900">
                Futureless Robotic Workcell for Manufacturing Environments 2.0
              </h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    Automotive
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Technology
                  </Badge>
                </div>
                <div className="text-gray-600">Human-Robot Interaction</div>
                <div className="text-gray-600">Lead: Siemens Mentor Corporation</div>
                <div className="text-gray-600">PI: Frank Richardson</div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                View Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Project Card 2 */}
          <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  In Progress
                </Badge>
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
              <div className="text-sm text-gray-600 mb-2">T3-04-01-01</div>
              <h3 className="font-semibold mb-3 text-gray-900">Automatic T-Shirt Assembly System</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    Textiles
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Cobots
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Modeling
                  </Badge>
                </div>
                <div className="text-gray-600">Intelligent Robotic Systems</div>
                <div className="text-gray-600">Lead: SoftWear Automation</div>
                <div className="text-gray-600">PI: Frank Richardson</div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                View Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Project Card 3 */}
          <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="bg-green-100 text-green-800">
                  Completed
                </Badge>
                <Heart className="w-5 h-5 text-red-500 cursor-pointer" />
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
              <div className="text-sm text-gray-600 mb-2">T3-04-DEC-1-01</div>
              <h3 className="font-semibold mb-3 text-gray-900">
                Robotic Non-Contact 3D Inspection Replacing Hard Gaging
              </h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    Technology
                  </Badge>
                </div>
                <div className="text-gray-600">Intelligent Robotic Systems</div>
                <div className="text-gray-600">Lead: ARM Technology LLC</div>
                <div className="text-gray-600">PI: Meng Wang</div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                View Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Project Card 4 */}
          <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                  Planning
                </Badge>
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
              <div className="text-sm text-gray-600 mb-2">T3-05-AI-02</div>
              <h3 className="font-semibold mb-3 text-gray-900">
                AI-Driven Quality Control for Aerospace Manufacturing
              </h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    Aerospace
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    AI
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Quality Control
                  </Badge>
                </div>
                <div className="text-gray-600">Machine Learning Applications</div>
                <div className="text-gray-600">Lead: Boeing Manufacturing</div>
                <div className="text-gray-600">PI: Sarah Johnson</div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                View Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Project Card 5 */}
          <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  In Progress
                </Badge>
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
              <div className="text-sm text-gray-600 mb-2">T3-04-AUTO-03</div>
              <h3 className="font-semibold mb-3 text-gray-900">
                Collaborative Robot Integration for Small Manufacturers
              </h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    Cobots
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    SME
                  </Badge>
                </div>
                <div className="text-gray-600">Human-Robot Collaboration</div>
                <div className="text-gray-600">Lead: Universal Robots</div>
                <div className="text-gray-600">PI: Michael Chen</div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                View Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Project Card 6 */}
          <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="bg-green-100 text-green-800">
                  Completed
                </Badge>
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
              <div className="text-sm text-gray-600 mb-2">T3-03-ELEC-01</div>
              <h3 className="font-semibold mb-3 text-gray-900">Automated PCB Assembly and Testing System</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    Electronics
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Automation
                  </Badge>
                </div>
                <div className="text-gray-600">Precision Manufacturing</div>
                <div className="text-gray-600">Lead: Intel Corporation</div>
                <div className="text-gray-600">PI: Lisa Rodriguez</div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                View Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-orange-500 text-white hover:bg-orange-600">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <span className="px-2 text-gray-500">...</span>
          <Button variant="outline" size="sm">
            13
          </Button>
          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

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
