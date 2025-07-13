"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Mail, Phone, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { fetchMemberById, toggleMemberFavorite, type Member } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface MemberDetailProps {
  memberId: string
}

export default function MemberDetail({ memberId }: MemberDetailProps) {
  const [member, setMember] = useState<Member | null>(null)
  const [loading, setLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    async function loadMember() {
      try {
        const data = await fetchMemberById(memberId)
        if (data) {
          setMember(data)
          setIsFavorite(data.is_favorite)
        }
      } catch (error) {
        console.error("Error loading member:", error)
      } finally {
        setLoading(false)
      }
    }

    if (memberId) {
      loadMember()
    }
  }, [memberId])

  const handleFavoriteClick = async () => {
    if (!member || isUpdating) return

    setIsUpdating(true)
    const newFavoriteStatus = !isFavorite
    const success = await toggleMemberFavorite(member.id, newFavoriteStatus)

    if (success) {
      setIsFavorite(newFavoriteStatus)
    }
    setIsUpdating(false)
  }

  const handleBack = () => {
    router.push("/community/members")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading member details...</div>
        </div>
      </div>
    )
  }

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Member not found</h1>
            <Button onClick={handleBack} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Members
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Safely handle arrays
  const skills = Array.isArray(member.knowledgeable_skills) ? member.knowledgeable_skills : []
  const committees = Array.isArray(member.committee) ? member.committee : []

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Button onClick={handleBack} variant="outline" className="mb-6 bg-transparent">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Members
        </Button>

        {/* Member profile card */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile image and basic info */}
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarImage src={member.profile_image_url || "/placeholder-user.jpg"} alt={member.name} />
                  <AvatarFallback className="text-2xl font-semibold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <Button
                  onClick={handleFavoriteClick}
                  disabled={isUpdating}
                  variant="outline"
                  size="sm"
                  className={cn("transition-colors duration-200", isUpdating && "opacity-50 cursor-not-allowed")}
                >
                  <Star
                    className={cn("mr-2 h-4 w-4", isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400")}
                  />
                  {isFavorite ? "Favorited" : "Add to Favorites"}
                </Button>
              </div>

              {/* Member details */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h1>
                    <p className="text-xl text-gray-600 font-medium mb-1">{member.title}</p>
                    <p className="text-lg text-gray-500 mb-4">{member.company}</p>
                  </div>
                </div>

                {/* Contact information */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-3 text-gray-400" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors">
                      {member.email}
                    </a>
                  </div>
                  {member.phone && (
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-5 w-5 mr-3 text-gray-400" />
                      <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  )}
                </div>

                {/* Bio */}
                {member.bio && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills and committees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skills */}
          {skills.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Areas of Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={`skill-${index}`}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Committees */}
          {committees.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Committee Involvement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {committees.map((committee, index) => (
                    <Badge
                      key={`committee-${index}`}
                      variant="secondary"
                      className="bg-green-100 text-green-800 hover:bg-green-200"
                    >
                      {committee}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
