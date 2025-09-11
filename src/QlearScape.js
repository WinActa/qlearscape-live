import React from "react";
import LaunchCountdown from "./components/LaunchCountdown";

export default function QlearScape() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "24px" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>
        QlearScape – Built for Agents, powered by intelligence
      </h1>

      {/* Single source of truth for the launch date */}
      <LaunchCountdown />

      <p style={{ fontSize: 16, marginTop: 12, maxWidth: 780, lineHeight: 1.5 }}>
        Clean property intake, faster quoting, and a dashboard that kills microsearch fatigue.
        Agents focus on decisions, not digging. QlearScape standardizes lead data, flags duplicates,
        and surfaces what matters.
      </p>
    </main>
  );
}
