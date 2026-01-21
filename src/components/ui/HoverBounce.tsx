import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface HoverBounceProps {
  children: ReactNode;
  className?: string; // Allow custom classes
}

export default function HoverBounce({ children, className = "" }: HoverBounceProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotate: 3,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 10 
        } 
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
