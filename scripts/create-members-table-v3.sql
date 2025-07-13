-- Drop the table if it exists
DROP TABLE IF EXISTS members;

-- Create the members table
CREATE TABLE members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  member_company TEXT NOT NULL,
  designation TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  about_me TEXT,
  knowledgeable_about TEXT[] DEFAULT ARRAY[]::TEXT[],
  membership_level TEXT,
  membership_role TEXT,
  committee_memberships TEXT[] DEFAULT ARRAY[]::TEXT[],
  committee_tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  industry TEXT,
  profile_image_url TEXT,
  is_interested_in_projects BOOLEAN DEFAULT false,
  is_favorite BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE members ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations for now
CREATE POLICY "Allow all operations on members" ON members
  FOR ALL USING (true);

-- Create indexes for better performance
CREATE INDEX idx_members_name ON members(name);
CREATE INDEX idx_members_company ON members(member_company);
CREATE INDEX idx_members_membership_level ON members(membership_level);
CREATE INDEX idx_members_knowledgeable_about ON members USING GIN(knowledgeable_about);
CREATE INDEX idx_members_committee_memberships ON members USING GIN(committee_memberships);

-- Insert sample data
INSERT INTO members (
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
  committee_memberships,
  committee_tags,
  industry,
  profile_image_url,
  is_interested_in_projects
) VALUES 
(
  'Aaron Prather',
  'ASTM',
  'Director, Robotics & Autonomous...',
  'aaron.prather@astm.org',
  '+1-555-0123',
  '100 Barr Harbor Dr, West Conshohocken, PA 19428',
  'Experienced robotics director with expertise in autonomous systems and manufacturing automation.',
  ARRAY['Automation', 'Autonomous Vehicles']::TEXT[],
  'Premium',
  'Director',
  ARRAY['TAC Committee Member']::TEXT[],
  ARRAY['TAC Committee Member']::TEXT[],
  'Manufacturing',
  '/images/members/aaron-prather.jpeg',
  true
),
(
  'Aaron Williams',
  'HaptX',
  '(No Title Provided)',
  'aaron.williams@haptx.com',
  '+1-555-0124',
  '123 Tech Street, Seattle, WA 98101',
  'VR/AR specialist focused on haptic technology and immersive training solutions.',
  ARRAY['Classroom Training', 'VR/AR', 'Curricula Development']::TEXT[],
  'Standard',
  'Member',
  ARRAY[]::TEXT[],
  ARRAY[]::TEXT[],
  'Technology',
  '/placeholder-user.jpg',
  false
),
(
  'Adam Newberry',
  'On the Road Companies',
  '(No Title Provided)',
  'adam.newberry@ontheroad.com',
  '+1-555-0125',
  '456 Transport Ave, Detroit, MI 48201',
  'Transportation industry professional with focus on logistics and supply chain optimization.',
  ARRAY[]::TEXT[],
  'Basic',
  'Member',
  ARRAY[]::TEXT[],
  ARRAY[]::TEXT[],
  'Transportation',
  '/placeholder-user.jpg',
  false
),
(
  'Amir Barati Farimani',
  'Carnegie Mellon University',
  '(No Title Provided)',
  'amir.farimani@cmu.edu',
  '+1-555-0126',
  '5000 Forbes Avenue, Pittsburgh, PA 15213',
  'AI researcher specializing in machine learning applications for robotics and automation.',
  ARRAY['AI', 'Automation', 'Drones']::TEXT[],
  'Academic',
  'Researcher',
  ARRAY[]::TEXT[],
  ARRAY[]::TEXT[],
  'Education',
  '/placeholder-user.jpg',
  true
),
(
  'John Smith',
  'ASTM',
  'Director, Robotics & Autonomous...',
  'john.smith@astm.org',
  '+1-555-0127',
  '100 Barr Harbor Dr, West Conshohocken, PA 19428',
  'Senior director with extensive experience in robotics standards and autonomous vehicle development.',
  ARRAY['Automation', 'Autonomous Vehicles']::TEXT[],
  'Premium',
  'Director',
  ARRAY['TAC Committee Member']::TEXT[],
  ARRAY['TAC Committee Member']::TEXT[],
  'Manufacturing',
  '/placeholder-user.jpg',
  true
),
(
  'Abdullah Alturki',
  'University of Pittsburgh',
  '(No Title Provided)',
  'abdullah.alturki@pitt.edu',
  '+1-555-0128',
  '4200 Fifth Avenue, Pittsburgh, PA 15260',
  'Graduate researcher focusing on advanced manufacturing and robotics applications.',
  ARRAY[]::TEXT[],
  'Student',
  'Student Member',
  ARRAY[]::TEXT[],
  ARRAY[]::TEXT[],
  'Education',
  '/placeholder-user.jpg',
  false
),
(
  'Amir Sharif',
  'Dynamic Safety',
  '(No Title Provided)',
  'amir.sharif@dynamicsafety.com',
  '+1-555-0129',
  '789 Safety Blvd, Chicago, IL 60601',
  'Safety systems engineer with expertise in cybersecurity and fundraising for tech startups.',
  ARRAY['Automation', 'Cyber Security', 'Fundraising']::TEXT[],
  'Standard',
  'Member',
  ARRAY[]::TEXT[],
  ARRAY[]::TEXT[],
  'Safety',
  '/placeholder-user.jpg',
  true
),
(
  'John Smith',
  'ASTM',
  'Director, Robotics & Autonomous...',
  'john.smith2@astm.org',
  '+1-555-0130',
  '100 Barr Harbor Dr, West Conshohocken, PA 19428',
  'Another John Smith with similar expertise in robotics and autonomous systems.',
  ARRAY['Automation', 'Autonomous Vehicles']::TEXT[],
  'Premium',
  'Director',
  ARRAY['TAC Committee Member']::TEXT[],
  ARRAY['TAC Committee Member']::TEXT[],
  'Manufacturing',
  '/placeholder-user.jpg',
  true
),
(
  'Aaron Perkins',
  'Fairmont Robotics Team',
  '(No Title Provided)',
  'aaron.perkins@fairmont.edu',
  '+1-555-0131',
  '321 Education Way, Fairmont, WV 26554',
  'Robotics team coordinator and educator focused on STEM education and competition robotics.',
  ARRAY[]::TEXT[],
  'Educational',
  'Educator',
  ARRAY[]::TEXT[],
  ARRAY[]::TEXT[],
  'Education',
  '/placeholder-user.jpg',
  false
);
