-- Drop existing table if it exists
DROP TABLE IF EXISTS members;

-- Create members table with UUID primary key
CREATE TABLE members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    member_company VARCHAR(255),
    designation VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50),
    address TEXT,
    about_me TEXT,
    knowledgeable_about TEXT[] DEFAULT '{}',
    membership_level VARCHAR(100),
    membership_role VARCHAR(100),
    committee_memberships TEXT[] DEFAULT '{}',
    committee_tags TEXT[] DEFAULT '{}',
    industry TEXT[] DEFAULT '{}',
    lead_organization VARCHAR(255),
    is_interested_in_projects BOOLEAN DEFAULT false,
    is_favorite BOOLEAN DEFAULT false,
    profile_image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data with valid UUIDs
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
    '6df362b4-03d2-4d12-b566-b5d4e1005b4a',
    'Aaron Prather',
    'ASTM',
    'Director, Robotics & Autonomous Systems Programs',
    'aprather@astm.com',
    '(123) 456-7890',
    NULL,
    'Leads ASTM efforts in the field of Robotics and Autonomous Systems. From Standards Development to Workforce Training to R&D, ASTM has a lot of tools to offer.',
    ARRAY['Automation', 'Autonomous Vehicles', 'Collaborative Robots', 'Drones', 'Industrial Robots', 'Mobile Robots', 'Public Speaking'],
    'Supporting',
    'TAC Committee Member',
    ARRAY['Technology Advisory Committee (TAC)'],
    ARRAY['TAC Committee Member'],
    ARRAY['Automation and Robotics', 'Technology'],
    'ASTM International',
    true,
    false,
    '/images/members/aaron-prather.jpeg'
),
(
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'Sarah Johnson',
    'Carnegie Mellon University',
    'Research Scientist',
    'sarah.johnson@cmu.edu',
    '(412) 268-1234',
    'Pittsburgh, PA',
    'Research scientist specializing in human-robot interaction and collaborative robotics systems.',
    ARRAY['Collaborative Robots', 'AI', 'Research', 'Robotics', 'Software'],
    'Core',
    'Research Committee Member',
    ARRAY['Technology Advisory Committee (TAC)', 'Research Committee'],
    ARRAY['Research Committee Member'],
    ARRAY['Education & Workforce Development', 'Technology'],
    'Carnegie Mellon University',
    true,
    false,
    NULL
),
(
    'b2c3d4e5-f6a7-8901-bcde-f23456789012',
    'Michael Chen',
    'Siemens',
    'Senior Automation Engineer',
    'michael.chen@siemens.com',
    '(555) 123-4567',
    'Detroit, MI',
    'Senior engineer with expertise in industrial automation and manufacturing systems.',
    ARRAY['Automation', 'Manufacturing Operations', 'Industrial Robots', 'Vision & Motion'],
    'Platinum, Gold, and Silver',
    'Industry Representative',
    ARRAY['Stakeholder Executive Committee (SEC)'],
    ARRAY['Industry Representative'],
    ARRAY['Manufacturing', 'Automation and Robotics'],
    'Siemens',
    true,
    true,
    NULL
),
(
    'c3d4e5f6-a7b8-9012-cdef-345678901234',
    'Dr. Emily Rodriguez',
    'University of Pittsburgh',
    'Professor of Robotics',
    'emily.rodriguez@pitt.edu',
    '(412) 624-5678',
    'Pittsburgh, PA',
    'Professor and researcher focusing on robotic safety standards and workforce development.',
    ARRAY['Robotic Safety Standard', 'Workforce Development', 'Education', 'Research', 'Curricula Development'],
    'Partner',
    'Education Committee Chair',
    ARRAY['Education & Workforce Advisory Committee (EWAC)', 'Education Committee'],
    ARRAY['Education Committee Chair'],
    ARRAY['Education & Workforce Development'],
    'University of Pittsburgh',
    false,
    false,
    NULL
),
(
    'd4e5f6a7-b8c9-0123-defa-456789012345',
    'James Wilson',
    'HaptX Inc',
    'VP of Engineering',
    'james.wilson@haptx.com',
    '(206) 555-0123',
    'Seattle, WA',
    'Engineering leader specializing in haptic technology and VR/AR applications in manufacturing.',
    ARRAY['VR/AR', 'Software', 'Start-ups', 'Project Management'],
    'Start-up',
    'Technology Advisor',
    ARRAY['Technology Advisory Committee (TAC)'],
    ARRAY['Technology Advisor'],
    ARRAY['Technology'],
    'HaptX Inc',
    true,
    false,
    NULL
);

-- Create indexes for better performance
CREATE INDEX idx_members_name ON members(name);
CREATE INDEX idx_members_company ON members(member_company);
CREATE INDEX idx_members_membership_level ON members(membership_level);
CREATE INDEX idx_members_is_favorite ON members(is_favorite);
CREATE INDEX idx_members_is_interested_in_projects ON members(is_interested_in_projects);

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
