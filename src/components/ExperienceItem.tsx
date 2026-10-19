import { useState } from 'react';
import type { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
}

/** One role. Long entries show their first few bullets and fold the rest behind a toggle. */
export function ExperienceItem({ experience }: ExperienceItemProps) {
  const [expanded, setExpanded] = useState(false);
  const all = experience.responsibilities;
  const shown = experience.highlightCount ?? all.length;
  const items = expanded ? all : all.slice(0, shown);
  const hidden = all.length - shown;

  return (
    <article className="py-10 first:pt-0 last:pb-0">
      <div className="grid gap-1 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-8">
        <div>
          <h3 className="text-xl font-semibold text-ink">{experience.title}</h3>
          <p className="mt-1 text-ink-2">{experience.company}</p>
        </div>
        <ul className="text-sm text-muted md:text-right">
          {experience.periods.map((period) => (
            <li key={period}>{period}</li>
          ))}
        </ul>
      </div>
      <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-5 text-[17px] leading-[1.7] text-ink-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mt-5 rounded text-sm font-medium text-accent hover:text-accent-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {expanded ? 'Show less' : `Show ${hidden} more`}
        </button>
      )}
    </article>
  );
}
