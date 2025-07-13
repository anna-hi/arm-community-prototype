-- Create the members table
CREATE TABLE IF NOT EXISTS public.members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  member_name TEXT NOT NULL,
  member_company TEXT NOT NULL,
  designation TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  about_me TEXT,
  knowledgeable_about TEXT[], -- Array of categories
  membership_level TEXT,
  membership_role TEXT,
  profile_image_url TEXT,
  is_project_interested BOOLEAN DEFAULT false,
  committee_memberships TEXT[], -- Array of committee names
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_members_name ON public.members(member_name);
CREATE INDEX IF NOT EXISTS idx_members_company ON public.members(member_company);
CREATE INDEX IF NOT EXISTS idx_members_membership_level ON public.members(membership_level);
CREATE INDEX IF NOT EXISTS idx_members_knowledgeable_about ON public.members USING GIN(knowledgeable_about);
CREATE INDEX IF NOT EXISTS idx_members_committee_memberships ON public.members USING GIN(committee_memberships);

-- Enable Row Level Security
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON public.members
  FOR SELECT USING (true);

-- Create policy to allow authenticated users to update favorites
CREATE POLICY "Allow authenticated users to update" ON public.members
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Insert sample data
INSERT INTO public.members (
  member_name,
  member_company,
  designation,
  email,
  phone,
  address,
  about_me,
  knowledgeable_about,
  membership_level,
  membership_role,
  profile_image_url,
  is_project_interested,
  committee_memberships
) VALUES 
(
  'Aaron Prather',
  'ASTM',
  'Director, Robotics & Autonomous Systems',
  'aaron.prather@astm.org',
  '+1 (555) 123-4567',
  '100 Barr Harbor Dr, West Conshohocken, PA 19428',
  'Experienced director specializing in robotics and autonomous systems with over 15 years in the industry.',
  ARRAY['Automation', 'Autonomous Vehicles', 'Robotics', 'AI/ML'],
  'Premium',
  'Technical Advisory Committee',
  '/images/members/aaron-prather.jpeg',
  true,
  ARRAY['TAC Committee Member', 'Standards Committee']
),
(
  'Sarah Johnson',
  'Siemens',
  'Senior Robotics Engineer',
  'sarah.johnson@siemens.com',
  '+1 (555) 234-5678',
  '300 New Jersey Ave, Washington, DC 20001',
  'Senior engineer with expertise in industrial automation and smart manufacturing solutions.',
  ARRAY['Industrial Automation', 'Smart Manufacturing', 'IoT'],
  'Standard',
  'Member',
  '/placeholder.svg',
  true,
  ARRAY['Technology Committee']
),
(
  'Michael Chen',
  'ABB',
  'Research Scientist',
  'michael.chen@abb.com',
  '+1 (555) 345-6789',
  '940 Main Campus Dr, Raleigh, NC 27606',
  'Research scientist focused on collaborative robotics and human-robot interaction.',
  ARRAY['Collaborative Robotics', 'Human-Robot Interaction', 'Safety Systems'],
  'Premium',
  'Research Committee Chair',
  '/placeholder.svg',
  false,
  ARRAY['Research Committee', 'Safety Committee']
),
(
  'Emily Rodriguez',
  'Carnegie Mellon University',
  'Professor of Robotics',
  'emily.rodriguez@cmu.edu',
  '+1 (555) 456-7890',
  '5000 Forbes Ave, Pittsburgh, PA 15213',
  'Professor and researcher in advanced robotics, machine learning, and autonomous systems.',
  ARRAY['Machine Learning', 'Computer Vision', 'Autonomous Systems'],
  'Academic',
  'Education Committee',
  '/placeholder.svg',
  true,
  ARRAY['Education Committee', 'Research Committee']
),
(
  'David Kim',
  'Edge Case Research',
  'CTO',
  'david.kim@edgecaseresearch.com',
  '+1 (555) 567-8901',
  '4600 Forbes Ave, Pittsburgh, PA 15213',
  'Chief Technology Officer specializing in edge case scenarios for autonomous vehicles.',
  ARRAY['Autonomous Vehicles', 'Edge Cases', 'Testing & Validation'],
  'Startup',
  'Innovation Committee',
  '/placeholder.svg',
  true,
  ARRAY['Innovation Committee']
);

-- Create favorites table for user favorites
CREATE TABLE IF NOT EXISTS public.member_favorites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID, -- This would be linked to auth.users in a real app
  member_id UUID REFERENCES public.members(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, member_id)
);

-- Enable RLS on favorites table
ALTER TABLE public.member_favorites ENABLE ROW LEVEL SECURITY;

-- Create policy for favorites
CREATE POLICY "Users can manage their own favorites" ON public.member_favorites
  FOR ALL USING (auth.uid() = user_id);
