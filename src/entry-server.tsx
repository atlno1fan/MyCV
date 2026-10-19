import { renderToString } from 'react-dom/server';
import { App } from './App';
import {
  certifications,
  education,
  experiences,
  intro,
  projects,
  skillGroups,
  socialLinks,
} from './data/portfolio';

/** The page as static HTML, used by scripts/prerender.mjs to fill the built index.html. */
export function render(): string {
  return renderToString(<App />);
}

/** The content, for the Markdown CV and llms.txt that the build writes next to the page. */
export const content = {
  intro,
  experiences,
  projects,
  education,
  certifications,
  skillGroups: skillGroups.map(({ name, core, more }) => ({ name, core, more })),
  socialLinks: socialLinks.map(({ platform, url }) => ({ platform, url })),
};
