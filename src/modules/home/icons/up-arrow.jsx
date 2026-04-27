"use client";
import { motion } from "framer-motion";

export const UpArrow = ({ className = "", ...props }) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <motion.svg
      {...props}
      viewBox="0 0 24 24"
      className={`w-5 h-5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </motion.svg>
  );
};
