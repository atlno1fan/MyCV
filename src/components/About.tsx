interface AboutProps {
  lead: string;
  points: readonly string[];
}

export function About({ lead, points }: AboutProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-serif text-2xl leading-snug text-ink md:text-[1.75rem]">{lead}</p>
      <ul className="mt-10 list-disc space-y-3.5 pl-6 text-[17px] leading-[1.75] text-ink-2">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
