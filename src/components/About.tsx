interface AboutProps {
  lead: string;
  paragraphs: readonly string[];
}

export function About({ lead, paragraphs }: AboutProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-serif text-2xl leading-snug text-ink">{lead}</p>
      <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink-2">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
