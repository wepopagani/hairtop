import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const galleryImages = Array.from({ length: 24 }, (_, i) => ({
  src: `/galleria/${i + 1}.webp`,
  alt: `Immagine ${i + 1}`
}));

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[rgb(25,24,25)] bg-opacity-80 z-50 overflow-y-auto"
        onClick={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <div className="fixed top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition"
            >
              <X size={32} />
            </button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="inline-block w-full max-w-7xl p-6 my-8 text-left align-middle"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-8 text-white text-center">La Nostra Galleria</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-square overflow-hidden rounded-lg"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}; 