import { motion } from 'framer-motion';
import { BaseCard } from './BaseCard';


export const EducationCard = ({ education }) => (
    <BaseCard
      title={education.institution}
      subtitle={education.degree}
      periods={education.periods}
    >
      <motion.p 
        className="text-zinc-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        GPA: {education.gpa}
      </motion.p>
      <motion.p 
        className="text-zinc-300 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Thesis: {education.thesis}
      </motion.p>
    </BaseCard>
  );