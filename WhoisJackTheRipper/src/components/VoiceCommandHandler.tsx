import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { getGooseResponse } from "../services/gooseClient";

// ✅ Define Props type here
interface Props {
  onCommand: (response: string, updatedInventory?: any[]) => void;
}

export default function VoiceCommandHandler({ onCommand }: Props) {
  const handleVoice = async () => {
    const fakeCommand = "examine bloody knife";
    const response = await getGooseResponse(fakeCommand);
    onCommand(response);
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#222",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
      }}
      onPress={handleVoice}
    >
      <Text style={{ color: "white", fontSize: 18 }}>🎤 Talk</Text>
    </TouchableOpacity>
  );
}
