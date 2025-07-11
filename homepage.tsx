import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Play
} from "lucide-react";
import Image from "next/image";

import { OrangeButton } from "./components/OrangeButton";
import { MainButton } from "./components/MainButton";
import NavBar from "./components/NavBar";
import NewsEventCard from "./components/ui/news-event-card";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar />

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
          <h1 className="mb-6">
            Welcome to the ARM Member Community, Michael!
          </h1>
          <div className="flex space-x-4">
            <div className="pr-8 flex items-center">New to the Portal?</div>
            <Button className="main-button text-black">
              Start Here
              <ArrowRight className="w-4 h-4 gap-2" />
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* ARM Announcements */}
        <section>
          <h1 className="mb-8">ARM Announcements</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="">
                  25-01 Core Tech Draft Project Call is Out
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The ARM Institute is soliciting submissions that respond to
                  technology needs of the manufacturing industry and the
                  Department of Defense (DoD). This project call is seeking
                  projects to make focused investments in the Special Topic
                  Areas (STAs).
                </p>
              </CardContent>
              <div className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Active
                </Badge>
                <OrangeButton text="Go to Project Call" />
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="">
                  2024 AI Data Foundry Tech Project Call
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Join us for our 2024 Annual Member Meeting taking place Sept.
                  3-5 in Pittsburgh! This event is free to attend and open only
                  to ARM Members. You can expect three days of networking,
                  knowledge sharing, collaboration, robotics demonstrations,
                  project updates, and more!
                </p>
              </CardContent>
              <div className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Active
                </Badge>
                <OrangeButton text="Go to Project Call" />
              </div>
            </Card>
          </div>
        </section>

        {/* Member Meeting Registration */}
        <section className="bg-neutral-100 rounded-lg p-8">
          <h2 className="mb-4">Member Meeting Registration Now Open!</h2>
          <p className="mb-6">
            Join us for our 2024 Annual Member Meeting taking place Sept. 3-5 in
            Pittsburgh! This event is free to attend and open only to ARM
            Members. You can expect three days of networking, knowledge sharing,
            collaboration, robotics demonstrations, project updates, and more!
          </p>
          <div className="flex justify-end">
            <OrangeButton text="Register here" />
          </div>
        </section>

        {/* Member Spotlight */}
        <section>
          <h1 className="mb-6">Member Spotlight</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="HEBI Robotics manufacturing"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="rounded-full w-16 h-16 bg-orange-500 hover:bg-orange-600"
                >
                  <Play className="w-6 h-6" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Meet HEBI Robotics Inc.
              </h3>
              <p className="text-gray-600 mb-6">
                Watch HEBI Robotics Inc. & impact work on driving smart
                manufacturing through AI automation.
              </p>
              <MainButton
                text="View Profile"
                icon={<ArrowRight className="w-4 h-4" />}
              ></MainButton>
            </div>
          </div>
        </section>

        {/* News */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h1 className="">News</h1>
            <Button
              variant="ghost"
              className="text-orange-500 hover:text-orange-600"
            >
              See More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <p className="text-gray-600 mb-6">
            Follow up on the latest industry trends and opportunities from the
            ARM community
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <NewsEventCard
              imagePath="/placeholder.svg?height=200&width=300"
              imageAlt="SWORD Robotics"
              title="Soft Demonstrates SWORD™ Robotics Programming Software"
              newsInfo={{ date: "May 30, 2024" }}
            />
            <NewsEventCard
              imagePath="/placeholder.svg?height=200&width=300"
              imageAlt="Manufacturing Meet-Up"
              title="Join the AMT Meet-Up to Connect to Your Local Manufacturing Network"
              newsInfo={{ date: "May 15, 2024" }}
            />
            <NewsEventCard
              imagePath="/placeholder.svg?height=200&width=300"
              imageAlt="AI Agents"
              title="Siemens Introduces AI Agents for Industrial Automation"
              newsInfo={{ date: "May 12, 2024" }}
            />
          </div>
        </section>

        {/* Featured Events */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h1 className="">Featured Events</h1>
            <Button
              variant="ghost"
              className="text-orange-500 hover:text-orange-600"
            >
              See More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <p className="text-gray-600 mb-6">
            Explore transformative project outcomes shaping the future of
            manufacturing
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <NewsEventCard
              imagePath="/placeholder.svg?height=200&width=300"
              imageAlt="ARM Event"
              caption="ARM Event"
              title="2025 Annual ARM Institute Member Meeting"
              eventInfo={{
                date: "Sep 3-5 | Sep 3, 2024",
                time: "08:00 AM - 17:00 PM",
                location: "Pittsburgh Manufacturing Department",
              }}
            />
            <NewsEventCard
              imagePath="/placeholder.svg?height=200&width=300"
              imageAlt="AI Webinar"
              caption="AI ARM Event | Webinar"
              title="AI in Manufacturing: The Basics"
              eventInfo={{
                date: "Jun 19, 2024",
                time: "12:00 PM - 01:00 PM",
                location: "Remote",
              }}
            />
            <NewsEventCard
              imagePath="/placeholder.svg?height=200&width=300"
              imageAlt="Skills Conference"
              caption="ARM Event"
              title="Skills USA National Leadership & Skills Conference"
              eventInfo={{
                date: "Jun 24 - Jun 27, 2024",
                location: "Atlanta, GA",
              }}
            />
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h1 className="">Featured Projects</h1>
            <Button
              variant="ghost"
              className="text-orange-500 hover:text-orange-600"
            >
              See More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <p className="text-gray-600 mb-6">
            Explore transformative project outcomes shaping the future of
            manufacturing
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Completed</Badge>
                  <Badge variant="outline">In Strategy</Badge>
                </div>
                <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                </div>
                <div className="text-sm text-gray-600 mb-2">T3-04-01-16</div>
                <h3 className="font-semibold mb-2">
                  Futureless Robotic Workcell for Manufacturing Environments 2.0
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Automotive</span>{" "}
                    <span className="font-medium">Technology</span>
                  </div>
                  <div className="text-gray-600">Human-Robot Interaction</div>
                  <div className="text-gray-600">
                    Lead Organization: Siemens Mentor Corporation
                  </div>
                  <div className="text-gray-600">
                    Principal Investigator: Frank Richardson
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Completed</Badge>
                  <Badge variant="outline">In Strategy</Badge>
                </div>
                <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                </div>
                <div className="text-sm text-gray-600 mb-2">T3-04-01-01</div>
                <h3 className="font-semibold mb-2">
                  Automatic T-Shirt Assembly System
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Textiles</span>{" "}
                    <span className="font-medium">Cobots</span>{" "}
                    <span className="font-medium">Modeling</span>
                  </div>
                  <div className="text-gray-600">
                    Intelligent Robotic Systems
                  </div>
                  <div className="text-gray-600">
                    Lead Organization: SoftWear Automation Machine Co., Inc.
                  </div>
                  <div className="text-gray-600">
                    Principal Investigator: Frank Richardson
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Completed</Badge>
                </div>
                <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                </div>
                <div className="text-sm text-gray-600 mb-2">T3-04-DEC-1-01</div>
                <h3 className="font-semibold mb-2">
                  Robotic Non-Contact 3D Inspection Replacing Hard Gaging
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Technology</span>
                  </div>
                  <div className="text-gray-600">
                    Intelligent Robotic Systems
                  </div>
                  <div className="text-gray-600">
                    Lead Organization: ARM Technology LLC
                  </div>
                  <div className="text-gray-600">
                    Principal Investigator: Meng Wang
                  </div>
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
                Advancing American Robotics Manufacturing through Innovation,
                Education and Collaboration
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
              <Button className="bg-orange-500 hover:bg-orange-600">
                Contact ARM
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
