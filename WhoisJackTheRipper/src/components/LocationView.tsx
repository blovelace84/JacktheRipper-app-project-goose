import { View, Text } from "react-native";
import { Location } from "./types";

interface Props {
  location: Location;
}

export default function LocationView({ location }: Props) {
  return (
    <View style={{ marginVertical: 8 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{location.name}</Text>
      <Text>{location.description}</Text>

      {location.clues.length > 0 && (
        <View style={{ marginTop: 8 }}>
          <Text style={{ fontWeight: "bold" }}>Clues here:</Text>
          {location.clues.map((clue) => (
            <Text key={clue.id}>- {clue.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
}
