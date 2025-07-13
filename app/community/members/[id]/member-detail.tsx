"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft, Star, Mail, Phone, MapPin, Building, Users, Award, Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { supabase, type Member } from "@/lib/supabase"

export default function MemberDetail() {
  const params = useParams()
  const [member, setMember] = useState<Member | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (params.id) {
      fetchMember(params.id as string)
    }
  }, [params.id])

  const fetchMember = async (id: string) => {
    try {
      setLoading(true)
      setError(null)

      const { data, error: fetchError } = await supabase.from("members").select("*").eq("id", id).single()

      if (fetchError) {
        throw fetchError
      }

      setMember(data)
    } catch (err) {
      console.error("Error fetching member:", err)
      setError("Failed to load member details")
    } finally {
      setLoading(false)
    }
  }

  const handleToggleFavorite = async () => {
    if (!member) return

    try {
      const newFavoriteStatus = !member.is_favorite

      const { error } = await supabase.from("members").update({ is_favorite: newFavoriteStatus }).eq("id", member.id)

      if (error) {
        throw error
      }

      setMember({ ...member, is_favorite: newFavoriteStatus })
    } catch (err) {
      console.error("Error updating favorite status:", err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32 mb-6"></div>
            <div className="bg-white rounded-lg p-8">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-8 bg-gray-200 rounded w-64 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-48 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-56"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !member) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/community/members">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Members
            </Button>
          </Link>
          <div className="text-center py-12">
            <div className="text-lg text-red-600">{error || "Member not found"}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/community/members">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Members
          </Button>
        </Link>

        {/* Member Profile Card */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  {member.profile_image_url ? (
                    <img
                      src={member.profile_image_url || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-600">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h1>
                  <p className="text-xl text-gray-600 mb-2">{member.member_company}</p>
                  <p className="text-lg text-gray-700">{member.designation || "(No Title Provided)"}</p>
                </div>
              </div>
              <Button variant="ghost" size="lg" onClick={handleToggleFavorite} className="p-2">
                <Star
                  className={`w-8 h-8 ${
                    member.is_favorite ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-400"
                  }`}
                />
              </Button>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {member.email && (
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{member.email}</span>
                </div>
              )}
              {member.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{member.phone}</span>
                </div>
              )}
              {member.address && (
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{member.address}</span>
                </div>
              )}
              {member.membership_level && (
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{member.membership_level} Member</span>
                </div>
              )}
            </div>

            {/* About Me */}
            {member.about_me && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-gray-700 leading-relaxed">{member.about_me}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Skills and Expertise */}
        {member.knowledgeable_about && member.knowledgeable_about.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Skills & Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {member.knowledgeable_about.map((skill, index) => (
                  <Badge
                    key={`skill-${index}`}
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 border-blue-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Committee Memberships */}
        {member.committee_tags && member.committee_tags.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Committee Memberships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {member.committee_tags.map((committee, index) => (
                  <Badge
                    key={`committee-${index}`}
                    variant="secondary"
                    className="bg-green-100 text-green-800 border-green-200"
                  >
                    {committee}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Industry Focus */}
        {member.industry && member.industry.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                Industry Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {member.industry.map((ind, index) => (
                  <Badge key={`industry-${index}`} variant="outline" className="border-gray-300">
                    {ind}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
