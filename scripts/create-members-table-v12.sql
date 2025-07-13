-- Drop the table if it exists
DROP TABLE IF EXISTS members;

-- Create the members table with proper structure
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  linkedin TEXT,
  bio TEXT NOT NULL,
  expertise TEXT[] DEFAULT '{}',
  committee TEXT[] DEFAULT '{}',
  knowledgeable_skills TEXT[] DEFAULT '{}',
  is_favorite BOOLEAN DEFAULT FALSE,
  profile_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_members_name ON members(name);
CREATE INDEX idx_members_company ON members(company);
CREATE INDEX idx_members_expertise ON members USING GIN(expertise);
CREATE INDEX idx_members_committee ON members USING GIN(committee);
CREATE INDEX idx_members_skills ON members USING GIN(knowledgeable_skills);
CREATE INDEX idx_members_favorite ON members(is_favorite);

-- Insert sample data
INSERT INTO members (name, title, company, location, email, phone, linkedin, bio, expertise, committee, knowledgeable_skills, is_favorite, profile_image) VALUES
('Dr. Sarah Chen', 'Senior Robotics Engineer', 'Boston Dynamics', 'Boston, MA', 'sarah.chen@example.com', '+1-617-555-0123', 'https://linkedin.com/in/sarahchen', 'Dr. Chen is a leading expert in humanoid robotics with over 15 years of experience in developing advanced robotic systems. She has published numerous papers on robot locomotion and has been instrumental in developing next-generation robotic platforms.', 
 ARRAY['Humanoid Robotics', 'Machine Learning', 'Control Systems'], 
 ARRAY['Technical Advisory Board', 'Research Committee'], 
 ARRAY['Python', 'ROS', 'Computer Vision', 'Deep Learning'], 
 true, '/images/members/sarah-chen.jpg'),

('Michael Rodriguez', 'Manufacturing Director', 'Ford Motor Company', 'Detroit, MI', 'michael.rodriguez@example.com', '+1-313-555-0456', 'https://linkedin.com/in/michaelrodriguez', 'Michael leads manufacturing automation initiatives at Ford, focusing on integrating robotic systems into automotive production lines. He has successfully implemented over 50 robotic work cells and has expertise in lean manufacturing principles.',
 ARRAY['Manufacturing Automation', 'Industrial Robotics', 'Lean Manufacturing'], 
 ARRAY['Manufacturing Committee', 'Standards Committee'], 
 ARRAY['PLC Programming', 'Six Sigma', 'Project Management', 'CAD Design'], 
 false, '/images/members/michael-rodriguez.jpg'),

('Dr. Emily Watson', 'AI Research Scientist', 'MIT', 'Cambridge, MA', 'emily.watson@example.com', '+1-617-555-0789', 'https://linkedin.com/in/emilywatson', 'Dr. Watson is a renowned researcher in artificial intelligence and robotics, specializing in human-robot interaction and collaborative robotics. She has received multiple grants from NSF and has been featured in leading robotics journals.',
 ARRAY['Artificial Intelligence', 'Human-Robot Interaction', 'Collaborative Robotics'], 
 ARRAY['Research Committee', 'Education Committee'], 
 ARRAY['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Research Methodology'], 
 true, '/images/members/emily-watson.jpg'),

('James Park', 'Automation Engineer', 'Tesla', 'Austin, TX', 'james.park@example.com', '+1-512-555-0321', 'https://linkedin.com/in/jamespark', 'James specializes in factory automation and has been key in developing Tesla''s advanced manufacturing processes. He has expertise in both hardware and software aspects of industrial automation systems.',
 ARRAY['Factory Automation', 'Industrial IoT', 'Process Optimization'], 
 ARRAY['Manufacturing Committee'], 
 ARRAY['Industrial Networks', 'SCADA Systems', 'Data Analytics', 'Automation Software'], 
 false, '/images/members/james-park.jpg'),

