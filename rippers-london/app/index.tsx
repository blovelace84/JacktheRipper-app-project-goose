import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { router } from "expo-router";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/screens/HomeScreen");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Image
        source={require("../assets/logo.png")}
        className="w-36 h-36 mb-5"
      />
      <Text className="text-white text-2xl font-semibold">
        Jack the Ripper Archive
      </Text>
    </View>
  );
}
