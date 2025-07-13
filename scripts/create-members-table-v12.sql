-- Drop the table if it exists
DROP TABLE IF EXISTS members;

-- Create the members table with proper structure
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(50),
  bio TEXT,
  knowledgeable_skills TEXT[] DEFAULT '{}',
  committee TEXT[] DEFAULT '{}',
  is_favorite BOOLEAN DEFAULT FALSE,
  profile_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_members_name ON members(name);
CREATE INDEX idx_members_company ON members(company);
CREATE INDEX idx_members_location ON members(location);
CREATE INDEX idx_members_is_favorite ON members(is_favorite);
CREATE INDEX idx_members_knowledgeable_skills ON members USING GIN(knowledgeable_skills);
CREATE INDEX idx_members_committee ON members USING GIN(committee);

-- Insert sample data
INSERT INTO members (name, title, company, location, email, phone, bio, knowledgeable_skills, committee, is_favorite, profile_image_url) VALUES
('Aaron Prather', 'Senior Robotics Engineer', 'Advanced Robotics Manufacturing', 'Pittsburgh, PA', 'aaron.prather@arm.org', '+1 (412) 555-0123', 'Experienced robotics engineer with over 10 years in manufacturing automation. Specializes in collaborative robotics and AI-driven manufacturing solutions.', 
 ARRAY['Robotics', 'AI/ML', 'Manufacturing Automation', 'Computer Vision'], 
 ARRAY['Technical Advisory Board', 'AI Working Group'], 
 true, '/images/members/aaron-prather.jpeg'),

('Sarah Chen', 'Director of Innovation', 'TechFlow Dynamics', 'San Francisco, CA', 'sarah.chen@techflow.com', '+1 (415) 555-0234', 'Innovation leader focused on next-generation manufacturing technologies and digital transformation in industrial settings.',
 ARRAY['Digital Transformation', 'IoT', 'Industry 4.0', 'Strategic Planning'],
 ARRAY['Innovation Committee', 'Standards Working Group'],
 false, '/placeholder-user.jpg'),

('Michael Rodriguez', 'Research Scientist', 'Carnegie Mellon University', 'Pittsburgh, PA', 'mrodriguez@cmu.edu', '+1 (412) 555-0345', 'Research scientist specializing in human-robot collaboration and adaptive manufacturing systems.',
 ARRAY['Human-Robot Collaboration', 'Adaptive Systems', 'Research & Development', 'Machine Learning'],
 ARRAY['Research Committee', 'Education Working Group'],
 true, '/placeholder-user.jpg'),

('Jennifer Walsh', 'VP of Operations', 'Precision Manufacturing Inc.', 'Detroit, MI', 'j.walsh@precision.com', '+1 (313) 555-0456', 'Operations executive with extensive experience in lean manufacturing and process optimization.',
 ARRAY['Lean Manufacturing', 'Process Optimization', 'Quality Control', 'Operations Management'],
 ARRAY['Operations Committee', 'Quality Standards Group'],
 false, '/placeholder-user.jpg'),

('David Kim', 'Automation Specialist', 'RoboTech Solutions', 'Austin, TX', 'david.kim@robotech.com', '+1 (512) 555-0567', 'Automation specialist with expertise in robotic integration and smart factory implementations.',
 ARRAY['Robotic Integration', 'Smart Factory', 'PLC Programming', 'System Integration'],
 ARRAY['Technical Committee', 'Automation Working Group'],
 false, '/placeholder-user.jpg'),

('Lisa Thompson', 'Chief Technology Officer', 'NextGen Manufacturing', 'Boston, MA', 'lisa.thompson@nextgen.com', '+1 (617) 555-0678', 'Technology leader driving innovation in advanced manufacturing and sustainable production methods.',
 ARRAY['Advanced Manufacturing', 'Sustainability', 'Technology Strategy', 'Innovation Management'],
 ARRAY['Executive Board', 'Sustainability Committee'],
 true, '/placeholder-user.jpg'),

('Robert Johnson', 'Senior Engineer', 'Automated Systems Corp', 'Chicago, IL', 'robert.johnson@autosys.com', '+1 (312) 555-0789', 'Senior engineer specializing in automated assembly systems and quality assurance technologies.',
 ARRAY['Automated Assembly', 'Quality Assurance', 'Systems Engineering', 'Testing & Validation'],
 ARRAY['Engineering Committee', 'Quality Working Group'],
 false, '/placeholder-user.jpg'),

('Maria Garcia', 'Product Manager', 'InnovateTech', 'Seattle, WA', 'maria.garcia@innovate.com', '+1 (206) 555-0890', 'Product manager focused on developing cutting-edge robotics solutions for manufacturing applications.',
 ARRAY['Product Management', 'Robotics Solutions', 'Market Analysis', 'Customer Experience'],
 ARRAY['Product Committee', 'Market Research Group'],
 false, '/placeholder-user.jpg'),

('James Wilson', 'Research Director', 'Advanced Manufacturing Institute', 'Atlanta, GA', 'james.wilson@ami.org', '+1 (404) 555-0901', 'Research director leading initiatives in collaborative robotics and intelligent manufacturing systems.',
 ARRAY['Collaborative Robotics', 'Intelligent Systems', 'Research Leadership', 'Grant Writing'],
 ARRAY['Research Committee', 'Strategic Planning Group'],
 true, '/placeholder-user.jpg'),

('Amanda Foster', 'Systems Architect', 'Digital Factory Solutions', 'Phoenix, AZ', 'amanda.foster@digitalfactory.com', '+1 (602) 555-0012', 'Systems architect designing integrated manufacturing solutions with focus on data analytics and AI.',
 ARRAY['Systems Architecture', 'Data Analytics', 'AI Integration', 'Digital Twins'],
 ARRAY['Architecture Committee', 'Data Working Group'],
 false, '/placeholder-user.jpg');

-- Update the updated_at timestamp trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_members_updated_at BEFORE UPDATE ON members FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
