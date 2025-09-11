import React from "react";
import LaunchCountdown from "./components/LaunchCountdown";

export default function QlearScape() {
  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero-title">QlearScape</h1>
        <p className="subhead">Built for Agents, powered by intelligence</p>

        {/* Single source of truth for the launch date */}
        <div className="countdown-wrap">
          <LaunchCountdown />
        </div>

        <p className="pitch">
          Clean property intake, faster quoting, and a dashboard that kills
          microsearch fatigue. Agents focus on decisions, not digging. QlearScape
          standardizes lead data, flags duplicates, and surfaces what matters.
        </p>

        <a className="cta" href="#notify">Get Early Access</a>
      </section>
    </main>
  );
}

