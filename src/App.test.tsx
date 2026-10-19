import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { experiences, intro, projects } from './data/portfolio';

describe('App', () => {
  it('renders the name as the page heading and one link per section', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: intro.name })).toBeInTheDocument();
    const nav = screen.getByRole('navigation', { name: 'Sections' });
    for (const label of ['About', 'Experience', 'Projects', 'Education', 'Skills']) {
      expect(within(nav).getByRole('link', { name: label })).toHaveAttribute(
        'href',
        `#${label.toLowerCase()}`,
      );
    }
  });

  it('points the contact buttons at the email address', () => {
    render(<App />);
    for (const link of screen.getAllByRole('link', { name: /get in touch/i })) {
      expect(link).toHaveAttribute('href', `mailto:${intro.contactEmail}`);
    }
  });

  it('offers both CVs as downloads', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute('download', intro.cvFile);
    expect(screen.getByRole('link', { name: /one-page cv/i })).toHaveAttribute('download', intro.cvShortFile);
  });

  it('links only the projects that have a public link, and opens them safely', () => {
    render(<App />);
    const links = screen.getAllByRole('link', { name: /view project/i });
    expect(links).toHaveLength(projects.filter((project) => project.link).length);
    for (const link of links) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  it('folds a long role behind a toggle and expands it on request', async () => {
    render(<App />);
    const role = experiences.find((experience) => experience.highlightCount !== undefined);
    if (!role || role.highlightCount === undefined) {
      throw new Error('This test expects one folded role in the data.');
    }
    const hidden = role.responsibilities.length - role.highlightCount;
    const toggle = screen.getByRole('button', { name: `Show ${hidden} more` });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(toggle);
    expect(screen.getByRole('button', { name: 'Show less' })).toHaveAttribute('aria-expanded', 'true');
    for (const bullet of role.responsibilities) {
      expect(screen.getByText(bullet)).toBeInTheDocument();
    }
  });
});
