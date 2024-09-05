"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react"; 

const PageTransition = ({ children } : {children: ReactNode}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut" }, }}
          exit={{ opacity: 1 }} // This ensures the exit animation reverses the entry animation
          className="h-screen w-screen fixed bg-white top-0 pointer-events-none"/>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
