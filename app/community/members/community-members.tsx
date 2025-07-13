"use client"

import { useState, useEffect, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { MultiSelectFilter } from "@/components/ui/multi-select-filter"
import { MemberCard } from "@/components/ui/member-card"
import { fetchMembers, type Member } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function CommunityMembers() {
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedCommittees, setSelectedCommittees] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    async function loadMembers() {
      try {
        const data = await fetchMembers()
        setMembers(data)
      } catch (error) {
        console.error("Error loading members:", error)
      } finally {
        setLoading(false)
      }
    }

    loadMembers()
  }, [])

  // Extract unique options for filters
  const filterOptions = useMemo(() => {
    const skills = new Set<string>()
    const committees = new Set<string>()
    const locations = new Set<string>()

    members.forEach((member) => {
      // Safely handle arrays
      const memberSkills = Array.isArray(member.knowledgeable_skills) ? member.knowledgeable_skills : []
      const memberCommittees = Array.isArray(member.committee) ? member.committee : []

      memberSkills.forEach((skill) => skills.add(skill))
      memberCommittees.forEach((committee) => committees.add(committee))
      if (member.location) locations.add(member.location)
    })

    return {
      skills: Array.from(skills).sort(),
      committees: Array.from(committees).sort(),
      locations: Array.from(locations).sort(),
    }
  }, [members])

  // Filter members based on search and filters
  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      // Search filter
      const matchesSearch =
        searchTerm === "" ||
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.company.toLowerCase().includes(searchTerm.toLowerCase())

      // Skills filter
      const memberSkills = Array.isArray(member.knowledgeable_skills) ? member.knowledgeable_skills : []
      const matchesSkills = selectedSkills.length === 0 || selectedSkills.some((skill) => memberSkills.includes(skill))

      // Committee filter
      const memberCommittees = Array.isArray(member.committee) ? member.committee : []
      const matchesCommittees =
        selectedCommittees.length === 0 || selectedCommittees.some((committee) => memberCommittees.includes(committee))

      // Location filter
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(member.location)

      return matchesSearch && matchesSkills && matchesCommittees && matchesLocation
    })
  }, [members, searchTerm, selectedSkills, selectedCommittees, selectedLocations])

  const handleMemberClick = (memberId: string) => {
    router.push(`/community/members/${memberId}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading members...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Members</h1>
          <p className="text-gray-600">Connect with ARM community members and explore their expertise</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-gray-300 text-gray-900 text-sm h-10"
              />
            </div>

            {/* Skills Filter */}
            <MultiSelectFilter
              options={filterOptions.skills}
              value={selectedSkills}
              onChange={setSelectedSkills}
              placeholder="Filter by skills"
            />

            {/* Committee Filter */}
            <MultiSelectFilter
              options={filterOptions.committees}
              value={selectedCommittees}
              onChange={setSelectedCommittees}
              placeholder="Filter by committee"
            />

            {/* Location Filter */}
            <MultiSelectFilter
              options={filterOptions.locations}
              value={selectedLocations}
              onChange={setSelectedLocations}
              placeholder="Filter by location"
            />
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredMembers.length} of {members.length} members
          </p>
        </div>

        {/* Members grid */}
        {filteredMembers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No members found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} onClick={() => handleMemberClick(member.id)} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
