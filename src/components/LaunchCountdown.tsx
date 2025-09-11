// --- Countdown ---
import { useEffect, useMemo, useState } from "react";

type Props = {
  targetISO: string; // e.g. "2025-10-01T00:00:00-07:00"
  showLabel?: boolean; // shows "10.01" above the timer
};

export default function LaunchCountdown({ targetISO, showLabel = true }: Props) {
  const target = useMemo(() => new Date(targetISO), [targetISO]);

  const [delta, setDelta] = useState<number>(0);

  useEffect(() => {
    const tick = () => {
      const d = Math.max(0, +target - +new Date());
      setDelta(d);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const sec = Math.floor((delta / 1000) % 60);
  const min = Math.floor((delta / (1000 * 60)) % 60);
  const hr  = Math.floor((delta / (1000 * 60 * 60)) % 24);
  const day = Math.floor(delta / (1000 * 60 * 60 * 24));

  const pad = (n: number) => n.toString().padStart(2, "0");

  const label = useMemo(() => {
    const m = (target.getMonth() + 1).toString().padStart(2, "0");
    const d = target.getDate().toString().padStart(2, "0");
    return `${m}.${d}`;
  }, [target]);

  return (
    <div>
      {showLabel && <div>{label}</div>}
      <div>
        {pad(day)}d : {pad(hr)}h : {pad(min)}m : {pad(sec)}s
      </div>
    </div>
  );
}
