import React from "react";
import { Text } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";

export default function GalleryScreen() {
  return (
    <ScreenWrapper title="Quiz">
      <Text className="text-white text-lg">
        A Quiz about Jack the Ripper and Victorian London will go here.
      </Text>
    </ScreenWrapper>
  );
}
