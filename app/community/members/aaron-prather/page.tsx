import NavBar from "@/components/NavBar"
import { ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function AaronPratherProfile() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <NavBar />

      {/* Breadcrumb */}
      <div className="bg-white px-6 py-4 border-b">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/community/members"
            className="inline-flex items-center gap-2 text-[#ef7100] hover:text-[#d83a00] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Member Directory</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              {/* Star Icon */}
              <div className="flex justify-center mb-6">
                <Star className="w-8 h-8 text-[#ffb621] fill-current" />
              </div>

              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src="/images/members/aaron-prather.jpeg"
                    alt="Aaron Prather"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-[#222222] mb-2">Aaron Prather</h1>
                <p className="text-[#ef7100] font-semibold mb-2">ASTM</p>
                <p className="text-[#747474] text-sm leading-relaxed">
                  Director, Robotics & Autonomous Systems Programs
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-[#a0a0a0] text-sm mb-1">Email</p>
                  <p className="text-[#222222] text-sm">aprather@astm.com</p>
                </div>

                <div>
                  <p className="text-[#a0a0a0] text-sm mb-1">Phone</p>
                  <p className="text-[#222222] text-sm">(123) 456-7890</p>
                </div>

                <div>
                  <p className="text-[#a0a0a0] text-sm mb-1">Address</p>
                  <p className="text-[#222222] text-sm">(Not Provided)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              {/* About Me Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#222222] mb-4">About Me</h2>
                <p className="text-[#747474] leading-relaxed">
                  Leads ASTM efforts in the field of Robotics and Autonomous Systems. From Standards Development to
                  Workforce Training to R&D, ASTM has a lot of tools to offer.
                </p>
              </div>

              {/* Knowledgeable About Section */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#222222] mb-4">Knowledgeable about</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-[#e8f3ff] text-[#222222] border-[#aabbcc]">
                    Automation
                  </Badge>
                  <Badge variant="outline" className="bg-[#e8f3ff] text-[#222222] border-[#aabbcc]">
                    Autonomous Vehicles
                  </Badge>
                  <Badge variant="outline" className="bg-[#e8f3ff] text-[#222222] border-[#aabbcc]">
                    Collaborative Robots
                  </Badge>
                  <Badge variant="outline" className="bg-[#e8f3ff] text-[#222222] border-[#aabbcc]">
                    Drones
                  </Badge>
                  <Badge variant="outline" className="bg-[#e8f3ff] text-[#222222] border-[#aabbcc]">
                    Industrial Robots
                  </Badge>
                  <Badge variant="outline" className="bg-[#e8f3ff] text-[#222222] border-[#aabbcc]">
                    Mobile Robots
                  </Badge>
                  <Badge variant="outline" className="bg-[#e8f3ff] text-[#222222] border-[#aabbcc]">
                    Public Speaking
                  </Badge>
                </div>
                <button className="text-[#ef7100] hover:text-[#d83a00] text-sm font-medium transition-colors">
                  Show More
                </button>
              </div>

              {/* Membership Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-[#222222] mb-3">Membership Level</h4>
                  <Badge variant="outline" className="bg-[#ffe9bc] text-[#222222] border-[#ffb621]">
                    Supporting
                  </Badge>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#222222] mb-3">Membership Role</h4>
                  <Badge variant="outline" className="bg-[#ddf9e2] text-[#222222] border-[#3a8941]">
                    TAC Committee Member
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#181818] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Copyright */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/arm-nav-logo.png" alt="ARM Institute" width={40} height={40} className="w-10 h-10" />
                <div>
                  <div className="text-xl font-bold">ARM</div>
                  <div className="text-sm text-[#a0a0a0]">INSTITUTE</div>
                </div>
              </div>
              <p className="text-sm text-[#a0a0a0] leading-relaxed">
                Copyright © 2025 Advanced Robotics for Manufacturing Institute. All rights reserved.
              </p>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-semibold mb-3 text-white">Address</h4>
              <p className="text-sm text-[#a0a0a0] leading-relaxed">
                Mill 19 A 4501 Lytle St., Suite 200
                <br />
                Pittsburgh, PA 15207
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3 text-white">Phone</h4>
              <p className="text-sm text-[#a0a0a0] mb-4">412-785-0444</p>

              <div>
                <p className="font-semibold mb-3 text-white">Need Help?</p>
                <button className="bg-[#ffb621] hover:bg-[#ef7100] text-[#181818] px-4 py-2 rounded font-medium text-sm transition-colors">
                  Contact ARM
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
