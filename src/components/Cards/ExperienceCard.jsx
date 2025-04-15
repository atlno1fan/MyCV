import { motion } from 'framer-motion';
import { BaseCard } from './BaseCard';

export const ExperienceCard = ({ experience }) => (
  <BaseCard
    title={experience.title}
    subtitle={experience.company}
    periods={experience.periods}
  >
    <ul className="list-disc list-inside text-zinc-300 space-y-2">
      {experience.responsibilities.map((responsibility, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {responsibility}
        </motion.li>
      ))}
    </ul>
  </BaseCard>
);