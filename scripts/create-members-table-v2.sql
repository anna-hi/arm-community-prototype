-- Drop the existing table if it exists to start fresh
DROP TABLE IF EXISTS public.member_favorites;
DROP TABLE IF EXISTS public.members;

-- Create the members table with correct column names
CREATE TABLE public.members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
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
  is_interested_in_projects BOOLEAN DEFAULT false,
  committee_tags TEXT[], -- Array of committee names
  industry TEXT,
  is_favorite BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_members_name ON public.members(name);
CREATE INDEX idx_members_company ON public.members(member_company);
CREATE INDEX idx_members_membership_level ON public.members(membership_level);
CREATE INDEX idx_members_industry ON public.members(industry);
CREATE INDEX idx_members_knowledgeable_about ON public.members USING GIN(knowledgeable_about);
CREATE INDEX idx_members_committee_tags ON public.members USING GIN(committee_tags);

-- Enable Row Level Security
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON public.members
  FOR SELECT USING (true);

-- Create policy to allow authenticated users to update
CREATE POLICY "Allow authenticated users to update" ON public.members
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Insert sample data
INSERT INTO public.members (
  name,
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
  is_interested_in_projects,
  committee_tags,
  industry,
  is_favorite
) VALUES 
(
  'Aaron Prather',
  'ASTM',
  'Director, Robotics & Autonomous Systems Programs',
  'aaron.prather@astm.org',
  '+1-555-0123',
  '100 Barr Harbor Dr, West Conshohocken, PA 19428',
  'Experienced director leading robotics and autonomous systems programs at ASTM International. Passionate about advancing manufacturing automation and developing industry standards.',
  ARRAY['Automation', 'Autonomous Vehicles', 'Robotics', 'Standards Development'],
  'Tier 1',
  'Director',
  '/images/members/aaron-prather.jpeg',
  true,
  ARRAY['TAC Committee Member'],
  'Standards Organization',
  true
),
(
  'Aaron Williams',
  'HartX',
  'Training Specialist',
  'aaron.williams@hartx.com',
  '+1-555-0124',
  '123 Innovation Blvd, Austin, TX 78701',
  'Specializing in immersive training solutions using VR/AR technologies for manufacturing and industrial applications.',
  ARRAY['Classroom Training', 'VR/AR', 'Curricula Development', 'Industrial Training'],
  'Tier 2',
  'Specialist',
  '/placeholder.svg?height=64&width=64',
  false,
  ARRAY[],
  'Training & Education',
  false
),
(
  'Adam Newberry',
  'On the Road Companies',
  'Operations Manager',
  'adam.newberry@ontheroad.com',
  '+1-555-0125',
  '456 Transport Way, Denver, CO 80202',
  'Operations manager focused on logistics and transportation efficiency in manufacturing supply chains.',
  ARRAY['Logistics', 'Supply Chain', 'Transportation'],
  'Tier 3',
  'Manager',
  '/placeholder.svg?height=64&width=64',
  false,
  ARRAY[],
  'Transportation',
  false
),
(
  'Amir Barati Farimani',
  'Carnegie Mellon University',
  'Associate Professor',
  'amir.farimani@cmu.edu',
  '+1-555-0126',
  '5000 Forbes Ave, Pittsburgh, PA 15213',
  'Associate Professor researching AI applications in manufacturing, with expertise in machine learning, automation, and drone technologies.',
  ARRAY['AI', 'Automation', 'Drones', 'Machine Learning', 'Research'],
  'Tier 1',
  'Professor',
  '/placeholder.svg?height=64&width=64',
  true,
  ARRAY['Education Committee'],
  'Education',
  false
),
(
  'Abdullah Alturki',
  'University of Pittsburgh',
  'Graduate Research Assistant',
  'abdullah.alturki@pitt.edu',
  '+1-555-0127',
  '4200 Fifth Ave, Pittsburgh, PA 15260',
  'Graduate student conducting research in advanced manufacturing processes and materials science.',
  ARRAY['Materials Science', 'Manufacturing Processes', 'Research'],
  'Tier 3',
  'Student',
  '/placeholder.svg?height=64&width=64',
  false,
  ARRAY[],
  'Education',
  false
),
(
  'Amir Sharif',
  '3Laws Dynamics Safety',
  'Safety Engineer',
  'amir.sharif@3laws.com',
  '+1-555-0128',
  '789 Safety Blvd, San Francisco, CA 94105',
  'Safety engineer specializing in autonomous systems security, cybersecurity protocols, and fundraising for safety technology startups.',
  ARRAY['Automation', 'Cyber Security', 'Fundraising', 'Safety Systems'],
  'Tier 2',
  'Engineer',
  '/placeholder.svg?height=64&width=64',
  false,
  ARRAY[],
  'Technology',
  false
),
(
  'Aaron Perkins',
  'Fairmont Robotics Team',
  'Team Lead',
  'aaron.perkins@fairmont.edu',
  '+1-555-0129',
  '321 Education St, Fairmont, WV 26554',
  'Leading a student robotics team focused on competitive robotics and STEM education initiatives.',
  ARRAY['Robotics', 'STEM Education', 'Team Leadership'],
  'Tier 3',
  'Student Leader',
  '/placeholder.svg?height=64&width=64',
  false,
  ARRAY[],
  'Education',
  false
);
