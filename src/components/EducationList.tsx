import { Award } from 'lucide-react';
import type { Certification, Education } from '../types';

interface EducationListProps {
  education: readonly Education[];
  certifications: readonly Certification[];
}

export function EducationList({ education, certifications }: EducationListProps) {
  return (
    <div className="divide-y divide-line">
      {education.map((entry) => (
        <article key={entry.institution} className="py-10 first:pt-0">
          <div className="grid gap-1 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-8">
            <div>
              <h3 className="text-xl font-semibold text-ink">{entry.degree}</h3>
              <p className="mt-1 text-ink-2">{entry.institution}</p>
            </div>
            <p className="text-sm text-muted md:text-right">{entry.period}</p>
          </div>
          <dl className="mt-4 space-y-1.5 text-[17px] text-ink-2">
            <div className="flex gap-2">
              <dt className="shrink-0 text-muted">GPA</dt>
              <dd>{entry.gpa}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="shrink-0 text-muted">Thesis</dt>
              <dd>{entry.thesis}</dd>
            </div>
          </dl>
          {entry.note && <p className="mt-3 text-sm text-muted">{entry.note}</p>}
        </article>
      ))}
      {certifications.length > 0 && (
        <div className="py-10 last:pb-0">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-ink">
            <Award className="h-5 w-5 text-accent" aria-hidden="true" />
            Certifications
          </h3>
          <ul className="mt-5 list-disc space-y-2.5 pl-6 text-[17px] leading-[1.65] text-ink-2">
            {certifications.map((certification) => (
              <li key={certification.name}>
                {certification.name}
                <span className="text-muted">
                  , {certification.issuer}, {certification.dates}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
