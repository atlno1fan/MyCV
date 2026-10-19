import { Mail } from 'lucide-react';
import type { SectionDef } from '../types';

interface SiteHeaderProps {
  name: string;
  sections: readonly SectionDef[];
  activeId: string | null;
  contactEmail: string;
}

export function SiteHeader({ name, sections, activeId, contactEmail }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className="mx-auto flex h-14 max-w-content items-center gap-6 px-6 md:h-16 md:px-10">
        <a
          href="#top"
          className="whitespace-nowrap font-serif text-lg text-ink hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {name}
        </a>
        <nav aria-label="Sections" className="ml-auto min-w-0 md:ml-10">
          <ul className="scrollbar-none flex items-center gap-1 overflow-x-auto">
            {sections.map((section) => {
              const active = section.id === activeId;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={active ? 'location' : undefined}
                    className={`inline-block whitespace-nowrap border-b-2 px-2.5 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:px-3 md:text-[15px] ${
                      active ? 'border-accent text-ink' : 'border-transparent text-ink-2 hover:text-ink'
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <a href={`mailto:${contactEmail}`} className="btn btn-primary hidden md:ml-auto md:inline-flex">
          <Mail className="h-4 w-4" aria-hidden="true" />
          Get in touch
        </a>
      </div>
    </header>
  );
}
