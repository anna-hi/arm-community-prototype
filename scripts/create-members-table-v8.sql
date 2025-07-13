-- Drop existing table if it exists to start fresh
DROP TABLE IF EXISTS members;

-- Create members table with proper UUID support and all required columns
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  address TEXT,
  member_company TEXT,
  designation TEXT,
  about_me TEXT,
  profile_image_url TEXT,
  industry TEXT[],
  membership_level TEXT,
  membership_role TEXT,
  lead_organization TEXT,
  knowledgeable_about TEXT[],
  committee_memberships TEXT[],
  committee_tags TEXT[],
  interested_in_projects BOOLEAN DEFAULT false,
  is_favorite BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data matching the screenshot
INSERT INTO members (
  name, 
  email, 
  member_company, 
  designation, 
  about_me, 
  profile_image_url,
  industry,
  membership_level,
  knowledgeable_about, 
  committee_tags, 
  interested_in_projects,
  is_favorite
) VALUES 
(
  'Aaron Prather',
  'aaron.prather@astm.org',
  'ASTM',
  'Director, Robotics & Autonomous...',
  'Experienced robotics engineer with expertise in autonomous systems and manufacturing automation.',
  '/images/members/aaron-prather.jpeg',
  ARRAY['Technology'],
  'Premium',
  ARRAY['Automation', 'Autonomous Vehicles'],
  ARRAY['TAC Committee Member'],
  true,
  false
),
(
  'Aaron Williams',
  'aaron.williams@haptx.com',
  'HaptX',
  '(No Title Provided)',
  'Haptic technology specialist focused on tactile feedback systems.',
  NULL,
  ARRAY['Technology'],
  'Standard',
  ARRAY['Classroom Training', 'VR/AR'],
  ARRAY[],
  false,
  false
),
(
  'Adam Newberry',
  'adam.newberry@ontheroad.com',
  'On the Road Companies',
  '(No Title Provided)',
  'Transportation and logistics expert with focus on autonomous vehicle deployment.',
  NULL,
  ARRAY['Transportation'],
  'Standard',
  ARRAY['Curricula Development'],
  ARRAY[],
  true,
  false
),
(
  'Amir Barati Farimani',
  'amir.farimani@cmu.edu',
  'Carnegie Mellon University',
  '(No Title Provided)',
  'Professor of Mechanical Engineering specializing in AI and robotics research.',
  NULL,
  ARRAY['Education & Workforce Development'],
  'Premium',
  ARRAY['AI', 'Automation'],
  ARRAY['TAC Committee Member'],
  true,
  false
),
(
  'John Smith',
  'john.smith@astm.org',
  'ASTM',
  'Director, Robotics & Autonomous...',
  'Standards development expert with focus on robotics and automation.',
  NULL,
  ARRAY['Technology'],
  'Premium',
  ARRAY['Automation', 'Autonomous Vehicles'],
  ARRAY['TAC Committee Member'],
  false,
  false
),
(
  'Abdullah Alturki',
  'abdullah.alturki@pitt.edu',
  'University of Pittsburgh',
  '(No Title Provided)',
  'Graduate student researching autonomous systems and machine learning.',
  NULL,
  ARRAY['Education & Workforce Development'],
  'Student',
  ARRAY[],
  ARRAY[],
  true,
  false
);
