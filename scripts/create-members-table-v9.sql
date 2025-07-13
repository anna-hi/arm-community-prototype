-- Drop the table if it exists
DROP TABLE IF EXISTS members;

-- Create the members table with proper structure
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  address TEXT,
  member_company TEXT,
  designation TEXT,
  about_me TEXT,
  knowledgeable_about TEXT[] DEFAULT '{}',
  committee_memberships TEXT[] DEFAULT '{}',
  committee_tags TEXT[] DEFAULT '{}',
  industry TEXT[] DEFAULT '{}',
  membership_level TEXT,
  membership_role TEXT,
  lead_organization TEXT,
  interested_in_projects BOOLEAN DEFAULT false,
  is_favorite BOOLEAN DEFAULT false,
  profile_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data matching the screenshot
INSERT INTO members (
  name, 
  member_company, 
  designation, 
  knowledgeable_about, 
  committee_tags, 
  industry, 
  membership_level, 
  lead_organization, 
  interested_in_projects, 
  is_favorite,
  profile_image_url
) VALUES 
(
  'Aaron Prather',
  'ASTM',
  'Director, Robotics & Autonomous...',
  ARRAY['Automation', 'Autonomous Vehicles']::TEXT[],
  ARRAY['TAC Committee Member']::TEXT[],
  ARRAY['Technology']::TEXT[],
  'Core',
  'ASTM',
  true,
  false,
  '/images/members/aaron-prather.jpeg'
),
(
  'Aaron Williams',
  'HaptX',
  '(No Title Provided)',
  ARRAY['Classroom Training', 'VR/AR']::TEXT[],
  ARRAY[]::TEXT[],
  ARRAY['Technology']::TEXT[],
  'Start-up',
  'HaptX',
  false,
  false,
  null
),
(
  'Adam Newberry',
  'On the Road Companies',
  '(No Title Provided)',
  ARRAY[]::TEXT[],
  ARRAY[]::TEXT[],
  ARRAY['Transportation']::TEXT[],
  'Supporting',
  'On the Road Companies',
  false,
  false,
  null
),
(
  'Amir Barati Farimani',
  'Carnegie Mellon University',
  '(No Title Provided)',
  ARRAY['AI', 'Automation']::TEXT[],
  ARRAY[]::TEXT[],
  ARRAY['Education & Workforce Development']::TEXT[],
  'Partner',
  'Carnegie Mellon University',
  true,
  false,
  null
),
(
  'John Smith',
  'ASTM',
  'Director, Robotics & Autonomous...',
  ARRAY['Automation', 'Autonomous Vehicles']::TEXT[],
  ARRAY['TAC Committee Member']::TEXT[],
  ARRAY['Technology']::TEXT[],
  'Core',
  'ASTM',
  false,
  false,
  null
),
(
  'Abdullah Alturki',
  'University of Pittsburgh',
  '(No Title Provided)',
  ARRAY[]::TEXT[],
  ARRAY[]::TEXT[],
  ARRAY['Education & Workforce Development']::TEXT[],
  'Partner',
  'University of Pittsburgh',
  false,
  false,
  null
);
