"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { MemberCard } from "@/components/ui/member-card"
import { MultiSelectFilter, type FilterOption, type FilterCategory } from "@/components/ui/multi-select-filter"
import { supabase, type Member, FILTER_OPTIONS } from "@/lib/supabase"

const industryOptions: FilterOption[] = FILTER_OPTIONS.industry

const membershipLevelCategories: FilterCategory[] = [
  {
    title: "",
    options: [
      {
        value: "platinum-gold-silver",
        label: "Platinum, Gold, and Silver",
      },
      {
        value: "core",
        label: "Core",
        description: "Organizations at these membership levels can lead projects.",
      },
    ],
  },
  {
    title: "",
    options: [
      { value: "bronze", label: "Bronze" },
      { value: "steel", label: "Steel" },
      { value: "start-up", label: "Start-up" },
      { value: "supporting", label: "Supporting" },
      { value: "partner", label: "Partner" },
      { value: "ffrdc-national-lab", label: "FFRDC; National Lab" },
    ],
  },
]

const committeeCategories: FilterCategory[] = [
  {
    title: "",
    options: [
      { value: "tac", label: "Technology Advisory Committee (TAC)" },
      { value: "ewac", label: "Education & Workforce Advisory Committee (EWAC)" },
      { value: "sec", label: "Stakeholder Executive Committee (SEC)" },
    ],
  },
]

const knowledgeableSkillsCategories: FilterCategory[] = [
  {
    title: "Robotics",
    options: [
      { value: "robotics", label: "Robotics" },
      { value: "industrial-robots", label: "Industrial Robots" },
      { value: "mobile-robots", label: "Mobile Robots" },
      { value: "collaborative-robots", label: "Collaborative Robots" },
      { value: "grippers", label: "Grippers" },
      { value: "ros", label: "Robot Operating System (ROS)" },
      { value: "robotic-safety", label: "Robotic Safety Standard" },
      { value: "robotics-competition", label: "Robotics Competition" },
    ],
  },
  {
    title: "Workforce Development",
    options: [
      { value: "workforce-development", label: "Workforce Development" },
      { value: "recruiting-job-planning", label: "Recruiting or Job Planning" },
      { value: "displaced-workers", label: "Displaced Workers" },
      { value: "veteran-needs", label: "Veteran Needs" },
      { value: "handicapped-needs", label: "Handicapped Needs" },
    ],
  },
  {
    title: "Education & Training",
    options: [
      { value: "online-education", label: "Online Education" },
      { value: "classroom-training", label: "Classroom Training" },
      { value: "curricula-development", label: "Curricula Development" },
      { value: "certification-testing", label: "Certification & Testing" },
      { value: "steam", label: "STEAM" },
    ],
  },
  {
    title: "Technology & Automation",
    options: [
      { value: "automation", label: "Automation" },
      { value: "ai", label: "AI" },
      { value: "vr-ar", label: "VR/AR" },
      { value: "cyber-security", label: "Cyber Security" },
      { value: "drones", label: "Drones" },
      { value: "autonomous-vehicles", label: "Autonomous Vehicles" },
      { value: "software", label: "Software" },
      { value: "vision-motion", label: "Vision & Motion" },
    ],
  },
  {
    title: "Research",
    options: [{ value: "research", label: "Research" }],
  },
  {
    title: "Manufacturing & Logistics",
    options: [
      { value: "manufacturing-operations", label: "Manufacturing Operations" },
      { value: "warehouse-logistics", label: "Warehouse & Logistics" },
    ],
  },
  {
    title: "Strategic Support & Infrastructure",
    options: [
      { value: "start-ups", label: "Start-ups" },
      { value: "project-management", label: "Project Management" },
      { value: "fundraising", label: "Fundraising" },
      { value: "government-funding", label: "Government Funding" },
      { value: "public-private-partnerships", label: "Public-Private Partnerships" },
      { value: "public-speaking", label: "Public Speaking" },
    ],
  },
]

const leadOrganizationOptions: FilterOption[] = FILTER_OPTIONS.leadOrganization

