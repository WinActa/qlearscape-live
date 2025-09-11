import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import QlearScape from "./QlearScape";
import LaunchCountdown from "./components/LaunchCountdown";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <LaunchCountdown />
      <QlearScape />
    </div>
  </React.StrictMode>
);
