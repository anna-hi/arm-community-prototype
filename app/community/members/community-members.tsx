"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { MultiSelectFilter } from "@/components/ui/multi-select-filter"
import { MemberCard } from "@/components/ui/member-card"
import { Search } from "lucide-react"
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

export default function CommunityMembers() {
  const [members, setMembers] = useState<Member[]>([])
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([])
  const [selectedCommittees, setSelectedCommittees] = useState<string[]>([])
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Get unique filter options
  const expertiseOptions = Array.from(
    new Set(members.flatMap((member) => (Array.isArray(member.expertise) ? member.expertise : []))),
  ).sort()

  const committeeOptions = Array.from(
    new Set(members.flatMap((member) => (Array.isArray(member.committee) ? member.committee : []))),
  ).sort()

  const skillsOptions = Array.from(
    new Set(
      members.flatMap((member) => (Array.isArray(member.knowledgeable_skills) ? member.knowledgeable_skills : [])),
    ),
  ).sort()

  // Fetch members from Supabase
  const fetchMembers = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data, error: fetchError } = await supabase.from("members").select("*").order("name")

      if (fetchError) {
        throw fetchError
      }

      // Ensure arrays are properly initialized
      const processedMembers = (data || []).map((member) => ({
        ...member,
        expertise: Array.isArray(member.expertise) ? member.expertise : [],
        committee: Array.isArray(member.committee) ? member.committee : [],
        knowledgeable_skills: Array.isArray(member.knowledgeable_skills) ? member.knowledgeable_skills : [],
        is_favorite: Boolean(member.is_favorite),
      }))

      setMembers(processedMembers)
      setFilteredMembers(processedMembers)
    } catch (err) {
      console.error("Error fetching members:", err)
      setError("Failed to load members. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMembers()
  }, [])

  // Filter members based on search and filters
  useEffect(() => {
    let filtered = members

    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (member) =>
          member.name.toLowerCase().includes(searchLower) ||
          member.title.toLowerCase().includes(searchLower) ||
          member.company.toLowerCase().includes(searchLower) ||
          member.location.toLowerCase().includes(searchLower) ||
          (Array.isArray(member.expertise) &&
            member.expertise.some((exp) => exp.toLowerCase().includes(searchLower))) ||
          (Array.isArray(member.committee) &&
            member.committee.some((comm) => comm.toLowerCase().includes(searchLower))) ||
          (Array.isArray(member.knowledgeable_skills) &&
            member.knowledgeable_skills.some((skill) => skill.toLowerCase().includes(searchLower))),
      )
    }

    // Expertise filter
    if (selectedExpertise.length > 0) {
      filtered = filtered.filter(
        (member) => Array.isArray(member.expertise) && selectedExpertise.some((exp) => member.expertise.includes(exp)),
      )
    }

    // Committee filter
    if (selectedCommittees.length > 0) {
      filtered = filtered.filter(
        (member) =>
          Array.isArray(member.committee) && selectedCommittees.some((comm) => member.committee.includes(comm)),
      )
    }

    // Skills filter
    if (selectedSkills.length > 0) {
      filtered = filtered.filter(
        (member) =>
          Array.isArray(member.knowledgeable_skills) &&
          selectedSkills.some((skill) => member.knowledgeable_skills.includes(skill)),
      )
    }

    setFilteredMembers(filtered)
  }, [members, searchTerm, selectedExpertise, selectedCommittees, selectedSkills])

  const handleToggleFavorite = async (memberId: string, isFavorite: boolean) => {
    try {
      const { error } = await supabase.from("members").update({ is_favorite: isFavorite }).eq("id", memberId)

      if (error) {
        throw error
      }

      // Update local state
      setMembers((prev) =>
        prev.map((member) => (member.id === memberId ? { ...member, is_favorite: isFavorite } : member)),
      )
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
            <p className="text-gray-600">Loading members...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button onClick={fetchMembers} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Members</h1>
        <p className="text-gray-600">Connect with ARM community members and explore their expertise</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search members by name, title, company, or expertise..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MultiSelectFilter
            options={expertiseOptions}
            selected={selectedExpertise}
            onChange={setSelectedExpertise}
            placeholder="Filter by expertise..."
          />
          <MultiSelectFilter
            options={committeeOptions}
            selected={selectedCommittees}
            onChange={setSelectedCommittees}
            placeholder="Filter by committee..."
          />
          <MultiSelectFilter
            options={skillsOptions}
            selected={selectedSkills}
            onChange={setSelectedSkills}
            placeholder="Filter by skills..."
          />
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredMembers.length} of {members.length} members
        </p>
      </div>

      {/* Members Grid */}
      {filteredMembers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-2">No members found</p>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <MemberCard key={member.id} member={member} onToggleFavorite={handleToggleFavorite} />
          ))}
        </div>
      )}
    </div>
  )
}
