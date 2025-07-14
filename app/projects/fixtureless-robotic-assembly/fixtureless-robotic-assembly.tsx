"use client";

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronDown, Star, Play, Building, User, Download, Eye} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { OrangeButtonLeft } from "@/components/OrangeButtonLeft"
import "@/styles/globals.css";
import { CDIPDataField } from "@/components/ui/cdip-data-field";
import CDIPCard from "@/components/ui/cdip-card";
import { useState } from "react";

const allProjectFiles = [
  {
    name: "FRAME2.0_ConceptPaper_LockheedMartinATL",
    description: "/",
    status: "Approved",
    fileSize: "12.54MB",
    uploadDate: "2024-01-15",
    icon: "doc",
  },
  {
    name: "T-24-DDC-11-01 ARIS - Mid Program Review Presentation.pdf",
    description: "/",
    status: "Approved",
    fileSize: "12.54MB",
    uploadDate: "2024-02-20",
    icon: "pdf",
  },
  {
    name: "FRAME2.0_ConceptPaper_LockheedMartinATL",
    description: "/",
    status: "Approved",
    fileSize: "12.54MB",
    uploadDate: "2024-03-10",
    icon: "doc",
  },
  {
    name: "FRAME2.0_ConceptPaper_LockheedMartinATL",
    description: "/",
    status: "Approved",
    fileSize: "12.54MB",
    uploadDate: "2024-03-15",
    icon: "doc",
  },
  {
    name: "GMT20250225-190309_Recording_2304x960.mp4",
    description: "/",
    status: "Approved",
    fileSize: "128.3MB",
    uploadDate: "2024-04-01",
    icon: "mp4",
  },
  {
    name: "GMT20250225-190309_Recording_2304x960.mp4",
    description: "/",
    status: "Approved",
    fileSize: "128.3MB",
    uploadDate: "2024-04-02",
    icon: "mp4",
  },
];

const allProposalAttachments = [
  {
    name: "FRAME2.0_ConceptPaper_LockheedMartinATL",
    description: "/",
    status: "Approved",
    fileSize: "12.54MB",
    uploadDate: "2024-01-15",
    icon: "doc",
  },
  {
    name: "T-24-DDC-11-01 ARIS - Mid Program Review Presentation.pdf",
    description: "/",
    status: "Approved",
    fileSize: "12.54MB",
    uploadDate: "2024-02-20",
    icon: "pdf",
  },
  {
    name: "FRAME2.0_ConceptPaper_LockheedMartinATL",
    description: "/",
    status: "Approved",
    fileSize: "12.54MB",
    uploadDate: "2024-03-10",
    icon: "doc",
  },
  {
    name: "FRAME2.0_ConceptPaper_LockheedMartinATL",
    description: "/",
    status: "Approved",
    fileSize: "12.54MB",
    uploadDate: "2024-03-15",
    icon: "doc",
  },
  {
    name: "GMT20250225-190309_Recording_2304x960.mp4",
    description: "/",
    status: "Approved",
    fileSize: "128.3MB",
    uploadDate: "2024-04-01",
    icon: "mp4",
  },
  {
    name: "GMT20250225-190309_Recording_2304x960.mp4",
    description: "/",
    status: "Approved",
    fileSize: "128.3MB",
    uploadDate: "2024-04-02",
    icon: "mp4",
  },
];

