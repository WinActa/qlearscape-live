import React, { useEffect, useMemo, useState } from "react";

// Target: Nov 10, 2025 (adjust offset if you want a specific timezone)
const TARGET_ISO = "2025-11-10T00:00:00-08:00"; // PST

export default function LaunchCountdown() {
  const target = useMemo(() => new Date(TARGET_ISO), []);
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    const tick = () => setDelta(Math.max(0, target - new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const sec = Math.floor((delta / 1000) % 60);
  const min = Math.floor((delta / (1000 * 60)) % 60);
  const hr  = Math.floor((delta / (1000 * 60 * 60)) % 24);
  const day = Math.floor(delta / (1000 * 60 * 60 * 24));

  const pad = (n) => String(n).padStart(2, "0");

  const label = useMemo(() => {
    const m = String(target.getMonth() + 1).padStart(2, "0");
    const d = String(target.getDate()).padStart(2, "0");
    return `${m}.${d}`; // e.g., "11.10"
  }, [target]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", margin: "16px 0" }}>
      <div style={{ fontSize: 14, opacity: 0.7 }}>⏳ Countdown to {label}.2025</div>
      <div style={{ fontSize: 28, fontWeight: 600 }}>
        {pad(day)}d : {pad(hr)}h : {pad(min)}m : {pad(sec)}s
      </div>
    </div>
  );
}
