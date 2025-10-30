// src/screens/TimelineScreen.tsx
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import events from "../data/events.json";
import { Event } from "../types/event";

type TimelineNavProp = StackNavigationProp<RootStackParamList, "Timeline">;

interface Props {
  navigation: TimelineNavProp;
}

export default function TimelineScreen({ navigation }: Props) {
  const renderItem = ({ item }: { item: Event }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("EventDetail", { eventId: item.id })}
    >
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text numberOfLines={2} style={styles.description}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Timeline of Events</Text>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f1a",
    padding: 16,
  },
  header: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "700",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#161b2e",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2a314a",
  },
  date: {
    color: "#9aa4c0",
    fontSize: 13,
    marginBottom: 4,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  description: {
    color: "#c7d0e6",
    fontSize: 14,
    marginTop: 6,
  },
});
