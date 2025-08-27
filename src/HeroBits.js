import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Star } from "lucide-react";

// Sparkly title with shimmer + star flicker
export function SparklyTitle({ title, subtitle }) {
  return (
    <div className="space-y-3 select-none relative">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative inline-block text-5xl md:text-7xl font-extrabold tracking-tight"
      >
        <Shimmer>{title}</Shimmer>
        <FlickerStars />
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg text-blue-500"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// --- Shimmer effect ---
function Shimmer({ children }) {
  return (
    <span className="relative inline-block">
      <span
        className="bg-[linear-gradient(110deg,#2563eb,45%,#9333ea,55%,#ec4899)] 
                   bg-[length:200%_100%] bg-clip-text text-transparent 
                   transition-[background-position,filter] duration-700 ease-out 
                   hover:bg-[position:100%_0] 
                   hover:drop-shadow-[0_0_20px_rgba(147,51,234,0.35)]"
      >
        {children}
      </span>
    </span>
  );
}

// --- Flickering stars ---
function FlickerStars() {
  return (
    <div aria-hidden className="absolute -inset-8 pointer-events-none">
      <StarSprite className="left-[8%] top-0 scale-75" delay={0} />
      <StarSprite className="right-[12%] top-3" delay={0.7} />
      <StarSprite className="left-[18%] bottom-2" delay={1.4} />
      <StarSprite className="right-[2%] -bottom-1 scale-90" delay={2.1} />
    </div>
  );
}

function StarSprite({ className = "", delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.15, 0.75, 0.15] }}
      transition={{ duration: 2.2, delay, repe
