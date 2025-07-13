"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Mail, Phone, Linkedin, MapPin, Star } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface Member {
  id: string
  name: string
  title: string
  company: string
  location: string
  email: string
  phone?: string
  linkedin?: string
  bio: string
  expertise: string[]
  committee: string[]
  knowledgeable_skills: string[]
  is_favorite: boolean
  profile_image?: string
}

export default function MemberDetail() {
  const params = useParams()
  const router = useRouter()
  const [member, setMember] = useState<Member | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)

  const memberId = params.id as string

  const fetchMember = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data, error: fetchError } = await supabase.from("members").select("*").eq("id", memberId).single()

      if (fetchError) {
        throw fetchError
      }

      if (!data) {
        throw new Error("Member not found")
      }

      // Ensure arrays are properly initialized
      const processedMember = {
        ...data,
        expertise: Array.isArray(data.expertise) ? data.expertise : [],
        committee: Array.isArray(data.committee) ? data.committee : [],
        knowledgeable_skills: Array.isArray(data.knowledgeable_skills) ? data.knowledgeable_skills : [],
        is_favorite: Boolean(data.is_favorite),
      }

      setMember(processedMember)
      setIsFavorite(processedMember.is_favorite)
    } catch (err) {
      console.error("Error fetching member:", err)
      setError("Failed to load member details. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (memberId) {
      fetchMember()
    }
  }, [memberId])

  const handleToggleFavorite = async () => {
    if (!member) return

    try {
      const newFavoriteState = !isFavorite

      const { error } = await supabase.from("members").update({ is_favorite: newFavoriteState }).eq("id", member.id)

      if (error) {
        throw error
      }

      setIsFavorite(newFavoriteState)
      setMember((prev) => (prev ? { ...prev, is_favorite: newFavoriteState } : null))
    } catch (err) {
      console.error("Error updating favorite status:", err)
    }
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

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-6 p-0 h-auto font-normal text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Members
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="relative inline-block mb-4">
                <Avatar className="w-32 h-32 mx-auto">
                  <AvatarImage src={member.profile_image || "/placeholder-user.jpg"} alt={member.name} />
                  <AvatarFallback className="text-2xl font-semibold bg-gray-200">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <button
                  onClick={handleToggleFavorite}
                  className="absolute -top-2 -right-2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                  <Star
                    className={`w-5 h-5 ${
                      isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-400"
                    }`}
                  />
                </button>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h1>
              <p className="text-lg text-gray-600 mb-1">{member.title}</p>
              <p className="text-base text-gray-500 mb-4">{member.company}</p>

              <div className="flex items-center justify-center text-gray-500 mb-6">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{member.location}</span>
              </div>

              <Separator className="my-6" />

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2 text-gray-400" />
                  <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 text-sm">
                    {member.email}
                  </a>
                </div>

                {member.phone && (
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    <a href={`tel:${member.phone}`} className="text-blue-600 hover:text-blue-800 text-sm">
                      {member.phone}
                    </a>
                  </div>
                )}

                {member.linkedin && (
                  <div className="flex items-center justify-center">
                    <Linkedin className="w-4 h-4 mr-2 text-gray-400" />
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio Section */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{member.bio}</p>
            </CardContent>
          </Card>

          {/* Expertise Section */}
          {member.expertise.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Areas of Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((item, index) => (
                    <Badge
                      key={`expertise-${index}`}
                      variant="secondary"
                      className="px-3 py-1 bg-blue-100 text-blue-800"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Committee Involvement */}
          {member.committee.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Committee Involvement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {member.committee.map((item, index) => (
                    <Badge
                      key={`committee-${index}`}
                      variant="secondary"
                      className="px-3 py-1 bg-green-100 text-green-800"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Skills & Knowledge */}
          {member.knowledgeable_skills.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Skills & Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {member.knowledgeable_skills.map((item, index) => (
                    <Badge
                      key={`skill-${index}`}
                      variant="secondary"
                      className="px-3 py-1 bg-purple-100 text-purple-800"
                    >
                      {item}
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
