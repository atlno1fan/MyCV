import type { SkillGroup } from '../types';
import { Chip } from './Chip';

interface SkillGroupsProps {
  groups: readonly SkillGroup[];
}

/** One row per area, with two tiers: used in production in the past year, and also worked with. */
export function SkillGroups({ groups }: SkillGroupsProps) {
  return (
    <div>
      <p className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-sm border border-accent/40 bg-accent/10"
            aria-hidden="true"
          />
          Used in production in the past year
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm border border-line" aria-hidden="true" />
          Also worked with
        </span>
      </p>
      <div className="divide-y divide-line border-y border-line">
        {groups.map((group) => (
          <div
            key={group.name}
            className="grid items-start gap-4 py-8 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-10"
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
              <group.icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              {group.name}
            </h3>
            {/* items-start and content-start keep every chip at its natural height, whatever the label's height. */}
            <ul className="flex flex-wrap content-start items-start gap-2.5" aria-label={group.name}>
              {group.core.map((skill) => (
                <Chip key={skill} label={skill} tone="core" />
              ))}
              {group.more.map((skill) => (
                <Chip key={skill} label={skill} tone="muted" />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
