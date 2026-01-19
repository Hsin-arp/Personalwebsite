import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="text-gray-400">
          © {new Date().getFullYear()} Prabin Shrestha. All rights reserved.
        </p>
        <p className="text-gray-500 mt-2">
          Built with React & Tailwind CSS
        </p>
      </motion.div>
    </footer>
  );
}