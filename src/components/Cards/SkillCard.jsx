import { BaseCard } from './BaseCard';
import { Tag } from "../Common/Tag"

export const SkillCard = ({ title, icon: Icon, skills }) => (
    <BaseCard>
      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Icon className="text-violet-400" />
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Tag key={skill.name} name={skill.name} />
        ))}
      </div>
    </BaseCard>
  );
