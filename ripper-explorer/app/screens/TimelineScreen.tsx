import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { events } from "../data/event";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../app";

type Props = NativeStackScreenProps<RootStackParamList, "Timeline">;

export default function TimelineScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timeline</Text>

      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.eventItem}
            onPress={() => navigation.navigate("Detail", { item })}
          >
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  eventItem: {
    padding: 16,
    backgroundColor: "#7f1d1d",
    marginBottom: 12,
    borderRadius: 8,
  },
  eventTitle: {
    color: "white",
    fontSize: 20,
  },
  eventDate: {
    color: "#d1d5db",
  },
});
