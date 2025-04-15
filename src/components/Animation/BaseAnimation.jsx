import { motion } from 'framer-motion';

export const BaseAnimation = ({ 
  children, 
  initial = { opacity: 0 }, 
  animate = { opacity: 1 }, 
  exit = { opacity: 0 },
  transition = { duration: 0.3 },
  className = '',
  ...props 
}) => (
  <motion.div
    initial={initial}
    animate={animate}
    exit={exit}
    transition={transition}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);