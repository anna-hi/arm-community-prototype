import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { OrangeButton } from "./components/OrangeButton";
import { MainButton } from "./components/MainButton";
import NewsEventCard from "./components/ui/news-event-card";
import CDIPCard from "./components/ui/cdip-card";
import MemberSpotlightSection from "./components/ui/member-spotlight/member-spotlight-section";

export default function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/homepage/banner-image.png')",
          }}
        >
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: 0.6 }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-white pb-14">
            Welcome to the ARM Member Community, Michael!
          </h1>
          <div className="flex space-x-4">
            <p className="flex font-bold items-center">New to the Portal?</p>
            <Link href="/resource-center/arm-member-guide">
              <MainButton
                text="Start Here"
                icon={<ArrowRight className="w-4 h-4" />}
                className="small-main-button"
              />
            </Link>
          </div>
        </div>
      </section>

      <div className="md:mx-[100px] px-6 py-12 space-y-12">
        {/* ARM Announcements */}
        <section>
          <h1 className="mb-8">ARM Announcements</h1>
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
        <MemberSpotlightSection />
        {/* News */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h1 className="">News</h1>
            <OrangeButton text="See More" />
          </div>
          <p className="text-gray-600 mb-6">
            Follow up on the latest industry trends and opportunities from the
            ARM community
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <NewsEventCard
              imagePath="/images/homepage/news-1.png"
              imageAlt="SWORD Robotics"
              title="Soft Demonstrates SWORD™ Robotics Programming Software"
              newsInfo={{ date: "May 30, 2024" }}
            />
            <NewsEventCard
              imagePath="/images/homepage/news-2.png"
              imageAlt="Manufacturing Meet-Up"
              title="Join the AMT Meet-Up to Connect to Your Local Manufacturing Network"
              newsInfo={{ date: "May 15, 2024" }}
            />
            <NewsEventCard
              imagePath="/images/homepage/news-3.png"
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
            <OrangeButton text="See More" />
          </div>
          <p className="text-gray-600 mb-6">
            Explore transformative project outcomes shaping the future of
            manufacturing
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <NewsEventCard
              imagePath="/images/homepage/featured-events-1.png"
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
              imagePath="/images/homepage/featured-events-2.png"
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
              imagePath="/images/homepage/featured-events-3.png"
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
            <OrangeButton text="See More" />
          </div>
          <p className="text-gray-600 mb-6">
            Explore transformative project outcomes shaping the future of
            manufacturing
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <CDIPCard
              status="Completed"
              title="Fixtureless Robotic Workcell for Manufacturing Environments 2.0"
              imageSrc="/images/cdip/cdip-image.png" // or your actual image path
              tags={["Automotive", "Technology", "Human-Robot Interaction"]}
              code="T3-04-01-16"
              leadOrg="Siemens Corporation"
              principalInvestigator="Frank Richardson"
            ></CDIPCard>
            <CDIPCard
              status="Completed"
              title="Automatic T-Shirt Assembly System"
              imageSrc="/images/cdip/cdip-image.png" // or your actual image path
              tags={["Textiles", "Cobots", "Modeling"]}
              code="T3-04-01-01"
              leadOrg="Henderson Sewing Machine Co."
              principalInvestigator="Frank Richardson"
            ></CDIPCard>
            <CDIPCard
              status="Performing"
              title="Robotic Non-Contact 3D Inspection Replacing Hard Gaging"
              imageSrc="/images/cdip/cdip-image.png" // or your actual image path
              tags={["Automotive", "Inspection", "Robotics"]}
              code="T3-04-DEC-1-01"
              leadOrg="ARM Technology LLC"
              principalInvestigator="Meng Wang"
            ></CDIPCard>
          </div>
        </section>
      </div>
    </>
  );
}
