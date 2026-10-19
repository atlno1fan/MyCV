import { ExternalLink } from 'lucide-react';
import { externalLinkProps } from '../lib/links';
import type { Project } from '../types';
import { Chip } from './Chip';

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="py-8 first:pt-0 last:pb-0">
      <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.technologies.map((technology) => (
          <Chip key={technology} label={technology} />
        ))}
      </ul>
      <p className="mt-4 max-w-3xl leading-relaxed text-ink-2">{project.description}</p>
      {project.results && (
        <div className="mt-4 max-w-3xl border-l-2 border-accent pl-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-accent">Results</h4>
          <p className="mt-1 leading-relaxed text-ink-2">{project.results}</p>
        </div>
      )}
      {project.link && (
        <a
          href={project.link}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          {...externalLinkProps(project.link)}
        >
          View project
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
