import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { groupBy } from 'lodash';

// Data
import { socialLinks, intro, experiences, skills, education, skillIcons, projects } from "./data/portfolioData.js";

// Icons
import { Briefcase, Code, GraduationCap, FolderGit2 } from 'lucide-react';

// Layout Components
import { Layout } from './components/Layout/Layout';
import { Container } from './components/Base/Container';

// Navigation Components
import { NavItem } from './components/Navigation/NavItem';

// Card Components
import { ExperienceCard } from './components/Cards/ExperienceCard';
import { EducationCard } from './components/Cards/EducationCard';
import { ProjectCard } from './components/Cards/ProjectCard';
import { SkillCard } from './components/Cards/SkillCard';

// Section Components
import { Hero } from './components/Sections/Hero';
import { AboutSection } from './components/Sections/About.jsx';

// UI Components
import { SectionTitle } from './components/UI/SectionTitle.jsx';
import { IconWrapper } from './components/Common/IconWrapper.jsx';


const Portfolio = () => {
  // Helper function to determine available sections
  const getAvailableSections = () => {
    const sections = [];
    
    if (experiences && experiences.length > 0) sections.push('experience');
    if (projects && projects.length > 0) sections.push('projects');
    if (education && education.length > 0) sections.push('education');
    if (skills && skills.length > 0) sections.push('skills');
    
    return sections;
  };

  const availableSections = getAvailableSections();
  const [selectedTab, setSelectedTab] = useState(availableSections[0] || null);
  
  return (
    <Layout>
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero
          title={intro.title}
          subtitle={intro.subtitle}
          description={intro.description}
          socialLinks={socialLinks.map(link => ({
            ...link,
            icon: (props) => <IconWrapper icon={link.icon} {...props} />
          }))}
          imageSrc={intro.profileImage}
        />
        
        <div className="bg-zinc-900 relative">
         

          <Container>
            {/* About Me Section */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-8 pb-16 relative"
            >
              <AboutSection data={intro} />
            </motion.div> */}

            {/* Only show sub-navigation if there are available sections */}
            {availableSections.length > 0 && (
              <motion.div 
                className="border-b border-zinc-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex justify-center space-x-2 py-4">
                  {availableSections.map((section) => (
                    <NavItem
                      key={section}
                      label={section}
                      isActive={selectedTab === section}
                      onClick={() => setSelectedTab(section)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Content sections */}
            <AnimatePresence mode="wait">
              {selectedTab && (
                <motion.div
                  key={selectedTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="py-12"
                >
                  {selectedTab === 'experience' && experiences.length > 0 && (
                    <div>
                      <SectionTitle icon={Briefcase} title="Work Experience" />
                      <div className="space-y-8">
                        {experiences.map((exp, index) => (
                          <ExperienceCard key={index} experience={exp} />
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedTab === 'projects' && projects.length > 0 && (
                    <div>
                      <SectionTitle icon={FolderGit2} title="Projects" />
                      <div className="space-y-8">
                        {projects.map((project, index) => (
                          <ProjectCard key={index} project={project} />
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedTab === 'skills' && skills.length > 0 && (
                    <div>
                      <SectionTitle icon={Code} title="Technical Skills" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(groupBy(skills, 'category')).map(([category, categorySkills]) => (
                          <SkillCard
                            key={category}
                            title={category}
                            icon={(props) => <IconWrapper icon={skillIcons[category]} {...props} />}
                            skills={categorySkills}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedTab === 'education' && education.length > 0 && (
                    <div>
                      <SectionTitle icon={GraduationCap} title="Education" />
                      <div className="space-y-8">
                        {education.map((edu, index) => (
                          <EducationCard key={index} education={edu} />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Portfolio;