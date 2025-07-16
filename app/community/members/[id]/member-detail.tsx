"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Mail, Phone, Star } from "lucide-react"
import { OrangeButtonLeft } from "@/components/OrangeButtonLeft"
import Link from "next/link"

interface Member {
  id: string
  name: string
  title: string
  company: string
  location: string
  email: string
  phone?: string
  address?: string
  bio: string
  knowledgeable_skills: string[]
  membership_level?: string
  membership_role?: string
  is_favorite: boolean
  profile_image_url?: string
}

export default function MemberDetail() {
  const params = useParams()
  const router = useRouter()
  const [member, setMember] = useState<Member | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showAllSkills, setShowAllSkills] = useState(false)

  const memberId = params.id as string

  useEffect(() => {
    // Replace with your actual fetch logic
    async function fetchMember() {
      setLoading(true)
      setError(null)
      // Simulate fetch
      setTimeout(() => {
        // Example member data
        const data: Member = {
          id: memberId,
          name: "Aaron Prather",
          title: "Director, Robotics & Autonomous Systems Programs",
          company: "ASTM",
          location: "",
          email: "aprather@astm.com",
          phone: "(123) 456-7890",
          address: "(Not Provided)",
          bio:
            "Leads ASTM efforts in the field of Robotics and Autonomous Systems. From Standards Development to Workforce Training to R&D, ASTM has a lot of tools to offer.",
          knowledgeable_skills: [
            "Automation",
            "Autonomous Vehicles",
            "Collaborative Robots",
            "Drones",
            "Industrial Robots",
            "Mobile Robots",
            "Public Speaking",
          ],
          membership_level: "Supporting",
          membership_role: "TAC Committee Member",
          is_favorite: true,
          profile_image_url: "/images/members/aaron-prather.jpeg",
        }
        setMember(data)
        setIsFavorite(data.is_favorite)
        setLoading(false)
      }, 500)
    }
    if (memberId) fetchMember()
  }, [memberId])

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev)
    setMember((prev) => (prev ? { ...prev, is_favorite: !prev.is_favorite } : null))
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading member details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !member) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error || "Member not found"}</p>
            <Button onClick={() => router.back()}>Go Back</Button>
          </div>
        </div>
      </div>
    )
  }

  // Show only first 7 skills unless "Show More" is clicked
  const skillsToShow = showAllSkills ? member.knowledgeable_skills : member.knowledgeable_skills.slice(0, 7)

  return (
    <>
      <main className="bg-[#fafafa] min-h-screen">
        <div className="flex flex-col max-w-7xl mx-[127px] px-6 py-10 gap-8">
          {/* Back Button */}
          <Link href="/community/members">
            <OrangeButtonLeft text="Member Directory" />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Card */}
            <div>
              <Card className="!h-auto rounded-lg !bg-white">
                <CardContent className="flex flex-col items-center">
                  <div className="w-full flex justify-end">
                    <button
                      onClick={handleToggleFavorite}
                      className="p-2 rounded-full bg-orange-100 transition"
                      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                      <Star
                        className={`w-6 h-6 ${
                          isFavorite ? "fill-yellow-400 text-yellow-400" : "text-armYellow"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="relative mb-4">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src={member.profile_image_url || "/placeholder-user.jpg"} alt={member.name} />
                      <AvatarFallback className="text-2xl font-semibold bg-gray-200">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg font-montserrat text-gray-900">{member.name}</div>
                    <div className="text-sm text-gray-500 mb-6">{member.company}</div>
                    <div className="text-sm text-gray-900 mb-4">{member.title}</div>
                  </div>
                  <div className="w-full border-t border-gray-200 my-4" />
                  <div className="w-full text-left text-sm space-y-4">
                    <div>
                      <span className="font-medium text-gray-400">Email</span>
                      <br />
                      <a href={`mailto:${member.email}`} className="font-medium text-gray-950 underline">
                        {member.email}
                      </a>
                    </div>
                    <div>
                      <span className="font-medium text-gray-400">Phone</span>
                      <br />
                      <span className="text-gray-950">{member.phone || "(Not Provided)"}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-400">Address</span>
                      <br />
                      <span className="text-gray-600">{member.address || "(Not Provided)"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Details */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {/* About Me */}
              <Card className="!h-auto rounded-lg !bg-white">
                <CardContent className="">
                  <div className="font-bold text-lg text-gray-900 mb-2">About Me</div>
                  <p className="text-gray-700">{member.bio}</p>
                </CardContent>
              </Card>

              {/* Knowledgeable About */}
              <Card className="!h-auto rounded-lg !bg-white">
                <CardContent className="">
                  <div className="font-bold text-lg text-gray-900 mb-2">Knowledgeable about</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {skillsToShow.map((skill, idx) => (
                      <Badge
                        key={idx}
                        className="bg-blue-100 text-gray-950 px-3 py-1 rounded text-sm font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {member.knowledgeable_skills.length > 7 && (
                    <button
                      className="text-armOrange text-sm font-medium underline"
                      onClick={() => setShowAllSkills((prev) => !prev)}
                    >
                      {showAllSkills ? "Show Less" : "Show More"}
                    </button>
                  )}
                </CardContent>
              </Card>

              {/* Membership Level & Role */}
              <Card className="!h-auto rounded-lg !bg-white">
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="font-bold text-lg text-gray-900 mb-2">Membership Level</div>
                    <Badge className="bg-[#fff4dc] text-gray-900 px-3 py-1 rounded text-sm font-normal">
                      {member.membership_level || "(Not Provided)"}
                    </Badge>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900 mb-2">Membership Role</div>
                    <Badge className="bg-[#e8f8e4] text-gray-900 px-3 py-1 rounded text-sm font-normal">
                      {member.membership_role || "(Not Provided)"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
