-- Drop existing table if it exists
DROP TABLE IF EXISTS members;

-- Create members table with proper UUID primary key
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
    id,
    name,
    member_company,
    designation,
    email,
    phone,
    address,
    about_me,
    knowledgeable_about,
    committee_memberships,
    committee_tags,
    industry,
    membership_level,
    membership_role,
    lead_organization,
    interested_in_projects,
    is_favorite,
    profile_image_url
) VALUES 
(
    '6df362b4-03d2-4d12-b566-b5d4e1005b4a',
    'Aaron Prather',
    'ASTM',
    'Director, Robotics & Autonomous Systems Programs',
    'aprather@astm.com',
    '(123) 456-7890',
    '(Not Provided)',
    'Leads ASTM efforts in the field of Robotics and Autonomous Systems. From Standards Development to Workforce Training to R&D, ASTM has a lot of tools to offer.',
    ARRAY['Automation', 'Autonomous Vehicles', 'Collaborative Robots', 'Drones', 'Industrial Robots', 'Mobile Robots', 'Public Speaking'],
    ARRAY['Technology Advisory Committee (TAC)'],
    ARRAY['TAC Committee Member'],
    ARRAY['Automation and Robotics', 'Technology'],
    'Supporting',
    'TAC Committee Member',
    'ASTM',
    true,
    false,
    '/images/members/aaron-prather.jpeg'
),
(
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'Aaron Williams',
    'HaptX',
    '(No Title Provided)',
    'awilliams@haptx.com',
    '(555) 123-4567',
    '(Not Provided)',
    'Experienced professional in haptic technology and virtual reality applications.',
    ARRAY['Classroom Training', 'VR/AR'],
    ARRAY['Education & Workforce Advisory Committee (EWAC)'],
    ARRAY[],
    ARRAY['Technology'],
    'Core',
    NULL,
    'HaptX',
    false,
    false,
    NULL
),
(
    'b2c3d4e5-f6a7-8901-bcde-f23456789012',
    'Adam Newberry',
    'On the Road Companies',
    '(No Title Provided)',
    'anewberry@ontheroad.com',
    '(555) 234-5678',
    '(Not Provided)',
    'Transportation and logistics expert with focus on autonomous vehicle integration.',
    ARRAY[],
    ARRAY[],
    ARRAY[],
    ARRAY['Transportation'],
    'Bronze',
    NULL,
    'On the Road Companies',
    false,
    false,
    NULL
),
(
    'c3d4e5f6-a7b8-9012-cdef-345678901234',
    'Amir Barati Farimani',
    'Carnegie Mellon University',
    '(No Title Provided)',
    'abarati@cmu.edu',
    '(412) 268-1234',
    'Pittsburgh, PA',
    'Research professor focusing on AI and machine learning applications in robotics.',
    ARRAY['AI', 'Automation', 'Drones'],
    ARRAY['Technology Advisory Committee (TAC)'],
    ARRAY['TAC Committee Member'],
    ARRAY['Education & Workforce Development', 'Technology'],
    'Partner',
    'TAC Committee Member',
    'Carnegie Mellon University',
    true,
    false,
    NULL
),
(
    'd4e5f6a7-b8c9-0123-def4-56789012345a',
    'John Smith',
    'ASTM',
    'Director, Robotics & Autonomous Systems Programs',
    'jsmith@astm.com',
    '(123) 456-7891',
    '(Not Provided)',
    'Senior director at ASTM International with expertise in robotics standards.',
    ARRAY['Automation', 'Autonomous Vehicles'],
    ARRAY['Technology Advisory Committee (TAC)'],
    ARRAY['TAC Committee Member'],
    ARRAY['Automation and Robotics'],
    'Supporting',
    'TAC Committee Member',
    'ASTM',
    true,
    false,
    NULL
),
(
    'e5f6a7b8-c9d0-1234-ef56-789012345abc',
    'Abdullah Alturki',
    'University of Pittsburgh',
    '(No Title Provided)',
    'aalturki@pitt.edu',
    '(412) 624-1234',
    'Pittsburgh, PA',
    'Graduate researcher in robotics and autonomous systems at University of Pittsburgh.',
    ARRAY[],
    ARRAY[],
    ARRAY[],
    ARRAY['Education & Workforce Development'],
    'Student',
    NULL,
    'University of Pittsburgh',
    false,
    false,
    NULL
);

-- Create index for better performance
CREATE INDEX idx_members_name ON members(name);
CREATE INDEX idx_members_company ON members(member_company);
CREATE INDEX idx_members_knowledgeable_about ON members USING GIN(knowledgeable_about);
CREATE INDEX idx_members_committee_tags ON members USING GIN(committee_tags);
CREATE INDEX idx_members_industry ON members USING GIN(industry);

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
