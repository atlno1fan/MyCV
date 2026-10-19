import { Briefcase, Code, FolderGit2, GraduationCap } from 'lucide-react';
import { About } from './components/About';
import { EducationList } from './components/EducationList';
import { ExperienceItem } from './components/ExperienceItem';
import { Hero } from './components/Hero';
import { ProjectItem } from './components/ProjectItem';
import { Reveal } from './components/Reveal';
import { Section } from './components/Section';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { SkillGroups } from './components/SkillGroups';
import {
  certifications,
  education,
  experiences,
  intro,
  projects,
  skillGroups,
  socialLinks,
} from './data/portfolio';
import { useActiveSection } from './hooks/useActiveSection';
import type { SectionDef } from './types';

// One page, in reading order. A section appears only when it has content.
const SECTIONS: readonly SectionDef[] = [
  { id: 'about', label: 'About', present: intro.about.lead.length > 0 },
  { id: 'experience', label: 'Experience', present: experiences.length > 0 },
  { id: 'projects', label: 'Projects', present: projects.length > 0 },
  { id: 'education', label: 'Education', present: education.length > 0 },
  { id: 'skills', label: 'Skills', present: skillGroups.length > 0 },
]
  .filter((section) => section.present)
  .map(({ id, label }) => ({ id, label }));

const SECTION_IDS = SECTIONS.map((section) => section.id);

export function App() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <SiteHeader
        name={intro.name}
        sections={SECTIONS}
        activeId={activeId}
        contactEmail={intro.contactEmail}
      />

      <main id="main">
        <Hero intro={intro} socialLinks={socialLinks} />

        {intro.about.lead && (
          <Section id="about" title="About" tone="band">
            <Reveal>
              <About lead={intro.about.lead} points={intro.about.points} />
            </Reveal>
          </Section>
        )}

        {experiences.length > 0 && (
          <Section id="experience" title="Experience" icon={Briefcase}>
            <div className="divide-y divide-line">
              {experiences.map((experience) => (
                <Reveal
                  key={`${experience.company}-${experience.title}`}
                  className="py-12 first:pt-0 last:pb-0"
                >
                  <ExperienceItem experience={experience} />
                </Reveal>
              ))}
            </div>
          </Section>
        )}

        {projects.length > 0 && (
          <Section id="projects" title="Projects" icon={FolderGit2} tone="band">
            <div className="divide-y divide-line">
              {projects.map((project) => (
                <Reveal key={project.title} className="py-12 first:pt-0 last:pb-0">
                  <ProjectItem project={project} />
                </Reveal>
              ))}
            </div>
          </Section>
        )}

        {education.length > 0 && (
          <Section id="education" title="Education" icon={GraduationCap}>
            <Reveal>
              <EducationList education={education} certifications={certifications} />
            </Reveal>
          </Section>
        )}

        {skillGroups.length > 0 && (
          <Section id="skills" title="Technical skills" icon={Code} tone="band">
            <Reveal>
              <SkillGroups groups={skillGroups} />
            </Reveal>
          </Section>
        )}
      </main>

      <SiteFooter name={intro.name} contactEmail={intro.contactEmail} socialLinks={socialLinks} />
    </>
  );
}
