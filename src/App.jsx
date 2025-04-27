import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { groupBy } from 'lodash';

// Data imports
import { socialLinks, intro, experiences, skills, education, skillIcons, projects } from "./data/portfolioData.js";

// Icon imports
import { Briefcase, Code, GraduationCap, FolderGit2, ChevronsDown } from 'lucide-react';

// Component imports
import { Layout } from './components/Layout/Layout';
import { Container } from './components/Base/Container';
import { NavItem } from './components/Navigation/NavItem';
import { ExperienceCard } from './components/Cards/ExperienceCard';
import { EducationCard } from './components/Cards/EducationCard';
import { ProjectCard } from './components/Cards/ProjectCard';
import { SkillCard } from './components/Cards/SkillCard';
import { Hero } from './components/Sections/Hero';
import { SectionTitle } from './components/UI/SectionTitle.jsx';
import { IconWrapper } from './components/Common/IconWrapper.jsx';

// Scroll Indicator Component
const ScrollIndicator = ({ onClick, prefersReducedMotion }) => (
  <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
    <button
      aria-label="Scroll down to view more content"
      className="flex flex-col items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-lg py-2 px-4"
      onClick={onClick}
    >
      <div className="text-white text-sm font-medium mb-2">Scroll Down</div>
      {!prefersReducedMotion ? (
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.2, 
            ease: "easeInOut" 
          }}
        >
          <ChevronsDown className="h-6 w-6 text-indigo-400" aria-hidden="true" />
        </motion.div>
      ) : (
        <ChevronsDown className="h-6 w-6 text-indigo-400" aria-hidden="true" />
      )}
    </button>
  </div>
);

// Main Portfolio Component
const Portfolio = () => {
  // Section detection logic
  const getAvailableSections = useCallback(() => {
    const sections = [];
    
    if (experiences?.length > 0) sections.push('experience');
    if (projects?.length > 0) sections.push('projects');
    if (education?.length > 0) sections.push('education');
    if (skills?.length > 0) sections.push('skills');
    
    return sections;
  }, []);

  // State declarations
  const availableSections = getAvailableSections();
  const [selectedTab, setSelectedTab] = useState(availableSections[0] || null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Scroll and motion preference detection
  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionPreferenceChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      if (scrollPosition > viewportHeight * 0.2) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    // Event listeners
    mediaQuery.addEventListener("change", handleMotionPreferenceChange);
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, []);
  
  // Scroll action handler
  const scrollDown = useCallback(() => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }, [prefersReducedMotion]);
  
  // Tab content renderer
  const renderTabContent = useCallback(() => {
    if (!selectedTab) return null;

    switch(selectedTab) {
      // Experience section
      case 'experience':
        return experiences?.length > 0 ? (
          <div>
            <SectionTitle icon={Briefcase} title="Work Experience" />
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={`exp-${index}`} experience={exp} />
              ))}
            </div>
          </div>
        ) : null;
      
      // Projects section
      case 'projects':
        return projects?.length > 0 ? (
          <div>
            <SectionTitle icon={FolderGit2} title="Projects" />
            <div className="space-y-8">
              {projects.map((project, index) => (
                <ProjectCard key={`proj-${index}`} project={project} />
              ))}
            </div>
          </div>
        ) : null;
      
      // Skills section
      case 'skills':
        return skills?.length > 0 ? (
          <div>
            <SectionTitle icon={Code} title="Technical Skills" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(groupBy(skills, 'category')).map(([category, categorySkills]) => (
                <SkillCard
                  key={`skill-${category}`}
                  title={category}
                  icon={(props) => <IconWrapper icon={skillIcons[category]} {...props} />}
                  skills={categorySkills}
                />
              ))}
            </div>
          </div>
        ) : null;
      
      // Education section
      case 'education':
        return education?.length > 0 ? (
          <div>
            <SectionTitle icon={GraduationCap} title="Education" />
            <div className="space-y-8">
              {education.map((edu, index) => (
                <EducationCard key={`edu-${index}`} education={edu} />
              ))}
            </div>
          </div>
        ) : null;
        
      default:
        return null;
    }
  }, [selectedTab]);

  // Component render
  return (
    <Layout>
      {/* Main content container with animation */}
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero section */}
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
        
        {/* Main content area */}
        <div className="bg-zinc-900 relative">
          <Container>
            {/* Navigation tabs */}
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
                      key={`nav-${section}`}
                      label={section}
                      isActive={selectedTab === section}
                      onClick={() => setSelectedTab(section)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Content area with animations */}
            <AnimatePresence mode="wait">
              {selectedTab && (
                <motion.div
                  key={`content-${selectedTab}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="py-12"
                >
                  {renderTabContent()}
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        </div>
        
        {/* Scroll indicator */}
        <AnimatePresence mode="wait">
          {showScrollIndicator && (
            <ScrollIndicator 
              onClick={scrollDown}
              prefersReducedMotion={prefersReducedMotion}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </Layout>
  );
};

export default Portfolio;