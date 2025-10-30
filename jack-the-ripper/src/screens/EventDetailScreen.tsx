// src/screens/EventDetailScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import events from "../data/events.json";
import { Event } from "../types/event";

type EventDetailRouteProp = RouteProp<RootStackParamList, "EventDetail">;
type EventDetailNavProp = StackNavigationProp<
  RootStackParamList,
  "EventDetail"
>;

interface Props {
  route: EventDetailRouteProp;
  navigation: EventDetailNavProp;
}

export default function EventDetailScreen({ route, navigation }: Props) {
  const { eventId } = route.params;
  const event: Event | undefined = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Event not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date}</Text>

      <Text style={styles.description}>{event.description}</Text>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: event.location.lat,
            longitude: event.location.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          scrollEnabled={false}
          zoomEnabled={false}
        >
          <Marker
            coordinate={{
              latitude: event.location.lat,
              longitude: event.location.lng,
            }}
            title={event.title}
          />
        </MapView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f1a",
    padding: 16,
  },
  backButton: {
    marginBottom: 12,
  },
  backText: {
    color: "#9aa4c0",
    fontSize: 16,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 6,
  },
  date: {
    color: "#e63946",
    fontSize: 14,
    marginBottom: 16,
  },
  description: {
    color: "#c7d0e6",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  mapContainer: {
    borderRadius: 12,
    overflow: "hidden",
    height: 200,
    borderWidth: 1,
    borderColor: "#2a314a",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  error: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
  },
});
