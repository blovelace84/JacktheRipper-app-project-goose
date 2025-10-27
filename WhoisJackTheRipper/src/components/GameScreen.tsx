import { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
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
        description: "A knife with fresh blood.",
      },
      {
        id: "mysterious-letter",
        name: "Mysterious Letter",
        description: "A letter written in code.",
      },
    ],
  });

  const [inventory, setInventory] = useState<Clue[]>([]);

  const handleCommandResult = (response: string, updatedInventory?: Clue[]) => {
    setMessage(response);
    if (updatedInventory) setInventory(updatedInventory);
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>
        Jack the Ripper: Investigation
      </Text>

      <LocationView location={currentLocation} />
      <Inventory items={inventory} />

      <Text style={{ marginVertical: 16 }}>{message}</Text>

      <VoiceCommandHandler onCommand={handleCommandResult} />
    </ScrollView>
  );
}