export default function FixturelessRoboticAssembly() {
  const [showAllFiles, setShowAllFiles] = useState(false);
  const [showAllAttachments, setShowAllAttachments] = useState(false);

  // Show only first 3 files if collapsed
  const displayedFiles = showAllFiles ? allProjectFiles : allProjectFiles.slice(0, 3);

  // Show only first 3 attachments if collapsed
  const displayedAttachments = showAllAttachments ? allProposalAttachments : allProposalAttachments.slice(0, 3);

  // Helper for icon
  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return (
          <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
            <span className="text-red-600 text-xs font-bold">PDF</span>
          </div>
        );
      case "doc":
        return (
          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
            <span className="text-blue-600 text-xs font-bold">DOC</span>
          </div>
        );
      case "mp4":
        return (
          <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
            <span className="text-purple-600 text-xs font-bold">MP4</span>
          </div>
        );
      default:
        return null;
    }
  };

  const recommendedProjects = [
    {
      id: "ARM-TPC-20-02-F-01",
      title: "Automation of Characterization & Evaluation (ACE) in PPE",
      status: "Completed",
      tags: ["Aerospace", "Control", "Modeling"],
      leadOrg: "Lockheed Martin Corporation",
      principalInvestigator: "Reyneal Reyes",
      isFavorite: true,
    },
    {
      id: "ARM-TPC-15-04-F-18",
      title: "Autonomous Multi-Tool Head Surface Prep",
      status: "Completed",
      tags: ["Aerospace", "Control", "Modeling"],
      leadOrg: "Siemens Corporation, Corporate Technology",
      principalInvestigator: "Sedat Nazlibilek",
      isFavorite: true,
    },
    {
      id: "T-24-DDC-11-01",
      title: "Rapid Robotic Diagnostic Kit Discovery (R2D2)",
      status: "Completed",
      tags: ["Aerospace", "Control", "Modeling"],
      leadOrg: "ARIS Technology LLC",
      principalInvestigator: "Mingu Kang",
      isFavorite: true,
    },
  ];

  return (
    <>
      {/* Main Content */}
      <div className="max-w-7xl mx-[40px] md:mx-[80px] lg:mx-[127px] px-6 py-8">
        {/* Back Button */}
        <Link href="/all-projects">
          <OrangeButtonLeft text="All Projects" />
        </Link>

        {/* Project Header */}
        <div className="flex flex-col gap-6 mt-10 mb-10">
          {/* Project Status */}
          <span className="inline-flex items-center bg-transparent text-xs gap-1">
            <img
              src="/icons/Utility Icons/R/record.svg"
              alt="Performing"
              width={16}
              height={16}
            />
            Performing
          </span>
          {/* Project Title */}
          <div className="flex items-start justify-between">
            <h1 className="text-gray-900 mr-12 leading-9">
              Fixtureless Robotic Assembly for Manufacturing Environments 2.0
            </h1>
            <Button className="flex gap-2 bg-transparent border border-armYellow hover:bg-yellow-200 text-black rounded-full">
              Add to Favorite
              <Star className="w-4 h-4 stroke-armYellow" />
            </Button>
          </div>
          {/* Project Tags */}
          <div className="flex items-center space-x-2">
            <span className="font-medium body-small-bold card-tag">
            Automotive
            </span>
            <span className="font-medium body-small-bold card-tag">
            Technology
            </span>
            <span className="font-medium body-small-bold card-tag">
            Human-Robot Interaction
            </span>
          </div>
          {/* Project Info Cards */}
          <div className="flex flex-cols gap-6 w-fit">
            <CDIPDataField
              title="Contract Number"
              content="T-24-C19-01-10"
              showIcon={false}
            />
            <CDIPDataField
              title="Lead Organization"
              content="Lockheed Martin Corporation"
              showIcon={true}
              icon={<Building className="w-5 h-5 text-gray-400 mr-2" />}
            />
            <CDIPDataField
              title="Principal Investigator"
              content="Reyneal Reyes"
              showIcon={true}
              icon={<User className="w-5 h-5 text-gray-400 mr-2" />}
            />
          </div>
        </div>

        {/* Video and Description Section */}
        <div className="grid grid-cols-1 lg:flex gap-8 mb-12">
          {/* Video Section */}
          <div className="relative">
            <div className="relative lg:w-[640px] bg-gray-800 rounded-lg overflow-hidden aspect-video">
              <Image
                src="/images/projects/fixtureless-robotics-assembly.png"
                alt="Fixtureless Robotic Assembly and Manufacturing Environments 2.0 (FRAME 2.0)"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Button
                  size="lg"
                  className="flex bg-orange-500 hover:bg-orange-600 rounded-full w-16 h-16"
                >
                  <Play className="w-8 h-8 text-white" />
                </Button>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="flex flex-col justify-between space-y-6">
            <p className="text-gray-950 leading-relaxed">
            ARIS Technology will replace manual hard gauging with Robotically Automated 
            Non-Contact 3D Scanning, qualifying parts with data instead of manual testing. 
            The team will demonstrate a fully integrated system at the Iowa Army Plant.
            </p>

            <div className="flex flex-col items-start space-y-4">
              <Button className="flex gap-4 bg-transparent hover:bg-transparent text-base font-bold text-black px-0">
                View Project Files (Confluence)
                <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                  <img src="/icons/forward_up.svg" alt="Link To Confluence" className="w-3 h-3"/>
                </div>
              </Button>
              <Button className="flex gap-4 bg-transparent hover:bg-transparent text-base font-bold text-black px-0">
                Request Software Access
                <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                  <img src="/icons/code.svg" alt="Link To Github" className="w-3 h-3"/>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Project Summary */}
        <div className="bg-orange-50 rounded-lg py-6 pl-8 pr-16 mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/icons/Utility Icons/S/sparkle.svg" alt="Sparkle Icon" className="w-8 h-8"/>
            <h2 className="text-xl font-bold text-gray-900">Project Summary</h2>
            <span className="text-sm text-gray-600">
              generated by Agentforce AI
            </span>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              The FRAME 2.0 project (Fixtureless Robotic Assembly for Manufacturing
               Environments 2.0), led by Lockheed Martin in collaboration with CMU, 
               USC, and Yaskawa, builds on a prior system (FRAME 1.0) to improve 
               automation in high-mix, low-volume (HMLV) manufacturing settings.
            </p>

            <p>
              Its goal is to develop a flexible, reconfigurable robotic cell that 
              minimizes manual labor and setup time while increasing automation 
              capabilities across a wider range of manufacturing tasks. 
            </p>

            <div className="mt-6">
              <p className="mb-3">Key innovations include:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Fixtureless assembly:</strong> using advanced
                    computer vision for object detection/localization.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Contact-rich motion planning</strong> and
                    precomputed robotic behaviors.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>LLM-powered contingency management</strong> to
                    handle skill and support capabilities.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>
                      Collaborative multi-robot, multi-human task execution.
                    </strong>
                  </span>
                </li>
              </ul>
            </div>

            <p className="mt-4">
              The project targets higher return on investment, reduced
              reconfiguration/setup times, and easier deployment in aerospace
              manufacturing. It aims to reach a TRL/MRL 7 level, enabling
              real-world pilot production integration, especially within
               Lockheed Martin’s Space and Aeronautics divisions.
            </p>
          </div>
        </div>

        {/* Project Details */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-gray-900 mb-4 pb-4 border-b border-gray-200">
            Project Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <CDIPDataField title="Industry" content="Manufacturing" showIcon={false} />
              <CDIPDataField title="Project Start Date" content="9/1/2024" showIcon={false} />
              <CDIPDataField title="Total Project Budget" content="$999,689" showIcon={false} />
              <CDIPDataField title="Manufacturing Operations" content="Human-Robot Interaction" showIcon={false} />
            </div>
            <div className="space-y-6">
              <CDIPDataField title="TRL at Project End" content="Human-Robot Interaction" showIcon={false} />
              <CDIPDataField title="Project End Date" content="9/1/2025" showIcon={false} />
              <CDIPDataField
                title="Project Manager"
                content="Patrick Rosen"
                showIcon={true}
                icon={<User className="w-4 h-4 text-gray-600 mr-2" />}
              />
              <CDIPDataField title="Key Enabling Technology" content="Human-Robot Interaction" showIcon={false} />
            </div>
            <div className="space-y-6">
              <CDIPDataField title="Strategic Focus Area" content="Human-Robot Interaction" showIcon={false} />
              <CDIPDataField title="Project Status" content="Performing" showIcon={false} />
            </div>
          </div>
        </div>

        {/* Project Files */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Project Files ({allProjectFiles.length})
          </h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-200">
                  <TableHead className="font-semibold text-gray-900">
                    File Name
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Description
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Status
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    File Size
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Upload Date
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {displayedFiles.map((file, index) => (
                  <TableRow key={index} className="border-b border-gray-200">
                    <TableCell className="py-4">
                      <div className="flex items-center space-x-3">
                        {getFileIcon(file.icon)}
                        <span
                          className="text-blue-700 underline cursor-pointer hover:text-blue-900 transition-colors"
                          // No href, just visual
                        >
                          {file.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {file.description}
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {file.fileSize}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {file.uploadDate}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="p-4 text-center border-t border-gray-200">
              <Button
                variant="ghost"
                className="text-gray-600 font-bold flex items-center justify-center mx-auto"
                onClick={() => setShowAllFiles((prev) => !prev)}
              >
                {showAllFiles ? "Collapse" : "Show all"}
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${showAllFiles ? "rotate-180" : ""}`} />
              </Button>
            </div>
          </div>
        </div>

        {/* Proposal Attachment */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Proposal Attachment ({allProposalAttachments.length})
          </h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-200">
                  <TableHead className="font-semibold text-gray-900">
                    File Name
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Description
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Status
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    File Size
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Upload Date
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {displayedAttachments.map((file, index) => (
                  <TableRow key={index} className="border-b border-gray-200">
                    <TableCell className="py-4">
                      <div className="flex items-center space-x-3">
                        {getFileIcon(file.icon)}
                        <span
                          className="text-blue-700 underline cursor-pointer hover:text-blue-900 transition-colors"
                          // No href, just visual
                        >
                          {file.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {file.description}
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {file.fileSize}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {file.uploadDate}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="p-4 text-center border-t border-gray-200">
              <Button
                variant="ghost"
                className="text-gray-600 font-bold flex items-center justify-center mx-auto"
                onClick={() => setShowAllAttachments((prev) => !prev)}
              >
                {showAllAttachments ? "Collapse" : "Show all"}
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${showAllAttachments ? "rotate-180" : ""}`} />
              </Button>
            </div>
          </div>
        </div>

        {/* Recommended Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Recommended Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProjects.map((project, index) => (
              <CDIPCard
                key={project.id + index}
                status={project.status as "Completed" | "Performing"}
                title={project.title}
                code={project.id}
                tags={project.tags}
                leadOrg={project.leadOrg}
                principalInvestigator={project.principalInvestigator}
                imageSrc="/images/cdip/cdip-image.png"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
