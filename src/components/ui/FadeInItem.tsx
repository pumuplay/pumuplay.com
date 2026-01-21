import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInItemProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string; // Allow passing customized classes to the li
}

export default function FadeInItem({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className
}: FadeInItemProps) {
  
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.li>
  );
}
