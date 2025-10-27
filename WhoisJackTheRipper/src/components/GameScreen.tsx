import { useState } from "react";
import VoiceCommandHandler from "./VoiceCommandHandler";
import LocationView from "./LocationView";
import Inventory from "./Inventory";
import { Clue, Location } from "./types";

export default function GameScreen() {
  const [message, setMessage] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<Location>({
    id: "whitechapel-alley",
    name: "Whitechapel Alley",
    description: "A foggy alley with a shadowy figure in the distance.",
    clues: [
      {
        id: "bloody-knife",
        name: "Bloody Knife",
        description: "a knife with fresh blood on it.",
      },
      {
        id: "mysterious-letter",
        name: "Mysterious Letter",
        description: "A letter writen in code.",
      },
    ],
  });

  const [inventory, setInventory] = useState<Clue[]>([]);

  const handleCommandResult = (response: string, updatedInventory?: Clue[]) => {
    setMessage(response);
    if (updatedInventory) setInventory(updatedInventory);
  };

  return (
    <div>
      <h1>Jack the Ripper: Investigation</h1>
      <LocationView location={currentLocation} />
      <p>{message}</p>
      <VoiceCommandHandler onCommand={handleCommandResult} />
    </div>
  );
}
