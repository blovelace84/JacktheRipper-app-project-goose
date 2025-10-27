import { View, Text } from "react-native";
import { Clue } from "./types";

interface Props {
  items: Clue[];
}

export default function Inventory({ items }: Props) {
  return (
    <View style={{ marginVertical: 8 }}>
      {items.length === 0 ? (
        <Text>Your inventory is empty.</Text>
      ) : (
        <>
          <Text style={{ fontWeight: "bold" }}>Inventory:</Text>
          {items.map((item) => (
            <Text key={item.id}>- {item.name}</Text>
          ))}
        </>
      )}
    </View>
  );
}
