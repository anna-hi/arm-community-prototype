import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronDown, Star, Play, Building, User, Lock, ExternalLink, Download, Eye } from "lucide-react"
import Image from "next/image"
import NavBar from "@/components/NavBar"

export default function FixturelessRoboticAssembly() {
  const projectFiles = [
    {
      name: "FRAME2.5_ConceptPaper_LockheadMartin_v1.pdf",
      description: "/",
      status: "Approved",
      fileSize: "12.5MB",
      uploadDate: "2024-01-15",
      icon: "pdf",
    },
    {
      name: "T-24-DDC-11-01-ARM-Mid-Program-Review-Presentation.pdf",
      description: "/",
      status: "Approved",
      fileSize: "8.2MB",
      uploadDate: "2024-02-20",
      icon: "pdf",
    },
    {
      name: "FRAME2.5_ConceptPaper_LockheadMartin_v2.pdf",
      description: "/",
      status: "Approved",
      fileSize: "13.1MB",
      uploadDate: "2024-03-10",
      icon: "pdf",
    },
  ]

  const proposalAttachments = [
    {
      name: "FRAME2.5_ConceptPaper_LockheadMartin_v1.pdf",
      description: "/",
      status: "Approved",
      fileSize: "12.5MB",
      uploadDate: "2024-01-15",
      icon: "pdf",
    },
    {
      name: "T-24-DDC-11-01-ARM-Mid-Program-Review-Presentation.pdf",
      description: "/",
      status: "Approved",
      fileSize: "8.2MB",
      uploadDate: "2024-02-20",
      icon: "pdf",
    },
    {
      name: "FRAME2.5_ConceptPaper_LockheadMartin_v3.pdf",
      description: "/",
      status: "Approved",
      fileSize: "14.3MB",
      uploadDate: "2024-03-15",
      icon: "pdf",
    },
  ]

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
    },
    {
      id: "T-24-DDC-11-01",
      title: "Rapid Robotic Diagnostic Kit Discovery (R2D2)",
      status: "Completed",
      tags: ["Aerospace", "Control", "Modeling"],
      leadOrg: "ARIS Technology LLC",
      principalInvestigator: "Mingu Kang",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Badge className="bg-orange-500 text-white">All Projects</Badge>
          <span>/</span>
          <Badge className="bg-orange-100 text-orange-800">● Performing</Badge>
        </div>

        {/* Project Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Fixtureless Robotic Assembly for Manufacturing Environments 2.0
            </h1>
            <div className="flex items-center space-x-2 mb-6">
              <Badge variant="outline" className="text-sm">
                Automotive
              </Badge>
              <Badge variant="outline" className="text-sm">
                Technology
              </Badge>
              <Badge variant="outline" className="text-sm">
                Human-Robot Interaction
              </Badge>
            </div>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Star className="w-4 h-4 mr-2" />
            Add to Favorite
          </Button>
        </div>

        {/* Project Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Contract Number</p>
            <p className="font-medium text-gray-900">T-24-C19-01-10</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Lead Organization</p>
            <div className="flex items-center space-x-2">
              <Building className="w-4 h-4 text-gray-600" />
              <p className="font-medium text-gray-900">Lockheed Martin Corporation</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Principal Investigator</p>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-600" />
              <p className="font-medium text-gray-900">Reyneal Reyes</p>
            </div>
          </div>
        </div>

        {/* Video and Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Video Section */}
          <div className="relative">
            <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Information_Architecture-NNHSXO2j32L6UHP5WB26dcfa64RoHi.png"
                alt="Fixtureless Robotic Assembly and Manufacturing Environments 2.0 (FRAME 2.0)"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 rounded-full w-16 h-16">
                  <Play className="w-8 h-8 text-white" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg mb-2">
                  Fixtureless Robotic Assembly and Manufacturing Environments 2.0 (FRAME 2.0)
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span>Project T-24-C19-01-10</span>
                  <span>Mid-Program Review</span>
                  <span>LOCKHEED MARTIN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              ARIS Technology will replace manual hard gauging with Robotically Automated Non-Contact 3D Scanning,
              qualifying parts with data versus physical tooling. This team will demonstrate as a fully integrated
              system at the Iowa Army Depot.
            </p>

            <div className="space-y-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                <Lock className="w-4 h-4 mr-2" />
                View Project Files (Confidential)
              </Button>
              <Button
                variant="outline"
                className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Request Software Access
              </Button>
            </div>
          </div>
        </div>

        {/* Project Summary */}
        <div className="bg-orange-50 rounded-lg p-6 mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-sm">◆</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Project Summary</h2>
            <span className="text-sm text-gray-600">sponsored by Advantage AI</span>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              The proposed project, Fixtureless Robotic Assembly for Manufacturing Environments 2.0, led by Lockheed
              Martin in collaboration with CMU, LDC, and Yorktown builds on a prior system (FRAME 1.0) to improve
              automation in high-mix, low-volume (HMLV) manufacturing settings.
            </p>

            <p>
              Its goal is to develop a flexible, reconfigurable robotic cell that minimizes manual labor and setup time
              while increasing automation capabilities across a wider range of manufacturing configurations.
            </p>

            <div className="mt-6">
              <h3 className="font-semibold mb-3">Key innovations include:</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Fixtureless assembly:</strong> using advanced computer vision for object
                    detection/localization.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Contact-rich motion planning</strong> and precomputed robotic behaviors.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>LLM-powered contingency management</strong> to handle skill and support capabilities.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Collaborative multi-robot, multi-human task execution.</strong>
                  </span>
                </li>
              </ul>
            </div>

            <p className="mt-4">
              The project targets higher return on investment, reduced reconfiguration/setup times, and easier
              deployment in aerospace manufacturing. It aims to reach a TRL 7MRL 7 level, enabling real-world pilot
              production integration, especially within Lockheed Martin's Space and Aerospace divisions.
            </p>
          </div>
        </div>

        {/* Project Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Industry</h3>
                <p className="text-gray-700">Manufacturing</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Project Start Date</h3>
                <p className="text-gray-700">9/1/2024</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Total Project Budget</h3>
                <p className="text-gray-700">$999,689</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Manufacturing Operations</h3>
                <p className="text-gray-700">Human-Robot Interaction</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">TRL at Project End</h3>
                <p className="text-gray-700">Human-Robot Interaction</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Project End Date</h3>
                <p className="text-gray-700">9/1/2025</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Project Manager</h3>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <p className="text-gray-700">Patrick Rosen</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Enabling Technology</h3>
                <p className="text-gray-700">Human-Robot Interaction</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Strategic Focus Area</h3>
                <p className="text-gray-700">Human-Robot Interaction</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Project Status</h3>
                <p className="text-gray-700">Performing</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Robotics System Architecture</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-orange-100 text-orange-800">
                    Sensing
                  </Badge>
                  <Badge variant="outline" className="bg-orange-100 text-orange-800">
                    Mobility
                  </Badge>
                  <Badge variant="outline" className="bg-orange-100 text-orange-800">
                    Control
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Files */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Files (6)</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-200">
                  <TableHead className="font-semibold text-gray-900">File Name</TableHead>
                  <TableHead className="font-semibold text-gray-900">Description</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900">File Size</TableHead>
                  <TableHead className="font-semibold text-gray-900">Upload Date</TableHead>
                  <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projectFiles.map((file, index) => (
                  <TableRow key={index} className="border-b border-gray-200">
                    <TableCell className="py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                          <span className="text-red-600 text-xs font-bold">PDF</span>
                        </div>
                        <span className="text-gray-900">{file.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-700">{file.description}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Approved</Badge>
                    </TableCell>
                    <TableCell className="text-gray-700">{file.fileSize}</TableCell>
                    <TableCell className="text-gray-700">{file.uploadDate}</TableCell>
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
              <Button variant="ghost" className="text-gray-600">
                Show all
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Proposal Attachment */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Proposal Attachment (9)</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-200">
                  <TableHead className="font-semibold text-gray-900">File Name</TableHead>
                  <TableHead className="font-semibold text-gray-900">Description</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900">File Size</TableHead>
                  <TableHead className="font-semibold text-gray-900">Upload Date</TableHead>
                  <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {proposalAttachments.map((file, index) => (
                  <TableRow key={index} className="border-b border-gray-200">
                    <TableCell className="py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                          <span className="text-red-600 text-xs font-bold">PDF</span>
                        </div>
                        <span className="text-gray-900">{file.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-700">{file.description}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Approved</Badge>
                    </TableCell>
                    <TableCell className="text-gray-700">{file.fileSize}</TableCell>
                    <TableCell className="text-gray-700">{file.uploadDate}</TableCell>
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
              <Button variant="ghost" className="text-gray-600">
                Show all
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Recommended Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProjects.map((project, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-100 text-green-800">✓ {project.status}</Badge>
                    {project.isFavorite && <Star className="w-4 h-4 text-orange-500 fill-current" />}
                  </div>

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

                  <p className="text-sm text-gray-600 mb-2">{project.id}</p>
                  <h3 className="font-semibold text-gray-900 mb-4 line-clamp-2">{project.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

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
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
