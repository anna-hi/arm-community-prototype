"use client"

import type React from "react"

import { Star, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Member } from "@/lib/supabase"
import Link from "next/link"

interface MemberCardProps {
  member: Member
  onFavoriteChange?: (memberId: string, isFavorite: boolean) => void
}

export function MemberCard({ member, onFavoriteChange }: MemberCardProps) {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onFavoriteChange?.(member.id, member.is_favorite || false)
  }

  return (
    <Link href={`/community/members/${member.id}`}>
      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer relative">
        <CardContent className="p-6">
          {/* Tags at the top */}
          <div className="mb-6 space-y-2 min-h-[40px]">
            {/* Skills tags (blue) */}
            {member.knowledgeable_about && member.knowledgeable_about.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {member.knowledgeable_about.slice(0, 2).map((skill, index) => (
                  <Badge
                    key={`skill-${index}-${skill}`}
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 border border-blue-200 text-sm px-3 py-1 rounded"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            )}

            {/* Committee tags (green) */}
            {member.committee_tags && member.committee_tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {member.committee_tags.map((tag, index) => (
                  <Badge
                    key={`committee-${index}-${tag}`}
                    variant="secondary"
                    className="bg-green-100 text-green-800 border border-green-200 text-sm px-3 py-1 rounded"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Profile photo - centered */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              {member.profile_image_url ? (
                <img
                  src={member.profile_image_url || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-10 h-10 text-gray-400" />
              )}
            </div>
          </div>

          {/* Member information - centered */}
          <div className="text-center space-y-1 mb-4">
            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-600 uppercase tracking-wide">{member.member_company}</p>
            <p className="text-sm text-gray-900 font-medium">{member.designation || "(No Title Provided)"}</p>
          </div>

          {/* Favorite star - bottom right */}
          <div className="absolute bottom-4 right-4">
            <Button variant="ghost" size="sm" onClick={handleFavoriteClick} className="p-1 h-auto hover:bg-transparent">
              <Star
                className={cn(
                  "w-6 h-6",
                  member.is_favorite ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-400",
                )}
              />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
