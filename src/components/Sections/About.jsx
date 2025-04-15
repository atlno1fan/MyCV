import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
export const AboutSection = ({ data }) => {
    const {
      shortIntro,
      detailedIntro,
      aboutTitle = "About Me" // Default value if not provided
    } = data || {};
  
    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    };
  
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-8 pb-16 relative"
      >
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top right circle */}
          <motion.div
            className="absolute -top-20 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {/* Bottom left shape */}
          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 bg-violet-400/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
  
        <div className="max-w-4xl mx-auto relative">
          {/* Main card with quote */}
          {shortIntro && (
            <motion.div
              variants={itemVariants}
              className="bg-zinc-800/50 backdrop-blur-lg rounded-2xl p-8 mb-12 relative border border-violet-400/10 shadow-lg"
            >
              {/* Quote icon */}
              <motion.div
                className="absolute -top-6 left-8 bg-violet-500 rounded-full p-4 shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Quote className="w-6 h-6 text-white" />
              </motion.div>
  
              <motion.div className="ml-4">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-600">
                  {aboutTitle}
                </h2>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  {shortIntro}
                </p>
              </motion.div>
            </motion.div>
          )}
  
          {/* Detailed introduction with timeline */}
          {detailedIntro && detailedIntro.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-violet-400/20"
            >
              {detailedIntro.map((paragraph, index) => (
                <motion.div
                  key={index}
                  className="mb-8 relative"
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute -left-[41px] top-0 w-5 h-5 bg-violet-400 rounded-full shadow-lg shadow-violet-400/20"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Content card */}
                  <motion.div
                    className="bg-zinc-800/30 backdrop-blur-sm rounded-lg p-6 border border-violet-400/10"
                    whileHover={{ translateX: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      {paragraph}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
  
          {/* Fallback message if no content is provided */}
          {(!shortIntro && (!detailedIntro || detailedIntro.length === 0)) && (
            <motion.div
              variants={itemVariants}
              className="text-center text-zinc-400 py-12"
            >
              <p>No information available</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };
