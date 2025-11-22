import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { router } from "expo-router";

interface Props {
  title: string;
  to: any;
}

export default function HomeButton({ title, to }: Props) {
  return (
    <TouchableOpacity
      className="bg-neutral-900 border border-neutral-700 p-5 rounded-xl mb-4"
      onPress={() => router.push(to)}
    >
      <Text className="text-white text-lg font-medium">{title}</Text>
    </TouchableOpacity>
  );
}
