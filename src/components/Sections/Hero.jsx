// src/components/hero/Hero.jsx
import { motion } from 'framer-motion';

export const Hero = ({ title, subtitle, description, socialLinks, imageSrc }) => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background gradients */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-zinc-900 to-zinc-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Main content */}
      <div className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left column - Text content */}
          <motion.div 
            className="flex-1 space-y-8"
            variants={containerAnimation}
            initial="hidden"
            animate="show"
          >
            {/* Title group */}
            <motion.div variants={itemAnimation} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-violet-400">{title}</span>
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-zinc-100">
                {subtitle}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div 
              variants={itemAnimation}
              className="max-w-xl"
            >
              <p className="text-xl text-zinc-300 leading-relaxed">
                {description}
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div 
              variants={itemAnimation}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800/80 backdrop-blur-sm rounded-full hover:bg-zinc-700 transition-all group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6 text-violet-400 group-hover:text-violet-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div 
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Animated glow effect */}
              <motion.div 
                className="absolute -inset-4 bg-violet-400/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Profile image container */}
              <motion.div 
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-violet-400/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={imageSrc}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
