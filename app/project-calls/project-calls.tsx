import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { OrangeButton } from "@/components/OrangeButton";
import { ActiveBadge } from "./project-call-template/components/badges";

export default function ProjectCalls() {
  return (<>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/homepage/banner-image.png')",
          }}
        >
           <div className="absolute inset-0 bg-black" style={{ opacity: 0.6 }}></div>
        </div>
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
                  <ActiveBadge />
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
                  <ActiveBadge />
                  <OrangeButton text="Go to Project Call" />
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* Closed Project Calls */}
        {/* add bottom margin */}
        <section className="">
          <h1 className="mb-8">Closed Project Calls</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="">
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
                  className="bg-red-100 text-red-800 "
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

      </>
  );
}
