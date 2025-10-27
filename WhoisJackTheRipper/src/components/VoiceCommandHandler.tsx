interface Props {
  onCommand: (response: string, updatedInventory?: any[]) => void;
}

export default function VoiceCommandHandler({ onCommand }: Props) {
  const handleClick = () => {
    const fakeCommand = prompt("Enter a command (simulate voice):");
    if (fakeCommand) onCommand(`You said: ${fakeCommand}`);
  };
  return <button onClick={handleClick}>Speak</button>;
}
