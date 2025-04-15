import { motion } from 'framer-motion';
import { FadeIn } from '../Animation/FadeIn';

export const BaseCard = ({ 
  title, 
  subtitle, 
  periods, 
  children, 
  className = '',
  fadeInDelay = 0 
}) => (
  <FadeIn delay={fadeInDelay}>
    <motion.div
      className={`bg-zinc-800 p-6 rounded-lg ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {(title || subtitle || periods) && (
        <div className="flex justify-between items-start mb-4">
          <div>
            {title && <h4 className="text-xl font-semibold">{title}</h4>}
            {subtitle && <p className="text-violet-400">{subtitle}</p>}
          </div>
          <span className="text-zinc-400">
           <ul className="list-none list-inside text-grey-300 space-y-2 text-sm text-right">
             {periods ? periods.map((period, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {period}
              </motion.li>
            )) : null}
          </ul>
        </span>
        </div>
      )}
      {children}
    </motion.div>
  </FadeIn>
);