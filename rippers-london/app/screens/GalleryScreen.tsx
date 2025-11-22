import React from "react";
import { Text } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";

export default function GalleryScreen() {
  return (
    <ScreenWrapper title="Gallery">
      <Text className="text-white text-lg">
        Historical, archives, newspapers, maps, artifacts!
      </Text>
    </ScreenWrapper>
  );
}
