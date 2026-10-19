import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon?: LucideIcon;
  /** Sections alternate between the page surface and a tinted band so each one reads as its own block. */
  tone?: 'plain' | 'band';
  children: ReactNode;
}

export function Section({ id, title, icon: Icon, tone = 'plain', children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`scroll-mt-16 ${tone === 'band' ? 'bg-surface-2' : ''}`}
    >
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <h2 id={headingId} className="flex items-center gap-3 font-serif text-3xl text-ink md:text-4xl">
          {Icon && <Icon className="h-7 w-7 text-accent" aria-hidden="true" />}
          {title}
        </h2>
        <div className="mt-4 h-0.5 w-12 bg-accent" aria-hidden="true" />
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
