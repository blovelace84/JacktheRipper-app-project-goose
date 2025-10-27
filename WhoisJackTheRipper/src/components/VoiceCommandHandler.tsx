import { Button } from "react-native";

interface Props {
  onCommand: (response: string, updatedInventory?: any[]) => void;
}

export default function VoiceCommandHandler({ onCommand }: Props) {
  return (
    <Button
      title="🎤 Talk"
      onPress={() => {
        const fakeCommand = "examine knife"; // placeholder for now
        onCommand(`You said: ${fakeCommand}`);
      }}
    />
  );
}
