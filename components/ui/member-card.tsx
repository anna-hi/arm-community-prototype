"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { useState } from "react"

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
  profile_image_url?: string
}

interface MemberCardProps {
  member: Member
  onToggleFavorite?: (id: string, isFavorite: boolean) => void
}

export function MemberCard({ member, onToggleFavorite }: MemberCardProps) {
  const [isFavorite, setIsFavorite] = useState(member.is_favorite)

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const newFavoriteState = !isFavorite
    setIsFavorite(newFavoriteState)
    onToggleFavorite?.(member.id, newFavoriteState)
  }

  // Safely handle arrays that might be null or undefined
  const safeExpertise = Array.isArray(member.expertise) ? member.expertise : []
  const safeCommittee = Array.isArray(member.committee) ? member.committee : []
  const safeSkills = Array.isArray(member.knowledgeable_skills) ? member.knowledgeable_skills : []

  // Combine all tags and take first 3
  const allTags = [...safeExpertise, ...safeCommittee, ...safeSkills]
  const displayTags = allTags.slice(0, 3)

  return (
    <Link href={`/community/members/${member.id}`}>
      <Card className="!bg-white rounded border border-[#D1D1D1] hover:shadow-lg cursor-pointer relative group">
        <CardContent className="flex flex-col justify-between h-full">
          {/* Tags at the top */}
          <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem]">
            {displayTags.map((tag, index) => (
              <Badge
                key={`${tag}-${index}`}
                variant="secondary"
                className="font-medium body-small-bold card-tag"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Centered profile section */}
          <div className="flex flex-col items-start text-center">
            <Avatar className="w-20 h-20 mb-4 border border-gray-200">
              <AvatarImage src={member.profile_image_url || "/placeholder-user.jpg"} alt={member.name}/>
              <AvatarFallback className="text-lg font-semibold bg-gray-200">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start gap-1">
              <h3 className="text-gray-900">{member.name}</h3>
              <div className="text-xs text-gray-500 font-normal">{member.company}</div>
              {/* <div className="flex items-start gap-1">
                <FaLocationDot className="text-gray-400 w-4 h-4" />
                <p className="text-xs text-gray-400">{member.location}</p>
              </div> */}
              <div className="pt-1 text-sm max-w-[240px] font-medium truncate text-gray-800">{member.title}</div>
            </div>
          </div>

          {/* Star at bottom-right */}
          <div className="absolute bottom-6 right-6">
            <button
              onClick={handleToggleFavorite}
              className="w-10 h-10 rounded-full hover:bg-yellow-200 transition-colors flex items-center justify-center"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Star
                className={`w-7 h-7 ${
                  isFavorite ? "fill-yellow-400 text-yellow-400" : "text-armYellow"
                }`}
              />
            </button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
