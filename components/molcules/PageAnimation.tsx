import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, type: 'spring' }
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.15 }
  }
};

export default function PageAnimation({ children, isExitAnimation = true }: { children: ReactNode; isExitAnimation?: boolean; }) {
  return (
    <motion.div

      variants={variants}
      initial='initial'
      animate='animate'
      exit={isExitAnimation ? 'exit' : undefined}
    >
      {children}
    </motion.div>
  );
}