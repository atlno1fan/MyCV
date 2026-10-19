import { ExternalLink } from 'lucide-react';
import { externalLinkProps } from '../lib/links';
import type { Project } from '../types';
import { Chip } from './Chip';

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="py-12 first:pt-0 last:pb-0">
      <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2.5" aria-label="Technologies">
        {project.technologies.map((technology) => (
          <Chip key={technology} label={technology} />
        ))}
      </ul>
      <p className="mt-6 max-w-3xl text-[17px] leading-[1.75] text-ink-2">{project.summary}</p>
      <ul className="mt-4 max-w-3xl list-disc space-y-2.5 pl-6 text-[17px] leading-[1.75] text-ink-2">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {project.results && project.results.length > 0 && (
        <div className="mt-6 max-w-3xl rounded-md border border-l-4 border-line border-l-accent bg-surface px-6 py-5">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-accent">Results</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-[17px] leading-[1.65] text-ink-2">
            {project.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </div>
      )}
      {project.link && (
        <a
          href={project.link}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          {...externalLinkProps(project.link)}
        >
          View project
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
