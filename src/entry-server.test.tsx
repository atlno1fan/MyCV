import { describe, expect, it } from 'vitest';
import { intro, projects } from './data/portfolio';
import { content, render } from './entry-server';

describe('server render', () => {
  it('produces the whole page as HTML, with no empty root to hide behind', () => {
    const html = render();
    expect(html).toContain(intro.name);
    expect(html).toContain(intro.title);
    for (const heading of ['About', 'Experience', 'Projects', 'Education', 'Technical skills']) {
      expect(html).toContain(`>${heading}<`);
    }
    for (const project of projects) {
      expect(html).toContain(project.title);
    }
  });

  it('exposes the content the Markdown CV is generated from, without icons or images', () => {
    expect(content.intro.name).toBe(intro.name);
    expect(content.skillGroups[0]).not.toHaveProperty('icon');
    expect(content.socialLinks[0]).not.toHaveProperty('icon');
  });
});
