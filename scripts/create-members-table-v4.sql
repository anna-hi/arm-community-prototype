-- Drop existing table if it exists
DROP TABLE IF EXISTS members;

-- Create members table with comprehensive fields
CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  member_company TEXT,
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
  industry TEXT[] DEFAULT ARRAY[]::TEXT[],
  lead_organization TEXT,
  is_interested_in_projects BOOLEAN DEFAULT false,
  is_favorite BOOLEAN DEFAULT false,
  profile_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE members ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for now (adjust based on your auth requirements)
CREATE POLICY "Allow all operations on members" ON members FOR ALL USING (true);

-- Create indexes for better performance
CREATE INDEX idx_members_name ON members(name);
CREATE INDEX idx_members_company ON members(member_company);
CREATE INDEX idx_members_membership_level ON members(membership_level);
CREATE INDEX idx_members_is_interested_in_projects ON members(is_interested_in_projects);
CREATE INDEX idx_members_is_favorite ON members(is_favorite);

-- Insert comprehensive sample data
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
  lead_organization, 
  is_interested_in_projects, 
  is_favorite, 
  profile_image_url
) VALUES 
(
  'Aaron Prather',
  'ASTM',
  'Director, Robotics & Autonomous Systems Programs',
  'aprather@astm.com',
  '(123) 456-7890',
  NULL,
  'Leads ASTM efforts in the field of Robotics and Autonomous Systems. From Standards Development to Workforce Training to R&D, ASTM has a lot of tools to offer.',
  ARRAY['Automation', 'Autonomous Vehicles', 'Collaborative Robots', 'Drones', 'Industrial Robots', 'Mobile Robots', 'Public Speaking']::TEXT[],
  'Supporting',
  'TAC Committee Member',
  ARRAY['TAC Committee Member']::TEXT[],
  ARRAY['TAC Committee Member']::TEXT[],
  ARRAY['Automation and Robotics', 'Technology']::TEXT[],
  'ASTM International',
  true,
  false,
  '/images/members/aaron-prather.jpeg'
),
(
  'Aaron Williams',
  'HaptX',
  NULL,
  'awilliams@haptx.com',
  '(555) 123-4567',
  'Seattle, WA',
  'Specializes in haptic technology and virtual reality applications for industrial training and simulation.',
  ARRAY['Classroom Training', 'VR/AR', 'Curricula Development', 'Haptic Technology', 'Virtual Reality']::TEXT[],
  'Core',
  'Education Committee Member',
  ARRAY['Curricula Development']::TEXT[],
  ARRAY['Education Committee']::TEXT[],
  ARRAY['Education & Workforce Development', 'Technology']::TEXT[],
  'HaptX Inc.',
  true,
  false,
  NULL
),
(
  'Adam Newberry',
  'On the Road Companies',
  NULL,
  'anewberry@ontheroad.com',
  '(555) 987-6543',
  'Austin, TX',
  'Focuses on autonomous vehicle technology and transportation logistics solutions.',
  ARRAY['Autonomous Vehicles', 'Transportation', 'Logistics', 'AI']::TEXT[],
  'Bronze',
  'Member',
  ARRAY[]::TEXT[],
  ARRAY[]::TEXT[],
  ARRAY['Transportation', 'Technology']::TEXT[],
  'On the Road Companies',
  false,
  false,
  NULL
),
(
  'Amir Barati Farimani',
  'Carnegie Mellon University',
  'Assistant Professor',
  'abarati@cmu.edu',
  '(412) 268-1234',
  'Pittsburgh, PA',
  'Research focuses on AI applications in robotics, machine learning for autonomous systems, and computational methods.',
  ARRAY['AI', 'Automation', 'Drones', 'Machine Learning', 'Research']::TEXT[],
  'Partner',
  'Research Committee Member',
  ARRAY['Research Committee']::TEXT[],
  ARRAY['Research Committee']::TEXT[],
  ARRAY['Education & Workforce Development', 'Technology']::TEXT[],
  'Carnegie Mellon University',
  true,
  false,
  NULL
),
(
  'John Smith',
  'ASTM',
  'Director, Robotics & Autonomous Systems Programs',
  'jsmith@astm.com',
  '(123) 555-0123',
  'West Conshohocken, PA',
  'Experienced leader in robotics standards development and autonomous systems integration.',
  ARRAY['Automation', 'Autonomous Vehicles', 'Standards Development', 'System Integration']::TEXT[],
  'Supporting',
  'TAC Committee Member',
  ARRAY['TAC Committee Member']::TEXT[],
  ARRAY['TAC Committee Member']::TEXT[],
  ARRAY['Automation and Robotics', 'Technology']::TEXT[],
  'ASTM International',
  true,
  false,
  NULL
),
(
  'Abdullah Alturki',
  'University of Pittsburgh',
  'Graduate Research Assistant',
  'aalturki@pitt.edu',
  '(412) 555-0456',
  'Pittsburgh, PA',
  'PhD candidate researching collaborative robotics and human-robot interaction in manufacturing environments.',
  ARRAY['Collaborative Robots', 'Human-Robot Interaction', 'Manufacturing', 'Research']::TEXT[],
  'Start-up',
  'Student Member',
  ARRAY[]::TEXT[],
  ARRAY[]::TEXT[],
  ARRAY['Education & Workforce Development', 'Technology']::TEXT[],
  'University of Pittsburgh',
  true,
  false,
  NULL
),
(
  'Amir Sharif',
  'Dynamic Safety',
  'Safety Engineer',
  'asharif@dynamicsafety.com',
  '(555) 234-5678',
  'Detroit, MI',
  'Specializes in cybersecurity for autonomous systems and safety protocols for industrial robotics.',
  ARRAY['Automation', 'Cyber Security', 'Fundraising', 'Safety Standards']::TEXT[],
  'Bronze',
  'Safety Committee Member',
  ARRAY['Safety Committee']::TEXT[],
  ARRAY['Safety Committee']::TEXT[],
  ARRAY['Automation and Robotics', 'Technology']::TEXT[],
  'Dynamic Safety Solutions',
  false,
  false,
  NULL
),
(
  'Aaron Perkins',
  'Fairmont Robotics Team',
  'Team Lead',
  'aperkins@fairmont.edu',
  '(304) 555-7890',
  'Fairmont, WV',
  'Leads educational robotics programs and workforce development initiatives in West Virginia.',
  ARRAY['Education', 'Robotics Competition', 'Workforce Development', 'Team Leadership']::TEXT[],
  'Steel',
  'Education Committee Member',
  ARRAY['Education Committee']::TEXT[],
  ARRAY['Education Committee']::TEXT[],
  ARRAY['Education & Workforce Development']::TEXT[],
  'Fairmont State University',
  true,
  false,
  NULL
);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_members_updated_at 
    BEFORE UPDATE ON members 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
