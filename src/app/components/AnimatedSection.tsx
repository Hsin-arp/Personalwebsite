import React from "react";
import { motion, Variants } from "framer-motion";

type AnimatedSectionProps = React.ComponentPropsWithoutRef<"section"> & {
  stagger?: boolean;
};

export default function AnimatedSection({ children, className, stagger = false, ...rest }: AnimatedSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: stagger ? 0.12 : 0,
      },
    },
  };

  const simpleTransition = { duration: 0.55, ease: "easeOut" };

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      transition={simpleTransition}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
