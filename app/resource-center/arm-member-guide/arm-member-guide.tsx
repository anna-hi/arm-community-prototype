import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, ChevronDown, Users, FileText, Newspaper, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ArmMemberGuide() {
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
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-900 hover:text-orange-500 font-medium text-base border-b-2 border-orange-500">
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
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Let's get started</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                As a valued ARM Institute Member, you now have access into our exclusive ARM Member Digital Community.
              </p>
              <Button className="bg-[#fdb619] hover:bg-[#ef7100] text-black font-medium px-8 py-3">
                Membership Overview
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ARM members waving at event"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#fff4dc] border-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#fdb619] rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with other members.</h3>
                <p className="text-gray-600">Find other members to connect and collaborate with.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#e8f8fd] border-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#008ec1] rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Access exclusive ARM research.</h3>
                <p className="text-gray-600">Explore exclusive project outputs created by members.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#eafaeb] border-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#3a8941] rounded-lg flex items-center justify-center mb-6">
                  <Newspaper className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share your organization's news.</h3>
                <p className="text-gray-600">Share news and events from your own organization.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Set up your profile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Set up your profile</h2>

          <div className="bg-gray-100 rounded-lg p-8 mb-12">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="ARM Member Community profile setup interface"
              width={800}
              height={500}
              className="w-full rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Access your profile through the avatar.</h3>
                <p className="text-gray-600">Find your profile on the top right hand of your screen.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Indicate interest in projects.</h3>
                <p className="text-gray-600">This will help others find you during project teaming.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Include your area(s) of expertise.</h3>
                <p className="text-gray-600">This will help others search for teammates by skillset.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How-to Videos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How-to Videos</h2>

          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="sm" className="text-orange-500">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-orange-500">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="ARM Member Community Spotlight Series"
                  width={500}
                  height={300}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16 bg-orange-500 hover:bg-orange-600">
                    <Play className="w-6 h-6 text-white" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-[#fdb619] text-black px-3 py-1 rounded text-sm font-medium">
                  ARM Member Community Spotlight Series
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 text-center">
                  Accessing Consortium Developed Intellectual Property (CDIP)
                </h3>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="ARM Member Community Spotlight Series"
                  width={500}
                  height={300}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16 bg-orange-500 hover:bg-orange-600">
                    <Play className="w-6 h-6 text-white" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-[#fdb619] text-black px-3 py-1 rounded text-sm font-medium">
                  ARM Member Community Spotlight Series
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 text-center">
                  Networking Virtually and Finding Project Collaborators
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1b1f] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ARM</span>
                </div>
                <span className="font-semibold">INSTITUTE</span>
              </div>
              <p className="text-gray-400 text-sm">
                Copyright © 2025 Advanced Robotics for Manufacturing Institute. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Address</h4>
              <p className="text-gray-400 text-sm">
                Mill 19 at 4501 Lytle St., Suite 500
                <br />
                Pittsburgh, PA 15207
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Phone</h4>
              <p className="text-gray-400 text-sm">412-785-0444</p>
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
