import React, { ReactNode } from "react";
import { View, Text } from "react-native";

interface Props {
  title: string;
  children: ReactNode;
}

export default function ScreenWrapper({ title, children }: Props) {
  return (
    <View className="flex-1 bg-black p-5">
      <Text className="text-white text-3xl mb-6 font-semibold">{title}</Text>
      {children}
    </View>
  );
}
