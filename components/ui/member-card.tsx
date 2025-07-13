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
  profile_image?: string
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
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer relative group">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Tags at the top */}
          <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem]">
            {displayTags.map((tag, index) => (
              <Badge
                key={`${tag}-${index}`}
                variant="secondary"
                className="text-xs px-2 py-1 bg-blue-100 text-blue-800"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Centered profile section */}
          <div className="flex flex-col items-center text-center flex-1 justify-center">
            <Avatar className="w-20 h-20 mb-4">
              <AvatarImage src={member.profile_image || "/placeholder-user.jpg"} alt={member.name} />
              <AvatarFallback className="text-lg font-semibold bg-gray-200">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{member.title}</p>
            <p className="text-sm text-gray-500 mb-2">{member.company}</p>
            <p className="text-xs text-gray-400">{member.location}</p>
          </div>

          {/* Star at bottom-right */}
          <div className="absolute bottom-4 right-4">
            <button
              onClick={handleToggleFavorite}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Star
                className={`w-5 h-5 ${
                  isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-400"
                }`}
              />
            </button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
