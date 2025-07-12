"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Users, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { OrangeButton } from "@/components/OrangeButton";
import { ActiveBadge } from "./components/badges";
import NavigationItem from "./components/navigation-item";

export default function ProjectCallTemplate({
  title,
  description,
  proposalTimeline,
}: {
  title: string;
  description: string[];
  proposalTimeline: { month: string; date: string; title: string }[];
}) {
  const [eligibilityOpen, setEligibilityOpen] = useState(true);
  const [fundingOpen, setFundingOpen] = useState(true);
  const [participateOpen, setParticipateOpen] = useState(true);
  const [resourcesOpen, setResourcesOpen] = useState(true);
  const [specialTopicAreasOpen, setSpecialTopicAreasOpen] = useState(true);

  const [activeSection, setActiveSection] = useState("special-topic-areas");
  const sectionRefs = useRef({
    "special-topic-areas": null,
    eligibility: null,
    funding: null,
    "how-to-participate": null,
    resources: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for sticky header

      const sections = Object.keys(sectionRefs.current);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header Section */}
            <div className="flex items-center mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {title}
                </h1>
                <ActiveBadge />
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 pr-16 text-gray-700 text-lg leading-relaxed ">
              {description.map((paragraph) => (
                <p className="mb-4">{paragraph}</p>
              ))}
            </div>

            {/* Project Call Document Button */}
            <div className="mb-8">
              <div className="px-3 py-2 flex items-center border border-gray-300 rounded-sm bg-white max-w-fit">
                <span className="text-base text-gray-900 font-medium">
                  Project Call Document
                </span>
                <div className="m-1">
                  <OrangeButton text="" className="" />
                </div>
              </div>
            </div>

            {/* Scrollspy Navigation */}
            <div className="w-full">
              <div className="sticky top-0 bg-white z-10 border-gray-200 mb-4 pt-8 pb-4">
                <div className="flex space-x-8 overflow-x-auto text-base font-medium">
                  <NavigationItem
                    sectionId="special-topic-areas"
                    title="Special Topic Areas"
                    activeSection={activeSection}
                    onClick={() => setSpecialTopicAreasOpen(true)}
                  />
                  <NavigationItem
                    sectionId="eligibility"
                    title="Eligibility"
                    activeSection={activeSection}
                    onClick={() => setEligibilityOpen(true)}
                  />
                  <NavigationItem
                    sectionId="funding"
                    title="Funding"
                    activeSection={activeSection}
                    onClick={() => setFundingOpen(true)}
                  />
                  <NavigationItem
                    sectionId="how-to-participate"
                    title="How to Participate"
                    activeSection={activeSection}
                    onClick={() => setParticipateOpen(true)}
                  />
                  <NavigationItem
                    sectionId="resources"
                    title="Resources"
                    activeSection={activeSection}
                    onClick={() => setResourcesOpen(true)}
                  />
                </div>
              </div>

              {/* Special Topic Areas Section */}
              <section id="special-topic-areas" className="mb-8">
                <Collapsible
                  open={specialTopicAreasOpen}
                  onOpenChange={setSpecialTopicAreasOpen}
                >
                  <CollapsibleTrigger
                    className={`flex items-center justify-between w-full p-6 bg-gray-50 hover:bg-gray-100 ${
                      specialTopicAreasOpen ? "rounded-t-lg" : "rounded-lg"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900">
                      Special Topic Areas
                    </h3>
                    <ChevronUp className="w-5 h-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-6 bg-gray-50 rounded-b-lg collapsible-content">
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
                          <h4 className="text-white text-xl font-semibold p-4">
                            Rapid Re-Tasking and Robot Agility
                          </h4>
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
                <Collapsible
                  open={eligibilityOpen}
                  onOpenChange={setEligibilityOpen}
                >
                  <CollapsibleTrigger
                    className={`flex items-center justify-between w-full p-6 bg-gray-50 hover:bg-gray-100 ${
                      eligibilityOpen ? "rounded-t-lg" : "rounded-lg"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900">
                      Eligibility
                    </h3>
                    {eligibilityOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-6 bg-gray-50 rounded-b-lg collapsible-content">
                    <p className="text-gray-900 text-lg leading-relaxed mb-6">
                      To address this Project call, ARM Institute encourages
                      proposers to work cooperatively in presenting integrated
                      solutions.
                    </p>
                    <p className="text-gray-900 text-lg font-semibold leading-relaxed mb-6">
                      The lead proposer (or prime) on the project submission is
                      a current Platinum, Gold, Silver or University/Non-Profit
                      Core ARM Institute member in good standing.
                    </p>
                    <p className="text-gray-900 text-lg font-semibold leading-relaxed">
                      Teams are required to submit an appendix with their
                      concept paper (not included in page limit) that lists
                      prior ARM projects and describes the status of technology
                      transition for each.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Funding Section */}
              <section id="funding" className="mb-8">
                <Collapsible open={fundingOpen} onOpenChange={setFundingOpen}>
                  <CollapsibleTrigger
                    className={`flex items-center justify-between w-full p-6 bg-gray-50 hover:bg-gray-100 ${
                      fundingOpen ? "rounded-t-lg" : "rounded-lg"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900">
                      Funding
                    </h3>
                    {fundingOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-6 bg-gray-50 rounded-b-lg collapsible-content">
                    <p className="text-gray-900 text-lg leading-relaxed mb-4">
                      <strong>
                        Individual project budgets must not exceed $500K
                        requested from ARM (smaller budget, shorter duration
                        projects are also welcome).
                      </strong>{" "}
                      ARM expects that successful proposers will provide cost
                      share of at least 50% of the total project cost.
                    </p>
                    <p className="text-gray-900 text-lg leading-relaxed mb-4">
                      Cost share may include direct costs, indirect costs, and
                      in-kind contributions. In-kind contributions should be
                      valued at fair market rates and must be directly related
                      to the project objectives.
                    </p>
                    <p className="text-gray-900 text-lg leading-relaxed">
                      Projects are expected to have a duration of 12-18 months
                      from the start date. Longer duration projects may be
                      considered if adequately justified.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* How to Participate Section */}
              <section id="how-to-participate" className="mb-8">
                <Collapsible
                  open={participateOpen}
                  onOpenChange={setParticipateOpen}
                >
                  <CollapsibleTrigger
                    className={`flex items-center justify-between w-full p-6 bg-gray-50 hover:bg-gray-100 ${
                      participateOpen ? "rounded-t-lg" : "rounded-lg"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900">
                      How to Participate
                    </h3>
                    {participateOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-6 bg-gray-50 rounded-b-lg space-y-8 collapsible-content">
                    {/* Step 1 */}
                    <div className="border border-gray-200 rounded-lg p-6 bg-white">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Step 1: Find Potential Collaborators
                      </h4>
                      <p className="text-gray-700 mb-4">
                        The first step to entering the project call is building
                        a team. Take a look through our directory to find
                        potential collaborators with complementary skills and
                        the right membership level.
                      </p>
                      <div className="flex space-x-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>Connect on Slack</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="flex items-center space-x-2 bg-transparent"
                        >
                          <span>Search in Directory</span>
                        </Button>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="border border-gray-200 rounded-lg p-6 bg-white">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Step 2: Concept Paper & Quad Chart
                      </h4>
                      <p className="text-gray-700 mb-4">
                        After finding potential collaborators, write your
                        concept paper together. Take a look at the template down
                        below to submit the paper.
                      </p>
                      <p className="text-gray-700 mb-4">
                        See the{" "}
                        <Link
                          href="#"
                          className="text-blue-600 hover:underline"
                        >
                          full project call document
                        </Link>{" "}
                        for more details.
                      </p>

                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">
                          Concept Phase Templates (3)
                        </h5>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600 hover:underline cursor-pointer">
                              Template - Concept Paper
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600 hover:underline cursor-pointer">
                              Template - Quad Chart
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600 hover:underline cursor-pointer">
                              Quad Chart Guidelines
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        Submit Concept Paper
                      </Button>
                    </div>

                    {/* Step 3 */}
                    <div className="border border-gray-200 rounded-lg p-6 bg-white">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Step 3: Presentation Process (Invitation only)
                      </h4>
                      <p className="text-gray-700 mb-4">
                        In the second step in the process, an invited proposer
                        will submit a Presentation in PowerPoint format (.ppt or
                        .pptx) that describes the proposed project in detail.
                      </p>
                      <p className="text-gray-700 mb-4">
                        If invited to prepare a presentation, the following
                        proposed project supporting documents must be submitted
                        by the lead proposer through the ARM Community website
                        prior to the presentation date.
                      </p>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-gray-900">
                            Presentation Phase Templates (9)
                          </h5>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600"
                          >
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
                <Collapsible
                  open={resourcesOpen}
                  onOpenChange={setResourcesOpen}
                >
                  <CollapsibleTrigger
                    className={`flex items-center justify-between w-full p-6 bg-gray-50 hover:bg-gray-100 ${
                      resourcesOpen ? "rounded-t-lg" : "rounded-lg"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900">
                      Resources
                    </h3>
                    {resourcesOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-6 bg-gray-50 rounded-b-lg collapsible-content">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-gray-900">
                          Reference Materials (6)
                        </h5>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600"
                        >
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
                          <span className="text-blue-600 hover:underline cursor-pointer">
                            Cost Share Guidelines
                          </span>
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
            <Card className="sticky top-8 p-6 !h-auto">
              <CardContent className="space-y-6">
                {/* Submit Proposal Button */}
                <Button className="body w-full bg-armYellow hover:bg-orange-600 text-gray-950 py-3 font-regular">
                  Submit Proposal
                </Button>

                {/* Timeline Items */}
                <div>
                  {proposalTimeline.map((item, index) => (
                    <>
                      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg border border-gray-200">
                        <div className="w-16 shrink-0 flex flex-col items-center border border-gray-950 rounded-lg overflow-hidden">
                          <div className="w-full h-7 bg-orange-100 text-sm font-montserrat font-semibold text-gray-950 flex items-center justify-center">
                            {item.month}
                          </div>
                          <div className="w-full h-9 bg-zinc-800 text-md font-montserrat font-semibold text-white flex items-center justify-center">
                            {item.date}
                          </div>
                        </div>
                        <p className="body text-sm font-medium text-gray-900">
                          {item.title}
                        </p>
                      </div>
                      {index < proposalTimeline.length - 1 && (
                        <>
                          {/* Orange Arrow */}
                          <div className="flex flex-col items-center">
                            {/* Vertical line */}
                            <div className="w-0 h-8 mb-[-2px] border border-armYellow"></div>
                            {/* upside arrow */}
                            <div className="w-0 h-0 border-x-[6px] border-b-[9px] border-l-transparent border-r-transparent border-b-armYellow"></div>
                          </div>
                        </>
                      )}
                    </>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
