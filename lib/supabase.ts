import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create a singleton instance to avoid multiple client warnings
let supabaseInstance: ReturnType<typeof createClient> | null = null

export const supabase = (() => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabaseInstance
})()

export interface Member {
  id: string
  name: string
  email?: string
  phone?: string
  address?: string
  member_company?: string
  designation?: string
  about_me?: string
  knowledgeable_about?: string[]
  committee_memberships?: string[]
  committee_tags?: string[]
  industry?: string[]
  membership_level?: string
  membership_role?: string
  lead_organization?: string
  interested_in_projects?: boolean
  is_favorite?: boolean
  profile_image_url?: string
  created_at?: string
  updated_at?: string
}

export interface FilterOption {
  value: string
  label: string
  description?: string
}

export interface FilterCategory {
  title: string
  options: FilterOption[]
}

export const FILTER_OPTIONS = {
  industry: [
    { value: "textile-apparel", label: "Textile and Apparel" },
    { value: "aerospace", label: "Aerospace" },
    { value: "automation-robotics", label: "Automation and Robotics" },
    { value: "education-workforce", label: "Education & Workforce Development" },
    { value: "technology", label: "Technology" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "transportation", label: "Transportation" },
  ],
  membershipLevel: [
    { value: "platinum-gold-silver", label: "Platinum, Gold, and Silver" },
    { value: "core", label: "Core", description: "Organizations at these membership levels can lead projects." },
    { value: "bronze", label: "Bronze" },
    { value: "steel", label: "Steel" },
    { value: "start-up", label: "Start-up" },
    { value: "supporting", label: "Supporting" },
    { value: "partner", label: "Partner" },
    { value: "ffrdc-national-lab", label: "FFRDC; National Lab" },
  ],
  committee: [
    { value: "tac", label: "Technology Advisory Committee (TAC)" },
    { value: "ewac", label: "Education & Workforce Advisory Committee (EWAC)" },
    { value: "sec", label: "Stakeholder Executive Committee (SEC)" },
    { value: "tac-committee-member", label: "TAC Committee Member" },
  ],
  knowledgeableSkills: [
    // Robotics
    { value: "robotics", label: "Robotics" },
    { value: "industrial-robots", label: "Industrial Robots" },
    { value: "mobile-robots", label: "Mobile Robots" },
    { value: "collaborative-robots", label: "Collaborative Robots" },
    { value: "grippers", label: "Grippers" },
    { value: "ros", label: "Robot Operating System (ROS)" },
    { value: "robotic-safety", label: "Robotic Safety Standard" },
    { value: "robotics-competition", label: "Robotics Competition" },

    // Technology & Automation
    { value: "automation", label: "Automation" },
    { value: "ai", label: "AI" },
    { value: "vr-ar", label: "VR/AR" },
    { value: "cyber-security", label: "Cyber Security" },
    { value: "drones", label: "Drones" },
    { value: "autonomous-vehicles", label: "Autonomous Vehicles" },
    { value: "software", label: "Software" },
    { value: "vision-motion", label: "Vision & Motion" },

    // Research
    { value: "research", label: "Research" },

    // Manufacturing & Logistics
    { value: "manufacturing-operations", label: "Manufacturing Operations" },
    { value: "warehouse-logistics", label: "Warehouse & Logistics" },

    // Education & Training
    { value: "online-education", label: "Online Education" },
    { value: "classroom-training", label: "Classroom Training" },
    { value: "curricula-development", label: "Curricula Development" },
    { value: "certification-testing", label: "Certification & Testing" },
    { value: "steam", label: "STEAM" },

    // Strategic Support & Infrastructure
    { value: "start-ups", label: "Start-ups" },
    { value: "project-management", label: "Project Management" },
    { value: "fundraising", label: "Fundraising" },
    { value: "government-funding", label: "Government Funding" },
    { value: "public-private-partnerships", label: "Public-Private Partnerships" },
    { value: "public-speaking", label: "Public Speaking" },

    // Workforce Development
    { value: "workforce-development", label: "Workforce Development" },
    { value: "recruiting-job-planning", label: "Recruiting or Job Planning" },
    { value: "displaced-workers", label: "Displaced Workers" },
    { value: "veteran-needs", label: "Veteran Needs" },
    { value: "handicapped-needs", label: "Handicapped Needs" },
  ],
  leadOrganization: [
    { value: "astm", label: "ASTM" },
    { value: "haptx", label: "HaptX" },
    { value: "carnegie-mellon", label: "Carnegie Mellon University" },
    { value: "university-pittsburgh", label: "University of Pittsburgh" },
    { value: "dynamic-safety", label: "Dynamic Safety" },
    { value: "fairmont-robotics", label: "Fairmont Robotics Team" },
    { value: "on-the-road", label: "On the Road Companies" },
  ],
}
