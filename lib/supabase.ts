import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create a singleton client for client-side usage
let supabaseInstance: ReturnType<typeof createClient> | null = null

export function getSupabase() {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabaseInstance
}

// Export the client for direct usage
export const supabase = getSupabase()

// Types for our database
export interface Member {
  id: string
  name: string
  title: string
  company: string
  location: string
  email: string
  phone: string
  bio: string
  knowledgeable_skills: string[]
  committee: string[]
  is_favorite: boolean
  profile_image_url: string
  created_at: string
  updated_at: string
}

// Database functions
export async function fetchMembers(): Promise<Member[]> {
  try {
    const { data, error } = await supabase.from("members").select("*").order("name")

    if (error) {
      console.error("Error fetching members:", error)
      return []
    }

    // Ensure arrays are properly initialized
    return (data || []).map((member) => ({
      ...member,
      knowledgeable_skills: Array.isArray(member.knowledgeable_skills) ? member.knowledgeable_skills : [],
      committee: Array.isArray(member.committee) ? member.committee : [],
    }))
  } catch (error) {
    console.error("Error in fetchMembers:", error)
    return []
  }
}

export async function fetchMemberById(id: string): Promise<Member | null> {
  try {
    const { data, error } = await supabase.from("members").select("*").eq("id", id).single()

    if (error) {
      console.error("Error fetching member:", error)
      return null
    }

    if (!data) return null

    // Ensure arrays are properly initialized
    return {
      ...data,
      knowledgeable_skills: Array.isArray(data.knowledgeable_skills) ? data.knowledgeable_skills : [],
      committee: Array.isArray(data.committee) ? data.committee : [],
    }
  } catch (error) {
    console.error("Error in fetchMemberById:", error)
    return null
  }
}

export async function toggleMemberFavorite(id: string, isFavorite: boolean): Promise<boolean> {
  try {
    const { error } = await supabase.from("members").update({ is_favorite: isFavorite }).eq("id", id)

    if (error) {
      console.error("Error updating favorite status:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error in toggleMemberFavorite:", error)
    return false
  }
}
