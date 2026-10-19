// Runs after `vite build` and the server build of src/entry-server.tsx. It writes the rendered page
// into dist/index.html, and generates dist/cv.md and dist/llms.txt from the same content, so the
// published site is readable by people and machines that never run JavaScript.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
const site = 'https://atlno1fan.github.io/MyCV/';

const { render, content } = await import(resolve('dist-ssr/entry-server.js'));

// 1. The page itself.
const template = readFileSync(resolve(dist, 'index.html'), 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error('dist/index.html has no empty #root to fill.');
}
writeFileSync(resolve(dist, 'index.html'), template.replace(marker, `<div id="root">${render()}</div>`));

// 2. The CV as Markdown.
const { intro, experiences, projects, education, certifications, skillGroups, socialLinks } = content;
const bullets = (items) => items.map((item) => `- ${item}`).join('\n');
const md = [
  `# ${intro.name}`,
  '',
  `**${intro.title}**`,
  '',
  intro.summary,
  '',
  bullets(intro.highlights.map((item) => `${item.value} ${item.label}`)),
  '',
  `Contact: ${intro.contactEmail}`,
  ...socialLinks
    .filter((link) => !link.url.startsWith('mailto:'))
    .map((link) => `${link.platform}: ${link.url}`),
  intro.cvFile ? `CV (PDF): ${site}${intro.cvFile}` : '',
  intro.cvShortFile ? `One-page CV (PDF): ${site}${intro.cvShortFile}` : '',
  intro.availability ? `\n${intro.availability}` : '',
  '',
  '## About',
  '',
  intro.about.lead,
  '',
  bullets(intro.about.points),
  '',
  '## Experience',
  '',
  ...experiences.flatMap((role) => [
    `### ${role.title}, ${role.company}`,
    '',
    role.periods.join('; '),
    '',
    bullets(role.responsibilities),
    '',
  ]),
  '## Projects',
  '',
  ...projects.flatMap((project) => [
    `### ${project.title}`,
    '',
    `Technologies: ${project.technologies.join(', ')}`,
    '',
    project.summary,
    '',
    bullets(project.points),
    ...(project.results ? ['', 'Results:', '', bullets(project.results)] : []),
    ...(project.link ? ['', `Link: ${project.link}`] : []),
    '',
  ]),
  '## Education',
  '',
  ...education.flatMap((entry) => [
    `### ${entry.degree}, ${entry.institution}`,
    '',
    `${entry.period}. GPA ${entry.gpa}. Thesis: ${entry.thesis}.${entry.note ? ` ${entry.note}` : ''}`,
    '',
  ]),
  '## Certifications',
  '',
  bullets(certifications.map((entry) => `${entry.name}, ${entry.issuer}, ${entry.dates}`)),
  '',
  '## Technical skills',
  '',
  'Used in production in the past year, then also worked with.',
  '',
  ...skillGroups.map(
    (group) =>
      `- **${group.name}:** ${group.core.join(', ')}${group.more.length ? ` (also: ${group.more.join(', ')})` : ''}`,
  ),
  '',
]
  .filter((line) => line !== null && line !== undefined)
  .join('\n')
  .replace(/\n{3,}/g, '\n\n');
writeFileSync(resolve(dist, 'cv.md'), md);

// 3. llms.txt: a short, plain index for AI tools, pointing at the Markdown and the PDFs.
const llms = [
  `# ${intro.name}`,
  '',
  `> ${intro.title}. ${intro.summary}`,
  '',
  '## CV',
  '',
  `- [CV as Markdown](${site}cv.md): the complete CV, the best format for tools`,
  intro.cvFile ? `- [CV as PDF](${site}${intro.cvFile}): two pages` : null,
  intro.cvShortFile ? `- [One-page CV as PDF](${site}${intro.cvShortFile})` : null,
  `- [Web page](${site}): the same content, prerendered HTML`,
  '',
  '## Contact',
  '',
  `- Email: ${intro.contactEmail}`,
  ...socialLinks
    .filter((link) => !link.url.startsWith('mailto:'))
    .map((link) => `- ${link.platform}: ${link.url}`),
  '',
]
  .filter((line) => line !== null)
  .join('\n');
writeFileSync(resolve(dist, 'llms.txt'), llms);

// The server bundle was only needed for this step.
rmSync(resolve('dist-ssr'), { recursive: true, force: true });
console.log('prerendered dist/index.html and wrote dist/cv.md and dist/llms.txt');
