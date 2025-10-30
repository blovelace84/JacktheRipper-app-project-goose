// src/screens/MapScreen.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import events from "../data/events.json";
import { Event } from "../types/event";

type MapScreenNavProp = StackNavigationProp<RootStackParamList, "Map">;

interface Props {
  navigation: MapScreenNavProp;
}

export default function MapScreen({ navigation }: Props) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 51.517,
          longitude: -0.073,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        customMapStyle={darkMapStyle}
      >
        {events.map((event) => (
          <Marker
            key={event.id}
            coordinate={{
              latitude: event.location.lat,
              longitude: event.location.lng,
            }}
            title={event.title}
            description={event.date}
            onPress={() => setSelectedEvent(event)}
          >
            <Callout
              tooltip
              onPress={() =>
                navigation.navigate("EventDetail", { eventId: event.id })
              }
            >
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{event.title}</Text>
                <Text style={styles.calloutDate}>{event.date}</Text>
                <TouchableOpacity
                  style={styles.calloutButton}
                  onPress={() =>
                    navigation.navigate("EventDetail", { eventId: event.id })
                  }
                >
                  <Text style={styles.calloutButtonText}>View Details →</Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.overlay}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Ripper's London Map</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f1a",
  },
  map: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 40,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2,
  },
  backButton: {
    color: "#9aa4c0",
    fontSize: 16,
  },
  header: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  callout: {
    backgroundColor: "#111428",
    borderRadius: 10,
    padding: 12,
    width: 200,
    borderColor: "#2a314a",
    borderWidth: 1,
  },
  calloutTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  calloutDate: {
    color: "#9aa4c0",
    fontSize: 12,
    marginVertical: 4,
  },
  calloutButton: {
    marginTop: 6,
    paddingVertical: 6,
    alignItems: "center",
    backgroundColor: "#e63946",
    borderRadius: 6,
  },
  calloutButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#1a1a2e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#c7d0e6" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a2e" }] },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#2a314a" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0b0f1a" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
];
