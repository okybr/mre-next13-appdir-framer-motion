"use client";

import { PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  animate: { x: "0vw", y: 100 },
  exit: { x: "100vw", y: -100 },
  hidden: { x: "-100vw", y: 0 },
};

export default function Client({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          animate="animate"
          exit="exit"
          initial="hidden"
          key={pathname}
          transition={{ type: "linear" }}
          variants={variants}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
