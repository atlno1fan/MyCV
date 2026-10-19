interface ChipProps {
  label: string;
  tone?: 'default' | 'core' | 'muted';
}

const tones = {
  default: 'border-line text-ink-2',
  core: 'border-accent/40 bg-accent/10 text-ink',
  muted: 'border-line text-muted',
} as const;

export function Chip({ label, tone = 'default' }: ChipProps) {
  return (
    <li className={`inline-block rounded-md border px-3 py-1.5 text-sm leading-snug ${tones[tone]}`}>
      {label}
    </li>
  );
}
