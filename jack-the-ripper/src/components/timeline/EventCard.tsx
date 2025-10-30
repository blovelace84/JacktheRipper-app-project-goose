import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type EventCardProps = {
  title: string;
  date: string;
  location?: string;
  description: string;
  image?: any;
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  description,
  image,
}) => {
  return (
    <View style={StyleSheet.card}>
      {image && <Image source={image} style={StyleSheet.image} />}
      <View style={StyleSheet.textContainer}>
        <Text style={StyleSheet.title}>{title}</Text>
        <Text style={StyleSheet.date}>{date}</Text>
        {location && <Text style={StyleSheet.location}>{location}</Text>}
        <Text style={StyleSheet.description}>{description}</Text>
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1b1b1b",
    borderRadius: 12,
    marginVertical: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 180,
  },
  textContainer: {
    padding: 12,
  },
  date: {
    color: "#b32d2e",
    fontSize: 14,
    fontWeight: "600",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 4,
  },
  location: {
    color: "#aaa",
    fontSize: 13,
    marginBottom: 4,
  },
  description: {
    color: "#dcdcdc",
    fontSize: 14,
    lineHeight: 20,
  },
});
