import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import TimelineScreen from "../screens/TimelineScreen";
import EventDetailScreen from "../screens/EventDetailScreen";
import MapScreen from "../screens/MapScreen";
import QuizScreen from "../screens/QuizScreen";
import SplashScreen from "../screens/SplashScreen";
import AboutScreen from "../screens/AboutScreen";
import { createStackNavigator } from "react-navigation";

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Timeline: undefined;
  EventDetail: { eventId: string };
  Map: undefined;
  Quiz: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Timeline" component={TimelineScreen} />
        <Stack.Screen name="EventDetail" component={EventDetailScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
