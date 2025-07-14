"use client";
import { Button } from "@/components/ui/button";
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
import { MainButton } from "@/components/MainButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import FileTable from "./components/file-table";

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

  const specialTopicAreas = [
    {
      image:
        "/images/special-topic-area/rapid-re-tasking-and-robot-agility.png",
      title: "Rapid Re-Tasking and Robot Agility",
    },
    {
      image:
        "/images/special-topic-area/multi-modal-inputs-for-ai-robotics-in-manufacturing.png",
      title: "Multi-modal Inputs for AI Robotics in Manufacturing",
    },
    {
      image:
        "/images/special-topic-area/adaptive-real-time-path-planning-and-control.png",
      title: "Adaptive Real-Time Path Planning and Control",
    },
    {
      image:
        "/images/special-topic-area/multirobot-multihuman-collaboration.png",
      title: "Multi-Robot, Multi-Human Collaboration",
    },
  ];

  const conceptPhaseTemplateFiles = {
    title: "Concept Phase Templates",
    files: [
      { name: "Template - Concept Paper" },
      { name: "Template - Quad Chart" },
      { name: "Quad Chart Guidelines" },
    ],
  };

  const presentationPhaseTemplateFiles = {
    title: "Presentation Phase Templates",
    files: [
      { name: "Template - Statement of Work" },
      { name: "Template - Intellectual Property Management Plan" },
      { name: "Form - FFATA Information Request" },
      { name: "Template - Project Schedule" },
      { name: "Template - Budget Justification" },
      { name: "Template - Cost Share Commitment Letter" },
      { name: "Template - Project Evaluation Plan" },
      { name: "Template - Project Reporting Requirements" },
      { name: "Template - Project Communication Plan" },
    ],
  };

  const referenceMaterialsFiles = {
    title: "Reference Materials",
    files: [
      { name: "Template - Statement of Work" },
      { name: "ARM Institute Technology Roadmap" },
      { name: "Intellectual Property Guidelines" },
      { name: "Project Reporting Requirements" },
      { name: "Cost Share Guidelines" },
      { name: "Project Evaluation Criteria" },
    ],
  };

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
      <div className="max-w-7xl mx-[127px] py-12">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header Section */}
            <div className="pl-6 flex items-center mb-4">
              <div>
                <h1 className="mb-4">{title}</h1>
                <ActiveBadge />
              </div>
            </div>

            {/* Description */}
            <div className="pl-6 mb-8 pr-36 leading-relaxed ">
              {description.map((paragraph) => (
                <p className="mb-4">{paragraph}</p>
              ))}
            </div>

            {/* Project Call Document Button */}
            <div className="pl-6 mb-8">
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
              <div className="sticky top-0 bg-white z-10 border-gray-200 ml-2 mb-4 pt-8 pb-2">
                <div className="flex overflow-x-auto text-base font-medium">
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
              <section
                id="special-topic-areas"
                className="p-8 bg-gray-50 mb-8 rounded-lg"
              >
                <Collapsible
                  open={specialTopicAreasOpen}
                  onOpenChange={setSpecialTopicAreasOpen}
                >
                  <CollapsibleTrigger
                    className={`flex items-start justify-between w-full ${
                      specialTopicAreasOpen ? "rounded-t-lg" : "rounded-lg"
                    }`}
                  >
                    <p className="small-title">Special Topic Areas</p>
                    <ChevronUp className="w-5 h-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-6 bg-gray-50 rounded-b-lg collapsible-content">
                    <div className="grid md:grid-cols-2 gap-6">
                      {specialTopicAreas.map((area, index) => (
                        <div
                          key={index}
                          className={
                            "relative overflow-hidden rounded-lg shadow-lg aspect-[22/9]"
                          }
                        >
                          <Image
                            src={area.image}
                            alt={area.title}
                            width={400}
                            height={225}
                            className="w-full h-full object-cover opacity-70"
                          />
                          {/* 55% black overlay */}
                          <div className="absolute inset-0 bg-black opacity-55"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-center">
                            <h3 className="text-white text-base font-semibold py-4 px-10 leading-normal">
                              {area.title}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Eligibility Section */}
              <section
                id="eligibility"
                className="p-8 bg-gray-50 mb-8 rounded-lg"
              >
                <Collapsible
                  open={eligibilityOpen}
                  onOpenChange={setEligibilityOpen}
                >
                  <CollapsibleTrigger
                    className={`flex items-start justify-between w-full ${
                      eligibilityOpen ? "rounded-t-lg" : "rounded-lg"
                    }`}
                  >
                    <h3 className="mb-5 small-title">Eligibility</h3>
                    {eligibilityOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pr-24 rounded-b-lg collapsible-content">
                    <p className="mb-6">
                      To address this Project call, ARM Institute encourages
                      proposers to work cooperatively in presenting integrated
                      solutions.
                    </p>
                    <p className="mb-6">
                      The lead proposer (or prime) on the project submission is
                      a current Platinum, Gold, Silver or University/Non-Profit
                      Core ARM Institute member in good standing.
                    </p>
                    <p className="">
                      Teams are required to submit an appendix with their
                      concept paper (not included in page limit) that lists
                      prior ARM projects and describes the status of technology
                      transition for each.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Funding Section */}
              <section id="funding" className="p-8 bg-gray-50 mb-8 rounded-lg">
                <Collapsible open={fundingOpen} onOpenChange={setFundingOpen}>
                  <CollapsibleTrigger
                    className={`flex items-start justify-between w-full ${
                      fundingOpen ? "rounded-t-lg" : "rounded-lg"
                    }`}
                  >
                    <h3 className="mb-5 small-title">Funding</h3>
                    {fundingOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pr-24 rounded-b-lg collapsible-content">
                    <p className=" mb-4">
                      <strong>
                        Individual project budgets must not exceed $500K
                        requested from ARM (smaller budget, shorter duration
                        projects are also welcome).
                      </strong>{" "}
                      ARM expects that successful proposers will provide cost
                      share of at least 50% of the total project cost.
                    </p>
                    <p className=" mb-4">
                      Cost share may include direct costs, indirect costs, and
                      in-kind contributions. In-kind contributions should be
                      valued at fair market rates and must be directly related
                      to the project objectives.
                    </p>
                    <p className="">
                      Projects are expected to have a duration of 12-18 months
                      from the start date. Longer duration projects may be
                      considered if adequately justified.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* How to Participate Section */}
              <section
                id="how-to-participate"
                className="p-8 bg-gray-50 mb-8 rounded-lg"
              >
                <Collapsible
                  open={participateOpen}
                  onOpenChange={setParticipateOpen}
                >
                  <CollapsibleTrigger
                    className={`flex items-start justify-between w-full ${
                      participateOpen ? "rounded-t-lg" : "rounded-lg"
                    }`}
                  >
                    <h3 className="mb-5 small-title">How to Participate</h3>
                    {participateOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="rounded-b-lg space-y-8 collapsible-content">
                    {/* Step 1 */}
                    <div className="border border-gray-200 rounded-lg p-6 bg-white">
                      <h4 className="text-lg font-medium text-gray-900 mb-4">
                        Step 1: Find Potential Collaborators
                      </h4>
                      <p className="text-gray-700 mb-4">
                        The first step to entering the project call is building
                        a team. Take a look through our directory to find
                        potential collaborators with complementary skills and
                        the right membership level.
                      </p>
                      <div className="flex space-x-4">
                        <SecondaryButton
                          className=""
                          text="Connect on Slack"
                          icon={
                            <Image
                              src={"/images/project-call/slack.png"}
                              alt={"Slack Icon"}
                              width={28}
                              height={28}
                            />
                          }
                        />
                        <SecondaryButton
                          className=""
                          text="Search in Directory"
                        />
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="border border-gray-200 rounded-lg p-6 bg-white">
                      <h4 className="text-lg font-medium text-gray-900 mb-4">
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

                      <FileTable {...conceptPhaseTemplateFiles} />

                      <SecondaryButton text="Submit Concept Paper" className="mt-6"/>
                    </div>

                    {/* Step 3 */}
                    <div className="border border-gray-200 rounded-lg p-6 bg-white">
                      <h4 className="text-lg font-medium text-gray-900 mb-4">
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

                      <FileTable {...presentationPhaseTemplateFiles} />
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Resources Section */}
              <section
                id="resources"
                className="p-6 bg-gray-50 mb-8 rounded-lg"
              >
                <Collapsible
                  open={resourcesOpen}
                  onOpenChange={setResourcesOpen}
                >
                  <CollapsibleTrigger
                    className={`flex items-start justify-between w-full ${
                      resourcesOpen ? "rounded-t-lg" : "rounded-lg"
                    }`}
                  >
                    <h3 className="mb-5 small-title">Resources</h3>
                    {resourcesOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-6 bg-gray-50 rounded-b-lg collapsible-content">
                    <FileTable {...referenceMaterialsFiles} shownFiles={6} />
                  </CollapsibleContent>
                </Collapsible>
              </section>
            </div>
          </div>

          {/* Timeline Sidebar */}
          <div className="w-[323px]">
            <div className="bg-[#F9F9F9] sticky top-8 px-6 py-5 !h-auto">
              <div className="space-y-6">
                {/* Submit Proposal Button */}
                <MainButton
                  className="main-button w-full"
                  text="Submit Proposal"
                />

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
