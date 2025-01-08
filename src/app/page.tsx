"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import image1 from "../images/mountains-9266137_1280.jpg";
import image2 from "../images/trees-6855857_1280.jpg";
import image3 from "../images/trees-8482254_1280.jpg";
import image4 from "../images/wind-power-generation-8370867_1280.jpg";

export default function ImageHoverGallery()  {
  const images = [
    { id: 1, src: image1, text: 'Image 1 Header' },
    { id: 2, src: image2, text: 'Image 2 Header' },
    { id: 3, src: image3, text: 'Image 3 Header' },
    { id: 4, src: image4, text: 'Image 4 Header' },
  ];

  return (
    <div className="flex w-full h-80 max-w-4xl mx-auto overflow-hidden">
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="relative flex-1 h-full cursor-pointer"
          whileHover={{ flex: 2 }}
          initial={{ flex: 1 }}
          animate={{ flex: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Image
            src={image.src}
            alt={`Image ${image.id}`}
            layout="fill"
            objectFit="cover"
            priority
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {image.text}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

