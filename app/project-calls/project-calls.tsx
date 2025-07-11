import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { OrangeButton } from "@/components/OrangeButton";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

export default function ProjectCalls() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-white pb-6">Project Calls</h1>
          <p className="text-white max-w-2xl">
            Browse project calls that offer funding to advance the future of
            U.S. manufacturing. These opportunities support collaborative
            proposals from ARM members working to solve critical industry
            challenges.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Active Project Calls */}
        <section>
          <h1 className="mb-8">Active Project Calls</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/project-calls/25-01-core-tech-draft">
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
            </Link>

            <Link href="/project-calls/ai-data-foundry-tech-project-call">
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
            </Link>
          </div>
        </section>

        {/* Closed Project Calls */}
        <section>
          <h1 className="mb-8">Closed Project Calls</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="">
                  Recircled RFI Opportunity: Robotics for the Fashion Industry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  {/* text-gray-800 */}
                  The ARM Institute is soliciting submissions that respond to
                  specific needs of the manufacturing industry and the
                  Department of Defense (DoD). This project call is seeking
                  projects to make focused investments in the Special Topic
                  Areas (STA) described below.
                </p>
              </CardContent>
              <div className="flex items-center justify-between">
                <Badge
                  variant="destructive"
                  className="bg-red-100 text-red-800 border-red-200"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Closed
                </Badge>
                <OrangeButton text="Go to Project Call" />
              </div>
            </Card>
          </div>
        </section>
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
                Copyright © 2025 Advanced Robotics for Manufacturing Institute.
                All rights reserved.
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
