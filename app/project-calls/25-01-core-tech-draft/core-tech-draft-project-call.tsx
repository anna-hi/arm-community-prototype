"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Bell, ChevronDown, ChevronUp, Users, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { OrangeButton } from "@/components/OrangeButton"

export default function CoreTechDraftProjectCall() {
  const [eligibilityOpen, setEligibilityOpen] = useState(false)
  const [fundingOpen, setFundingOpen] = useState(false)
  const [participateOpen, setParticipateOpen] = useState(true)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [specialTopicAreasOpen, setSpecialTopicAreasOpen] = useState(true)

  const [activeSection, setActiveSection] = useState("special-topic-areas")
  const sectionRefs = useRef({
    "special-topic-areas": null,
    eligibility: null,
    funding: null,
    "how-to-participate": null,
    resources: null,
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Offset for sticky header

      const sections = Object.keys(sectionRefs.current)
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
              <Link
                href="/project-calls"
                className="text-gray-900 hover:text-orange-500 font-medium text-base border-b-2 border-orange-500"
              >
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

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header Section */}
            <div className="flex items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">25-01 Core Tech Draft Project Call</h1>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Active
                </Badge>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The ARM Institute is soliciting submissions that respond to specific needs of the manufacturing industry
                and the Department of Defense (DoD). This project call is seeking projects to make focused investments
                in the Special Topic Areas (STA) described below.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                These Special Topic Areas have been derived from the Institute's prior research, with guidance from the
                Institute's Technology Advisory Committee (TAC) and partners. Project teams are encouraged to leverage
                successfully completed ARM Institute technology development programs as well as Consortium Developed
                Intellectual Property (CDIP) statements.
              </p>
            </div>

            {/* Project Call Document */}
            <div className="mb-8">
              <div className="flex items-center border border-gray-300 rounded-lg bg-white max-w-fit">
                <span className="px-6 py-3 text-gray-900 font-medium">Project Call Document</span>
                <div className="m-1">
                  <OrangeButton text="" className="" />
                </div>
              </div>
            </div>

            {/* Scrollspy Navigation */}
            <div className="w-full">
              <div className="sticky top-4 bg-white z-10 border-b border-gray-200 mb-8 pt-4">
                <div className="flex space-x-8 overflow-x-auto">
                  <a
                    href="#special-topic-areas"
                    className={`text-sm font-medium pb-2 whitespace-nowrap transition-colors ${
                      activeSection === "special-topic-areas"
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : "text-gray-600 hover:text-orange-500"
                    }`}
                  >
                    Special Topic Areas
                  </a>
                  <a
                    href="#eligibility"
                    className={`text-sm font-medium pb-2 whitespace-nowrap transition-colors ${
                      activeSection === "eligibility"
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : "text-gray-600 hover:text-orange-500"
                    }`}
                  >
                    Eligibility
                  </a>
                  <a
                    href="#funding"
                    className={`text-sm font-medium pb-2 whitespace-nowrap transition-colors ${
                      activeSection === "funding"
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : "text-gray-600 hover:text-orange-500"
                    }`}
                  >
                    Funding
                  </a>
                  <a
                    href="#how-to-participate"
                    className={`text-sm font-medium pb-2 whitespace-nowrap transition-colors ${
                      activeSection === "how-to-participate"
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : "text-gray-600 hover:text-orange-500"
                    }`}
                  >
                    How to Participate
                  </a>
                  <a
                    href="#resources"
                    className={`text-sm font-medium pb-2 whitespace-nowrap transition-colors ${
                      activeSection === "resources"
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : "text-gray-600 hover:text-orange-500"
                    }`}
                  >
                    Resources
                  </a>
                </div>
              </div>

              {/* Special Topic Areas Section */}
              <section id="special-topic-areas" className="mb-8">
                <Collapsible open={specialTopicAreasOpen} onOpenChange={setSpecialTopicAreasOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900">Special Topic Areas</h3>
                    <ChevronUp className="w-5 h-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-6 bg-gray-50 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="relative overflow-hidden">
                        <Image
                          src="/images/special-topic-area/rapid-re-tasking-and-robot-agility.png"
                          alt="Rapid Re-Tasking and Robot Agility"
                          width={400}
                          height={225}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <h4 className="text-white text-xl font-semibold p-4">Rapid Re-Tasking and Robot Agility</h4>
                        </div>
                      </Card>

                      <Card className="relative overflow-hidden">
                        <Image
                          src="/images/special-topic-area/multi-modal-inputs-for-ai-robotics-in-manufacturing.png"
                          alt="Multi-modal Inputs for All Robotics in Manufacturing"
                          width={400}
                          height={225}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <h4 className="text-white text-xl font-semibold p-4">
                            Multi-modal Inputs for AI Robotics in Manufacturing
                          </h4>
                        </div>
                      </Card>

                      <Card className="relative overflow-hidden">
                        <Image
                          src="/images/special-topic-area/adaptive-real-time-path-planning-and-control.png"
                          alt="Adaptive Real-Time Path Planning and Control"
                          width={400}
                          height={225}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <h4 className="text-white text-xl font-semibold p-4">
                            Adaptive Real-Time Path Planning and Control
                          </h4>
                        </div>
                      </Card>

                      <Card className="relative overflow-hidden">
                        <Image
                          src="/images/special-topic-area/multirobot-multihuman-collaboration.png"
                          alt="Multi-Robot, Multi-Human Collaboration"
                          width={400}
                          height={225}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <h4 className="text-white text-xl font-semibold p-4">
                            Multi-Robot, Multi-Human Collaboration
                          </h4>
                        </div>
                      </Card>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Eligibility Section */}
              <section id="eligibility" className="mb-8">
                <Collapsible open={eligibilityOpen} onOpenChange={setEligibilityOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900">Eligibility</h3>
                    {eligibilityOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-6 bg-gray-50 rounded-lg">
                    <p className="text-gray-900 text-lg leading-relaxed mb-6">
                      To address this Project call, ARM Institute encourages proposers to work cooperatively in
                      presenting integrated solutions.
                    </p>
                    <p className="text-gray-900 text-lg font-semibold leading-relaxed mb-6">
                      The lead proposer (or prime) on the project submission is a current Platinum, Gold, Silver or
                      University/Non-Profit Core ARM Institute member in good standing.
                    </p>
                    <p className="text-gray-900 text-lg font-semibold leading-relaxed">
                      Teams are required to submit an appendix with their concept paper (not included in page limit)
                      that lists prior ARM projects and describes the status of technology transition for each.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Funding Section */}
              <section id="funding" className="mb-8">
                <Collapsible open={fundingOpen} onOpenChange={setFundingOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900">Funding</h3>
                    {fundingOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-6 bg-gray-50 rounded-lg">
                    <p className="text-gray-900 text-lg leading-relaxed mb-4">
                      <strong>
                        Individual project budgets must not exceed $500K requested from ARM (smaller budget, shorter
                        duration projects are also welcome).
                      </strong>{" "}
                      ARM expects that successful proposers will provide cost share of at least 50% of the total project
                      cost.
                    </p>
                    <p className="text-gray-900 text-lg leading-relaxed mb-4">
                      Cost share may include direct costs, indirect costs, and in-kind contributions. In-kind
                      contributions should be valued at fair market rates and must be directly related to the project
                      objectives.
                    </p>
                    <p className="text-gray-900 text-lg leading-relaxed">
                      Projects are expected to have a duration of 12-18 months from the start date. Longer duration
                      projects may be considered if adequately justified.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* How to Participate Section */}
              <section id="how-to-participate" className="mb-8">
                <Collapsible open={participateOpen} onOpenChange={setParticipateOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900">How to Participate</h3>
                    {participateOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-6 bg-gray-50 rounded-lg space-y-8">
                    {/* Step 1 */}
                    <div className="border border-gray-200 rounded-lg p-6 bg-white">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Step 1: Find Potential Collaborators</h4>
                      <p className="text-gray-700 mb-4">
                        The first step to entering the project call is building a team. Take a look through our
                        directory to find potential collaborators with complementary skills and the right membership
                        level.
                      </p>
                      <div className="flex space-x-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>Connect on Slack</span>
                        </Button>
                        <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                          <span>Search in Directory</span>
                        </Button>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="border border-gray-200 rounded-lg p-6 bg-white">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Step 2: Concept Paper & Quad Chart</h4>
                      <p className="text-gray-700 mb-4">
                        After finding potential collaborators, write your concept paper together. Take a look at the
                        template down below to submit the paper.
                      </p>
                      <p className="text-gray-700 mb-4">
                        See the{" "}
                        <Link href="#" className="text-blue-600 hover:underline">
                          full project call document
                        </Link>{" "}
                        for more details.
                      </p>

                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Concept Phase Templates (3)</h5>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600 hover:underline cursor-pointer">
                              Template - Concept Paper
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600 hover:underline cursor-pointer">Template - Quad Chart</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600 hover:underline cursor-pointer">Quad Chart Guidelines</span>
                          </div>
                        </div>
                      </div>

                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">Submit Concept Paper</Button>
                    </div>

                    {/* Step 3 */}
                    <div className="border border-gray-200 rounded-lg p-6 bg-white">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Step 3: Presentation Process (Invitation only)
                      </h4>
                      <p className="text-gray-700 mb-4">
                        In the second step in the process, an invited proposer will submit a Presentation in PowerPoint
                        format (.ppt or .pptx) that describes the proposed project in detail.
                      </p>
                      <p className="text-gray-700 mb-4">
                        If invited to prepare a presentation, the following proposed project supporting documents must
                        be submitted by the lead proposer through the ARM Community website prior to the presentation
                        date.
                      </p>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-gray-900">Presentation Phase Templates (9)</h5>
                          <Button variant="ghost" size="sm" className="text-blue-600">
                            Show all
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600 hover:underline cursor-pointer">
                              Template - Statement of Work
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600 hover:underline cursor-pointer">
                              Template - Intellectual Property Management Plan
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600 hover:underline cursor-pointer">
                              Form - FFATA Information Request
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Resources Section */}
              <section id="resources" className="mb-8">
                <Collapsible open={resourcesOpen} onOpenChange={setResourcesOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900">Resources</h3>
                    {resourcesOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-6 bg-gray-50 rounded-lg">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-gray-900">Reference Materials (6)</h5>
                        <Button variant="ghost" size="sm" className="text-blue-600">
                          Show all
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600 hover:underline cursor-pointer">
                            Template - Statement of Work
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600 hover:underline cursor-pointer">
                            ARM Institute Technology Roadmap
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600 hover:underline cursor-pointer">
                            Intellectual Property Guidelines
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600 hover:underline cursor-pointer">
                            Project Reporting Requirements
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600 hover:underline cursor-pointer">Cost Share Guidelines</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600 hover:underline cursor-pointer">
                            Project Evaluation Criteria
                          </span>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>
            </div>
          </div>

          {/* Timeline Sidebar */}
          <div className="w-80">
            <Card className="sticky top-8">
              <CardContent className="p-6 space-y-6">
                {/* Submit Proposal Button */}
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold">
                  Submit Proposal
                </Button>

                {/* Timeline Items */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-orange-100 text-gray-800 rounded-t-lg px-4 py-1 text-sm font-medium border border-gray-300">
                        May
                      </div>
                      <div className="bg-gray-800 text-white rounded-b-lg px-4 py-2 text-lg font-bold border border-gray-800">
                        8
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Project Call Opens</p>
                    </div>
                  </div>

                  {/* Orange Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-orange-500"></div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-orange-100 text-gray-800 rounded-t-lg px-4 py-1 text-sm font-medium border border-gray-300">
                        May
                      </div>
                      <div className="bg-gray-800 text-white rounded-b-lg px-4 py-2 text-lg font-bold border border-gray-800">
                        28
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Project Call Webinar and Q&A</p>
                    </div>
                  </div>

                  {/* Orange Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-orange-500"></div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-orange-100 text-gray-800 rounded-t-lg px-4 py-1 text-sm font-medium border border-gray-300">
                        Jun
                      </div>
                      <div className="bg-gray-800 text-white rounded-b-lg px-4 py-2 text-lg font-bold border border-gray-800">
                        12
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Concept Paper Submission Deadline</p>
                    </div>
                  </div>

                  {/* Orange Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-orange-500"></div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-orange-100 text-gray-800 rounded-t-lg px-4 py-1 text-sm font-medium border border-gray-300">
                        Jun
                      </div>
                      <div className="bg-gray-800 text-white rounded-b-lg px-4 py-2 text-lg font-bold border border-gray-800">
                        28
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Invitations for Presentation Submission</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
                Copyright © 2025 Advanced Robotics for Manufacturing Institute. All rights reserved.
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
