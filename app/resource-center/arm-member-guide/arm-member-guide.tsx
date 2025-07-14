import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, FileText, Newspaper, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { FaNewspaper, FaPeopleArrows, FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import { HiDocumentSearch } from "react-icons/hi";
import Image from "next/image"
import Link from "next/link";

export default function ArmMemberGuide() {
  return (<>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-[127px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-semibold text-gray-900 mb-6">Let's get started</h1>
              <p className="text-base font-normal text-gray-900 mb-8 max-w-md">
                As a valued ARM Institute Member, you now have access into our exclusive ARM Member Digital Community.
              </p>
              <a
                href="https://arminstitute-my.sharepoint.us/personal/arm_workspace_arminstitute_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Farm%5Fworkspace%5Farminstitute%5Forg%2FDocuments%2FPublic%20Facing%2F2025%2F25%2D01%20Tech%20Project%20Call%2FT%2D25%2DC20%2D01%20Project%20Call%20FINAL%20%2D%20Released%20250220%2Epdf&parent=%2Fpersonal%2Farm%5Fworkspace%5Farminstitute%5Forg%2FDocuments%2FPublic%20Facing%2F2025%2F25%2D01%20Tech%20Project%20Call&ga=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="flex bg-armYellow hover:bg-[#ef7100] rounded text-black font-semibold px-3 py-6">
                  Membership Overview
                </Button>
              </a>
            </div>
            <div className="relative">
              <Image
                src="/images/arm-member-guide/get-started-welcome.png"
                alt="ARM members waving at event"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-[127px] px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/community/members" className="block">
              <Card className="!bg-[#fff4dc] border-none">
                <CardContent className="flex flex-col gap-8 p-4">
                  <div className="w-12 h-12 flex items-center justify-center mb-6">
                    <FaPeopleArrows className="w-10 h-10 text-armYellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect with other members.</h3>
                    <p className="text-gray-600">Find other members to connect and collaborate with.</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Card className="!bg-[#e8f8fd] border-none">
              <CardContent className="flex flex-col gap-8 p-4">
                <div className="w-12 h-12 flex items-center justify-center mb-6">
                  <HiDocumentSearch className="w-10 h-10 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Access exclusive ARM research.</h3>
                  <p className="text-gray-600">Explore exclusive project outputs created by members.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="!bg-[#eafaeb] border-none">
              <CardContent className="flex flex-col gap-8 p-4">
                <div className="w-12 h-12 flex items-center justify-center mb-6">
                  <FaNewspaper className="w-10 h-10 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Share your organization's news.</h3>
                  <p className="text-gray-600">Share news and events from your own organization.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Set up your profile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-[127px] px-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Set up your profile</h2>

          <div className="bg-gray-100 rounded-lg pt-12 px-20 mb-12">
            <Image
              src="/images/arm-member-guide/set-up-profile.png"
              alt="ARM Member Community profile setup interface"
              width={800}
              height={500}
              className="w-full rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="min-w-14 h-14 bg-gray-100 text-black rounded-full flex items-center justify-center font-medium font-montserrat text-2xl">
                1
              </div>
              <div>
                <h3 className="min-h-14 text-lg font-bold text-gray-900 mb-2">Access your profile through the avatar.</h3>
                <p className="text-gray-600">Find your profile on the top right hand of your screen.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="min-w-14 h-14 bg-gray-100 text-black rounded-full flex items-center justify-center font-medium font-montserrat text-2xl">
                2
              </div>
              <div>
                <h3 className="min-h-14 text-lg font-bold text-gray-900 mb-2">Indicate interest in projects.</h3>
                <p className="text-gray-600">This will help others find you during project teaming.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="min-w-14 h-14 bg-gray-100 text-black rounded-full flex items-center justify-center font-medium font-montserrat text-2xl">
                3
              </div>
              <div>
                <h3 className="min-h-14 text-lg font-bold text-gray-900 mb-2">Include your area(s) of expertise.</h3>
                <p className="text-gray-600">This will help others search for teammates by skillset.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How-to Videos */}
      <section className="py-16">
        <div className="max-w-7xl mx-[127px] px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How-to Videos</h2>
          
          <div className="flex gap-6">
            <div className="flex flex-col gap-4 items-center mb-8">
              <Button variant="ghost" size="sm" className="w-14 h-14 bg-gray-100 text-black rounded-full flex items-center justify-center">
                <FaArrowLeft className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="sm" className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center">
                <FaArrowRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative flex flex-col overflow-hidden h-auto rounded-lg bg-white">
                <div className="relative">
                  <Image
                    src="/images/arm-member-guide/how-to-videos-cover.png"
                    alt="ARM Member Community Spotlight Series"
                    width={500}
                    height={300}
                    className="w-full"
                  />
                  <div className="absolute bg-black/20 inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full px-0 w-12 h-12 bg-white hover:bg-orange-600 flex items-center justify-center">
                      <FaPlay className="w-6 h-6 text-orange-500" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-center">
                    Accessing Consortium Developed Intellectual Property (CDIP)
                  </h3>
                </div>
              </div>

              <div className="relative flex flex-col overflow-hidden h-auto rounded-lg bg-white">
                <div className="relative">
                  <Image
                    src="/images/arm-member-guide/how-to-videos-cover.png"
                    alt="ARM Member Community Spotlight Series"
                    width={500}
                    height={300}
                    className="w-full"
                  />
                  <div className="absolute bg-black/20 inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full px-0 w-12 h-12 bg-white hover:bg-orange-600 flex items-center justify-center">
                      <FaPlay className="w-6 h-6 text-orange-500" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-center">
                    Networking Virtually and Finding Project Collaborators
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </>
  )
}
