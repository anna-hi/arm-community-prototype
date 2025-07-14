import { Button } from "@/components/ui/button";
import CDIPCard from "@/components/ui/cdip-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, List, Grid3X3, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

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
  ];

  return (
    <>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="mb-8">All Projects</h1>

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
        <div className="">
          <div className="bg-[#F3F3F3] rounded-lg p-6 mb-8">
            <h3 className="mb-4">Filters</h3>
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
                  <SelectItem value="trl3">TRL 4</SelectItem>
                  <SelectItem value="trl3">TRL 5</SelectItem>
                  <SelectItem value="trl3">TRL 6</SelectItem>
                  <SelectItem value="trl3">TRL 7</SelectItem>
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
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Lead Organization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="henderson">
                    Henderson Sewing Machine Co.
                  </SelectItem>
                  <SelectItem value="aris">ARIS Technology, LLC</SelectItem>
                  <SelectItem value="lockheed">
                    Lockheed Martin Corporation
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project, index) => {
              const isFixtureless =
                project.title ===
                "Fixtureless Robotic Assembly for Manufacturing Environments 2.0";
              const card = (
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
              );
              return isFixtureless ? (
                <Link
                  key={project.id + index}
                  href="/projects/fixtureless-robotic-assembly"
                  className="block"
                >
                  {card}
                </Link>
              ) : (
                card
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-4">
            <Button variant="ghost" size="sm" disabled>
              <ChevronLeft className="w-4 h-4 mr-1" />
              Prev
            </Button>
            <div className="flex items-center space-x-2">
              <Button
                variant="default"
                size="sm"
                className="bg-orange-500 hover:bg-orange-600"
              >
                1
              </Button>
              <span className="text-sm text-gray-600">of 6</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-orange-500 hover:text-orange-600"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
