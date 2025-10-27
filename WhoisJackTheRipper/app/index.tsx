import React from "react";
import ReactDOM from "react-dom/client";
import GameScreen from "../src/components/GameScreen"; // Adjust path if needed
// import "./index.css"; // Optional: global styles

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GameScreen />
  </React.StrictMode>
);
