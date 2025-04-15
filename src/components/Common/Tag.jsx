import { motion } from 'framer-motion';

export const Tag = ({ name }) => (
  <motion.span
    className="px-3 py-1 bg-zinc-700 rounded-full text-sm"
    whileHover={{ scale: 1.05, backgroundColor: '#4B5563' }}
    transition={{ duration: 0.2 }}
  >
    {name}
  </motion.span>
);