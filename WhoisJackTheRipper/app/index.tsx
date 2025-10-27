import React from "react";
import { registerRootComponent } from "expo";
import GameScreen from "../src/components/GameScreen";

export default function App() {
  return <GameScreen />;
}

// Register the root component for Expo
registerRootComponent(App);
