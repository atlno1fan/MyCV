import { motion, AnimatePresence } from 'framer-motion';
import { BaseCard } from './BaseCard';
import { useState, useRef, useEffect } from 'react';
import { FolderGit2, X } from 'lucide-react';
import { Tag } from '../Common/Tag'

export const ProjectCard = ({ project }) => {
  const [expandedImage, setExpandedImage] = useState(null);
  const descriptionRef = useRef(null);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if content needs expansion button on mount and resize
  useEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current) {
        const isOverflowing = descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
        setNeedsExpansion(isOverflowing);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [project.description]);

  return (
    <BaseCard
      title={project.title}
    >
      <div className="space-y-4">
        {/* Technologies tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Tag key={index} name={tech} />
          ))}
        </div>

        {/* Project description */}
        <div className="space-y-4">
          <motion.div
            ref={descriptionRef}
            initial={{ height: 80 }}
            animate={{ height: isExpanded ? 'auto' : 80 }}
            className={`relative ${!isExpanded && needsExpansion ? 'overflow-hidden' : ''}`}
          >
            <p className="text-zinc-300">{project.description}</p>
            {project.results && (
              <div className="mt-2">
                <h5 className="text-violet-400 font-semibold">Results:</h5>
                <p className="text-zinc-300">{project.results}</p>
              </div>
            )}
          </motion.div>

          {/* Only show the button if content needs expansion */}
          {needsExpansion && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-violet-400 hover:text-violet-300 text-sm w-fit"
            >
              Show {isExpanded ? 'less' : 'more'}
            </button>
          )}
        </div>

        {/* Project link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 w-fit"
        >
          <FolderGit2 size={16} />
          View Project
        </a>

        {/* Image gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {project.media.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer relative aspect-video"
              onClick={() => setExpandedImage(item)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={`${project.title} preview ${index + 1}`}
                  className="rounded-lg object-cover w-full h-full"
                />
              ) : (
                <video
                  src={item.url}
                  className="rounded-lg object-cover w-full h-full"
                  controls
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Expanded image modal */}
        <AnimatePresence>
          {expandedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setExpandedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {expandedImage.type === 'image' ? (
                  <img
                    src={expandedImage.url}
                    alt="Expanded view"
                    className="rounded-lg max-h-[90vh] object-contain"
                  />
                ) : (
                  <video
                    src={expandedImage.url}
                    className="rounded-lg max-h-[90vh]"
                    controls
                    autoPlay
                  />
                )}
                <button
                  onClick={() => setExpandedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BaseCard>
  );
};