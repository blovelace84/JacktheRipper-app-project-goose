// src/screens/TimelineScreen.tsx
import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import EventCard from "../components/timeline/EventCard";
import { events } from "../data/events.json";

const TimelineScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.timelineContainer}>
        {events.map((event, index) => (
          <View key={event.id} style={styles.timelineItem}>
            {/* Connector line (except the last one) */}
            {index !== 0 && <View style={styles.connector} />}
            <EventCard
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              image={event.image}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TimelineScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  timelineContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    position: "relative",
  },
  timelineItem: {
    marginBottom: 32,
    position: "relative",
  },
  connector: {
    position: "absolute",
    top: -16,
    left: "50%",
    width: 2,
    height: 32,
    backgroundColor: "#b32d2e",
    transform: [{ translateX: -1 }],
    zIndex: -1,
  },
});
