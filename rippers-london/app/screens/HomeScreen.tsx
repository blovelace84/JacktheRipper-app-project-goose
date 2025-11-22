import React from "react";
import { View } from "react-native";
import HomeButton from "../components/HomeButton";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-black p-5 justify-center">
      <HomeButton title="Gallery" to="/screens/GalleryScreen" />
      <HomeButton title="Map" to="/screens/MapScreen" />
      <HomeButton title="Quiz" to="/screens/QuizScreen" />
    </View>
  );
}
