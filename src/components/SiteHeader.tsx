import { Mail, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { SectionDef } from '../types';

interface SiteHeaderProps {
  name: string;
  sections: readonly SectionDef[];
  activeId: string | null;
  contactEmail: string;
}

const linkClass = (active: boolean) =>
  `focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent ${
    active ? 'text-ink' : 'text-ink-2 hover:text-ink'
  }`;

/** Sticky header: inline section links on wide screens, a menu button with a stacked list on narrow ones. */
export function SiteHeader({ name, sections, activeId, contactEmail }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  // Escape closes the menu, as it would any disclosure.
  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className="mx-auto flex h-14 max-w-content items-center gap-6 px-6 md:h-16 md:px-10">
        <a
          href="#top"
          className="whitespace-nowrap font-serif text-lg text-ink hover:text-accent focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
        >
          {name}
        </a>

        <nav aria-label="Sections" className="ml-10 hidden md:block">
          <ul className="flex items-center gap-1">
            {sections.map((section) => {
              const active = section.id === activeId;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={active ? 'location' : undefined}
                    className={`inline-block border-b-2 px-3 py-2 text-[15px] transition-colors ${
                      active ? 'border-accent' : 'border-transparent'
                    } ${linkClass(active)}`}
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

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-surface-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          aria-expanded={open}
          aria-controls="section-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
          <span className="sr-only">{open ? 'Close menu' : 'Menu'}</span>
        </button>
      </div>

      {open && (
        <nav id="section-menu" aria-label="Menu" className="border-t border-line md:hidden">
          <ul className="mx-auto max-w-content px-6 py-2">
            {sections.map((section) => {
              const active = section.id === activeId;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={active ? 'location' : undefined}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-3 text-base ${active ? 'bg-surface-2 font-medium' : ''} ${linkClass(active)}`}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
            <li className="pb-3 pt-3">
              <a href={`mailto:${contactEmail}`} className="btn btn-primary w-full justify-center">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
