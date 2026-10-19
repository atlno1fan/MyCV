import type { Config } from 'tailwindcss';

// Colours are CSS variables (see src/index.css) so the same classes render the light and
// dark palettes; `<alpha-value>` lets Tailwind's opacity modifiers keep working.
const token = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: token('surface'),
        'surface-2': token('surface-2'),
        ink: token('ink'),
        'ink-2': token('ink-2'),
        muted: token('muted'),
        line: token('line'),
        accent: token('accent'),
        'accent-strong': token('accent-strong'),
        'accent-ink': token('accent-ink'),
      },
      fontFamily: {
        sans: ['"Source Sans 3 Variable"', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4 Variable"', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