('Dr. Lisa Thompson', 'Biomedical Engineer', 'Johns Hopkins University', 'Baltimore, MD', 'lisa.thompson@example.com', '+1-410-555-0654', 'https://linkedin.com/in/lisathompson', 'Dr. Thompson develops medical robotics systems for surgical applications. Her work focuses on precision robotics for minimally invasive procedures and has resulted in several FDA-approved medical devices.',
 ARRAY['Medical Robotics', 'Surgical Systems', 'Biomedical Engineering'], 
 ARRAY['Healthcare Committee', 'Safety Committee'], 
 ARRAY['Medical Device Design', 'FDA Regulations', 'Precision Engineering', 'Biocompatible Materials'], 
 true, '/images/members/lisa-thompson.jpg'),

('Robert Kim', 'Systems Integration Manager', 'Siemens', 'Chicago, IL', 'robert.kim@example.com', '+1-312-555-0987', 'https://linkedin.com/in/robertkim', 'Robert leads complex systems integration projects, combining robotics, AI, and IoT technologies. He has managed multi-million dollar automation projects across various industries including automotive, aerospace, and consumer goods.',
 ARRAY['Systems Integration', 'Project Management', 'Industrial Automation'], 
 ARRAY['Technical Advisory Board', 'Standards Committee'], 
 ARRAY['Systems Architecture', 'Integration Testing', 'Risk Management', 'Vendor Management'], 
 false, '/images/members/robert-kim.jpg'),

('Dr. Maria Gonzalez', 'Robotics Professor', 'Stanford University', 'Palo Alto, CA', 'maria.gonzalez@example.com', '+1-650-555-0147', 'https://linkedin.com/in/mariagonzalez', 'Dr. Gonzalez is a professor of robotics and mechanical engineering at Stanford. Her research focuses on soft robotics and bio-inspired robotic systems. She has mentored over 100 graduate students and has numerous patents in robotics.',
 ARRAY['Soft Robotics', 'Bio-inspired Systems', 'Academic Research'], 
 ARRAY['Education Committee', 'Research Committee'], 
 ARRAY['Academic Writing', 'Grant Writing', 'Student Mentoring', 'Patent Development'], 
 true, '/images/members/maria-gonzalez.jpg'),

('David Lee', 'Robotics Consultant', 'Independent Consultant', 'Seattle, WA', 'david.lee@example.com', '+1-206-555-0258', 'https://linkedin.com/in/davidlee', 'David provides robotics consulting services to startups and established companies. He has helped over 30 companies implement robotic solutions and has expertise in both technical implementation and business strategy.',
 ARRAY['Robotics Consulting', 'Business Strategy', 'Technology Implementation'], 
 ARRAY['Business Development Committee'], 
 ARRAY['Business Development', 'Technical Sales', 'Market Analysis', 'Strategic Planning'], 
 false, '/images/members/david-lee.jpg'),

('Dr. Jennifer Adams', 'Research Director', 'NASA Jet Propulsion Laboratory', 'Pasadena, CA', 'jennifer.adams@example.com', '+1-626-555-0369', 'https://linkedin.com/in/jenniferadams', 'Dr. Adams leads robotics research for space exploration missions. She has been involved in developing robotic systems for Mars rovers and has expertise in extreme environment robotics and autonomous navigation.',
 ARRAY['Space Robotics', 'Autonomous Navigation', 'Extreme Environment Systems'], 
 ARRAY['Research Committee', 'Technical Advisory Board'], 
 ARRAY['Space Systems', 'Autonomous Control', 'Environmental Testing', 'Mission Planning'], 
 true, '/images/members/jennifer-adams.jpg'),

('Aaron Prather', 'Senior Software Engineer', 'Google', 'Mountain View, CA', 'aaron.prather@example.com', '+1-650-555-0741', 'https://linkedin.com/in/aaronprather', 'Aaron develops AI and machine learning systems for robotic applications at Google. He has worked on several high-profile projects including autonomous vehicles and robotic assistants, with expertise in deep learning and computer vision.',
 ARRAY['AI/ML for Robotics', 'Computer Vision', 'Autonomous Systems'], 
 ARRAY['AI Committee', 'Technical Advisory Board'], 
 ARRAY['TensorFlow', 'PyTorch', 'Computer Vision', 'Autonomous Driving'], 
 false, '/images/members/aaron-prather.jpeg');

-- Update the updated_at timestamp function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update the updated_at column
CREATE TRIGGER update_members_updated_at 
    BEFORE UPDATE ON members 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
