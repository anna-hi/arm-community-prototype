"use client"

import type React from "react"

import { useState } from "react"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toggleMemberFavorite, type Member } from "@/lib/supabase"
import { cn } from "@/lib/utils"

interface MemberCardProps {
  member: Member
  onClick?: () => void
}

export function MemberCard({ member, onClick }: MemberCardProps) {
  const [isFavorite, setIsFavorite] = useState(member.is_favorite)
  const [isUpdating, setIsUpdating] = useState(false)

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isUpdating) return

    setIsUpdating(true)
    const newFavoriteStatus = !isFavorite
    const success = await toggleMemberFavorite(member.id, newFavoriteStatus)

    if (success) {
      setIsFavorite(newFavoriteStatus)
    }
    setIsUpdating(false)
  }

  // Safely handle arrays
  const skills = Array.isArray(member.knowledgeable_skills) ? member.knowledgeable_skills : []
  const committees = Array.isArray(member.committee) ? member.committee : []
  const allTags = [...skills, ...committees]

  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200 relative" onClick={onClick}>
      <CardContent className="p-6">
        {/* Tags at the top */}
        <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
          {allTags.slice(0, 3).map((tag, index) => (
            <Badge
              key={`${tag}-${index}`}
              variant="secondary"
              className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200"
            >
              {tag}
            </Badge>
          ))}
          {allTags.length > 3 && (
            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
              +{allTags.length - 3}
            </Badge>
          )}
        </div>

        {/* Centered profile photo */}
        <div className="flex justify-center mb-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={member.profile_image_url || "/placeholder-user.jpg"} alt={member.name} />
            <AvatarFallback className="text-lg font-semibold">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Member info */}
        <div className="text-center space-y-1">
          <h3 className="font-semibold text-lg text-gray-900 leading-tight">{member.name}</h3>
          <p className="text-sm text-gray-600 font-medium">{member.title}</p>
          <p className="text-sm text-gray-500">{member.company}</p>
          <p className="text-xs text-gray-400">{member.location}</p>
        </div>

        {/* Star at bottom-right */}
        <button
          onClick={handleFavoriteClick}
          disabled={isUpdating}
          className={cn(
            "absolute bottom-4 right-4 p-1 rounded-full transition-colors duration-200",
            "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            isUpdating && "opacity-50 cursor-not-allowed",
          )}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Star
            className={cn(
              "h-5 w-5 transition-colors duration-200",
              isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-400",
            )}
          />
        </button>
      </CardContent>
    </Card>
  )
}
