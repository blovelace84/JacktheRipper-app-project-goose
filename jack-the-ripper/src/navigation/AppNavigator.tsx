import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import TimelineScreen from "../screens/TimelineScreen";
import EventDetailScreen from "../screens/EventDetailScreen";
import MapScreen from "../screens/MapScreen";
import QuizScreen from "../screens/QuizScreen";
import AboutScreen from "../screens/AboutScreen";

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Timeline: undefined;
  EventDetail: { eventId: string };
  Map: undefined;
  Quiz: undefined;
  About: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
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
