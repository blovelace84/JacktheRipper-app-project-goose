import React, { useEffect, useRef } from "react";
import { View, Text, Animated, Image, Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../index";

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

const { width, height } = Dimensions.get("window");

export default function SplashScreen({ navigation }: Props) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity: 0

  useEffect(() => {
    // Fade in logo
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, // 2 seconds
      useNativeDriver: true,
    }).start();

    // Navigate to Home after 4 seconds
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 4000);

    return () => clearTimeout(timer);
  }, [fadeAnim]);

  return (
    <View className="flex-1 bg-black justify-center items-center">
      {/* Atmospheric background */}
      <Image
        source={require("../../assets/images/jack-the-ripper.jpg")}
        style={{ position: "absolute", width, height }}
        resizeMode="cover"
      />

      {/* Fade-in Logo */}
      <Animated.Image
        source={require("../../assets/images/jack-the-ripper.jpg")}
        style={{
          width: 200,
          height: 200,
          opacity: fadeAnim,
        }}
        resizeMode="contain"
      />

      <Animated.Text
        style={{
          color: "white",
          fontSize: 28,
          marginTop: 20,
          opacity: fadeAnim,
        }}
      >
        Ripper's London
      </Animated.Text>
    </View>
  );
}
