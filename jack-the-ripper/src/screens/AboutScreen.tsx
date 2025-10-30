// src/screens/AboutScreen.tsx
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type AboutScreenNavProp = StackNavigationProp<RootStackParamList, "About">;

interface Props {
  navigation: AboutScreenNavProp;
}

export default function AboutScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.header}>About the App</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.accent}>Ripper’s London</Text> is an immersive
        historical exploration app that guides users through the dark and
        mysterious world of the Jack the Ripper murders of 1888.
      </Text>

      <Text style={styles.paragraph}>
        Using maps, timelines, and archival information, users can explore the
        events, learn about the victims, and uncover theories that continue to
        intrigue historians and enthusiasts today.
      </Text>

      <Text style={styles.subHeader}>⚙️ Built With</Text>
      <Text style={styles.paragraph}>• React Native (TypeScript)</Text>
      <Text style={styles.paragraph}>
        • Goose (for event and media data management)
      </Text>
      <Text style={styles.paragraph}>• React Navigation</Text>
      <Text style={styles.paragraph}>• React Native Maps</Text>

      <Text style={styles.subHeader}>📚 Historical Sources</Text>
      <Text style={styles.paragraph}>
        The content in this app is inspired by publicly available historical
        archives and educational research about the Jack the Ripper case.
      </Text>

      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => Linking.openURL("https://block.github.io/goose/")}
      >
        <Text style={styles.link}>Learn more about Goose →</Text>
      </TouchableOpacity>

      <Text style={styles.subHeader}>👩‍💻 Developer</Text>
      <Text style={styles.paragraph}>
        Designed and developed by{" "}
        <Text style={styles.accent}>Brittani Lovelace</Text>.
      </Text>

      <Text style={styles.footer}>
        © {new Date().getFullYear()} Ripper’s London. All rights reserved.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f1a",
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    color: "#9aa4c0",
    fontSize: 16,
  },
  header: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },
  subHeader: {
    color: "#e63946",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 24,
    marginBottom: 8,
  },
  paragraph: {
    color: "#c7d0e6",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  accent: {
    color: "#fff",
    fontWeight: "700",
  },
  linkContainer: {
    marginTop: 12,
    marginBottom: 20,
  },
  link: {
    color: "#4da6ff",
    fontSize: 16,
  },
  footer: {
    color: "#6b768e",
    fontSize: 14,
    textAlign: "center",
    marginTop: 40,
  },
});
