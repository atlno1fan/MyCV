// src/components/navigation/NavItem.jsx

import { motion } from 'framer-motion';

export const NavItem = ({ label, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`capitalize relative px-4 py-2 rounded-lg transition-colors ${
      isActive ? 'text-violet-400' : 'text-zinc-400 hover:text-violet-300'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
    {isActive && (
      <motion.div
        layoutId="activeSection"
        className="absolute inset-0 bg-violet-400/10 rounded-lg"
        initial={false}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
  </motion.button>
);