import { describe, expect, it } from 'vitest';
import {
  certifications,
  education,
  experiences,
  intro,
  projects,
  skillGroups,
  socialLinks,
} from './portfolio';

const isBlank = (value: string) => value.trim().length === 0;
const duplicates = (values: readonly string[]) =>
  values.filter((value, index) => values.indexOf(value) !== index);

describe('portfolio content', () => {
  it('has no blank strings anywhere a reader would see one', () => {
    const strings = [
      intro.name,
      intro.title,
      intro.summary,
      intro.about.lead,
      ...intro.about.paragraphs,
      ...intro.highlights.flatMap((item) => [item.value, item.label]),
      ...experiences.flatMap((role) => [role.title, role.company, ...role.periods, ...role.responsibilities]),
      ...projects.flatMap((project) => [project.title, project.description, ...project.technologies]),
      ...education.flatMap((entry) => [
        entry.institution,
        entry.degree,
        entry.period,
        entry.gpa,
        entry.thesis,
      ]),
      ...certifications.flatMap((entry) => [entry.name, entry.issuer, entry.dates]),
      ...skillGroups.flatMap((group) => [group.name, ...group.core, ...group.more]),
    ];
    expect(strings.filter(isBlank)).toEqual([]);
  });

  it('keeps every skill group non-empty and free of duplicate chips', () => {
    for (const group of skillGroups) {
      const chips = [...group.core, ...group.more];
      expect(chips.length, group.name).toBeGreaterThan(0);
      expect(duplicates(chips), group.name).toEqual([]);
    }
  });

  it('never folds a role to more bullets than it has', () => {
    for (const role of experiences) {
      if (role.highlightCount !== undefined) {
        expect(role.highlightCount).toBeGreaterThan(0);
        expect(role.highlightCount).toBeLessThan(role.responsibilities.length);
      }
    }
  });

  it('uses https for every link that leaves the site', () => {
    const urls = [
      ...socialLinks.map((link) => link.url).filter((url) => !url.startsWith('mailto:')),
      ...projects.flatMap((project) => (project.link ? [project.link] : [])),
    ];
    for (const url of urls) {
      expect(url).toMatch(/^https:\/\//);
    }
  });

  it('names the CV files it offers for download', () => {
    expect(intro.cvFile).toMatch(/\.pdf$/);
    expect(intro.cvShortFile).toMatch(/\.pdf$/);
  });
});
