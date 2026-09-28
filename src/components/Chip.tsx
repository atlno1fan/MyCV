interface ChipProps {
  label: string;
  tone?: 'default' | 'core' | 'muted';
}

const tones = {
  default: 'border-line text-ink-2',
  core: 'border-accent/50 bg-accent/5 text-ink',
  muted: 'border-line text-muted',
} as const;

export function Chip({ label, tone = 'default' }: ChipProps) {
  return <li className={`inline-block rounded border px-2 py-0.5 text-sm ${tones[tone]}`}>{label}</li>;
}
