import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
}

export function Section({ id, title, icon: Icon, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-20 border-t border-line py-14 md:py-16">
      <h2 id={headingId} className="mb-8 flex items-center gap-3 font-serif text-3xl text-ink">
        {Icon && <Icon className="h-6 w-6 text-accent" aria-hidden="true" />}
        {title}
      </h2>
      {children}
    </section>
  );
}
