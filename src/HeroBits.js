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
      transition={{ duration: 2.2, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute text-blue-400/80 ${className}`}
    >
      <Star size={16} />
    </motion.span>
  );
}

// --- Countdown ---
export function LaunchCountdown({ targetISO }) {
  const target = useMemo(() => new Date(targetISO), [targetISO]);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const { days, hours, minutes, seconds, finished } = useCountdown(now, target);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.6 }}
      className="mx-auto w-full max-w-2xl mt-6"
    >
      <div className="grid grid-cols-4 gap-3 md:gap-4">
        <TimeCard label="Days" value={days} />
        <TimeCard label="Hours" value={hours} />
        <TimeCard label="Minutes" value={minutes} />
        <TimeCard label="Seconds" value={seconds} />
      </div>

      <div className="mt-5 inline-flex items-center gap-2 text-blue-600/80">
        <CalendarDays className="size-4" />
        <span className="text-sm">Beta launch target: Oct 1, 2025</span>
      </div>

      {finished && (
        <div className="mt-4 text-center text-emerald-500/90 text-sm">
          It’s launch day. Let’s ship something real.
        </div>
      )}
    </motion.div>
  );
}

function TimeCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-whi
