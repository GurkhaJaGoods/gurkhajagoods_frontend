// components/PageTransition.tsx
import { motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  transition?: Transition;
}

export const PageTransition = ({
  children,
  transition = { duration: 0.5 },
}: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}>
      {children}
    </motion.div>
  );
};