export default function CommunityMembers() {
  const [members, setMembers] = useState<Member[]>([])
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Filter states
  const [searchTerm, setSearchTerm] = useState("")
  const [interestedInProjects, setInterestedInProjects] = useState(false)
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedMembershipLevels, setSelectedMembershipLevels] = useState<string[]>([])
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedCommittees, setSelectedCommittees] = useState<string[]>([])
  const [selectedOrganizations, setSelectedOrganizations] = useState<string[]>([])

  const fetchMembers = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data, error: fetchError } = await supabase.from("members").select("*").order("name")

      if (fetchError) {
        throw fetchError
      }

      const processedData = (data || []).map((member) => ({
        ...member,
        knowledgeable_about: member.knowledgeable_about || [],
        committee_memberships: member.committee_memberships || [],
        committee_tags: member.committee_tags || [],
        industry: member.industry || [],
      }))

      setMembers(processedData)
    } catch (err) {
      console.error("Error fetching members:", err)
      setError("Failed to load members. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMembers()
  }, [])

  useEffect(() => {
    let filtered = members

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (member) =>
          member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          member.member_company?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply interested in projects filter
    if (interestedInProjects) {
      filtered = filtered.filter((member) => member.interested_in_projects)
    }

    // Apply industry filter
    if (selectedIndustries.length > 0) {
      filtered = filtered.filter((member) =>
        selectedIndustries.some((industry) => {
          const industryLabel = FILTER_OPTIONS.industry.find((opt) => opt.value === industry)?.label
          return (member.industry || []).includes(industryLabel || industry)
        }),
      )
    }

    // Apply membership level filter
    if (selectedMembershipLevels.length > 0) {
      filtered = filtered.filter((member) => {
        const memberLevel = member.membership_level?.toLowerCase().replace(/\s+/g, "-")
        return selectedMembershipLevels.includes(memberLevel || "")
      })
    }

    // Apply skills filter
    if (selectedSkills.length > 0) {
      filtered = filtered.filter((member) =>
        selectedSkills.some((skill) => {
          const skillLabel = FILTER_OPTIONS.knowledgeableSkills.find((opt) => opt.value === skill)?.label
          return (member.knowledgeable_about || []).includes(skillLabel || skill)
        }),
      )
    }

    // Apply committee filter
    if (selectedCommittees.length > 0) {
      filtered = filtered.filter((member) =>
        selectedCommittees.some((committee) => {
          const committeeLabel = FILTER_OPTIONS.committee.find((opt) => opt.value === committee)?.label
          return (member.committee_tags || []).includes(committeeLabel || committee)
        }),
      )
    }

    // Apply organization filter
    if (selectedOrganizations.length > 0) {
      filtered = filtered.filter((member) => {
        const orgLabel = FILTER_OPTIONS.leadOrganization.find((opt) => opt.value === selectedOrganizations[0])?.label
        return member.member_company === orgLabel || selectedOrganizations.includes(member.member_company || "")
      })
    }

    setFilteredMembers(filtered)
  }, [
    members,
    searchTerm,
    interestedInProjects,
    selectedIndustries,
    selectedMembershipLevels,
    selectedSkills,
    selectedCommittees,
    selectedOrganizations,
  ])

  const handleFavoriteToggle = async (memberId: string, isFavorite: boolean) => {
    try {
      const { error } = await supabase.from("members").update({ is_favorite: !isFavorite }).eq("id", memberId)

      if (error) {
        throw error
      }

      // Update local state
      setMembers((prev) =>
        prev.map((member) => (member.id === memberId ? { ...member, is_favorite: !isFavorite } : member)),
      )
    } catch (err) {
      console.error("Error updating favorite status:", err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg text-gray-600">Loading members...</div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center h-64 space-y-4">
            <div className="text-lg text-red-600">{error}</div>
            <button onClick={fetchMembers} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Member Directory</h1>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search for Members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-300"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>

          {/* Interested in projects checkbox */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="interested-in-projects"
                checked={interestedInProjects}
                onCheckedChange={(checked) => setInterestedInProjects(checked as boolean)}
              />
              <label htmlFor="interested-in-projects" className="text-sm text-gray-700">
                Interested in projects
              </label>
            </div>
          </div>

          {/* Filter dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <MultiSelectFilter
              title="Industry"
              placeholder="Industry"
              options={industryOptions}
              value={selectedIndustries}
              onValueChange={setSelectedIndustries}
            />
            <MultiSelectFilter
              title="Membership Level"
              placeholder="Membership Level"
              categories={membershipLevelCategories}
              value={selectedMembershipLevels}
              onValueChange={setSelectedMembershipLevels}
            />
            <MultiSelectFilter
              title="Knowledgeable Skills"
              placeholder="Knowledgeable Skills"
              categories={knowledgeableSkillsCategories}
              value={selectedSkills}
              onValueChange={setSelectedSkills}
              multiColumn={true}
            />
            <MultiSelectFilter
              title="Committee"
              placeholder="Committee"
              categories={committeeCategories}
              value={selectedCommittees}
              onValueChange={setSelectedCommittees}
              showSelectAll={true}
            />
            <MultiSelectFilter
              title="Lead Organization"
              placeholder="Lead Organization"
              options={leadOrganizationOptions}
              value={selectedOrganizations}
              onValueChange={setSelectedOrganizations}
            />
          </div>
        </div>

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <MemberCard key={member.id} member={member} onFavoriteChange={handleFavoriteToggle} />
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">No members found matching your criteria.</div>
          </div>
        )}
      </div>
    </div>
  )
}
