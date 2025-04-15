// src/components/content/SectionTitle.jsx
import { IconWrapper } from '../Common/IconWrapper';

export const SectionTitle = ({ icon, title, className = '' }) => (
    <h3 className={`text-3xl font-bold mb-8 flex items-center gap-2 ${className}`}>
      <IconWrapper icon={icon} size="large" />
      {title}
    </h3>
  );