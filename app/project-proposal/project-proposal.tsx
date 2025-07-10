import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, ChevronDown, ArrowRight, Plus, FileText, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectProposal() {
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
              <Link href="/project-proposal" className="text-orange-500 hover:text-orange-600 font-medium text-base">
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
          <h1 className="text-4xl font-bold mb-6">Project Proposal</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Submit and manage your project proposals for ARM Institute funding opportunities. Track your submissions and
            collaborate with team members throughout the proposal process.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Quick Actions */}
        <section className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 border-dashed border-gray-300 hover:border-orange-500 transition-colors cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Plus className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">New Proposal</h3>
              <p className="text-gray-600 text-sm mb-4">Start a new project proposal for an active project call</p>
              <Button className="bg-orange-500 hover:bg-orange-600">Create Proposal</Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Proposals</h3>
              <p className="text-gray-600 text-sm mb-4">View and edit your active proposal submissions</p>
              <Button variant="outline">View Proposals</Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Reviews</h3>
              <p className="text-gray-600 text-sm mb-4">Track the status of proposals under review</p>
              <Button variant="outline">View Reviews</Button>
            </CardContent>
          </Card>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Robotic Assembly System Proposal</h3>
                      <p className="text-sm text-gray-600">Draft saved • 25-01 Core Tech Project Call</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      Draft
                    </Badge>
                    <Button size="sm" variant="outline">
                      Continue Editing
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">AI Manufacturing Integration</h3>
                      <p className="text-sm text-gray-600">Submitted • 2024 AI Data Foundry Tech Project Call</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Under Review
                    </Badge>
                    <Button size="sm" variant="outline">
                      View Status
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Smart Factory Automation</h3>
                      <p className="text-sm text-gray-600">Approved • Recircled RFI Opportunity</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Approved
                    </Badge>
                    <Button size="sm" variant="outline">
                      View Project
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Active Project Calls */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Active Project Calls</h2>
            <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
              View All Calls
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">25-01 Core Tech Draft Project Call</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The ARM Institute is soliciting submissions that respond to technology needs of the manufacturing
                  industry and the Department of Defense (DoD).
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Active
                  </Badge>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    Submit Proposal
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2024 AI Data Foundry Tech Project Call</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Focus on AI and data-driven solutions for advanced manufacturing processes and automation systems.
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Active
                  </Badge>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    Submit Proposal
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
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
