import React from "react";
import { Text } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";

export default function GalleryScreen() {
  return (
    <ScreenWrapper title="Historical Map">
      <Text className="text-white">
        A historical Map of Whitechapel London will go here.
      </Text>
    </ScreenWrapper>
  );
}
