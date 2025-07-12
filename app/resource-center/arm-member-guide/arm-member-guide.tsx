import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, FileText, Newspaper, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function ArmMemberGuide() {
  return (<>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Let's get started</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                As a valued ARM Institute Member, you now have access into our exclusive ARM Member Digital Community.
              </p>
              <Button className="bg-[#fdb619] hover:bg-[#ef7100] text-black font-medium px-8 py-3">
                Membership Overview
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#fff4dc] border-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#fdb619] rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with other members.</h3>
                <p className="text-gray-600">Find other members to connect and collaborate with.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#e8f8fd] border-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#008ec1] rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Access exclusive ARM research.</h3>
                <p className="text-gray-600">Explore exclusive project outputs created by members.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#eafaeb] border-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#3a8941] rounded-lg flex items-center justify-center mb-6">
                  <Newspaper className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share your organization's news.</h3>
                <p className="text-gray-600">Share news and events from your own organization.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Set up your profile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Set up your profile</h2>

          <div className="bg-gray-100 rounded-lg p-8 mb-12">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="ARM Member Community profile setup interface"
              width={800}
              height={500}
              className="w-full rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Access your profile through the avatar.</h3>
                <p className="text-gray-600">Find your profile on the top right hand of your screen.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Indicate interest in projects.</h3>
                <p className="text-gray-600">This will help others find you during project teaming.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Include your area(s) of expertise.</h3>
                <p className="text-gray-600">This will help others search for teammates by skillset.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How-to Videos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How-to Videos</h2>

          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="sm" className="text-orange-500">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-orange-500">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="ARM Member Community Spotlight Series"
                  width={500}
                  height={300}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16 bg-orange-500 hover:bg-orange-600">
                    <Play className="w-6 h-6 text-white" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-[#fdb619] text-black px-3 py-1 rounded text-sm font-medium">
                  ARM Member Community Spotlight Series
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 text-center">
                  Accessing Consortium Developed Intellectual Property (CDIP)
                </h3>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="ARM Member Community Spotlight Series"
                  width={500}
                  height={300}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16 bg-orange-500 hover:bg-orange-600">
                    <Play className="w-6 h-6 text-white" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-[#fdb619] text-black px-3 py-1 rounded text-sm font-medium">
                  ARM Member Community Spotlight Series
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 text-center">
                  Networking Virtually and Finding Project Collaborators
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      </>
  )
}
