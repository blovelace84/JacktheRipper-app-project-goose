import "expo-router/entry";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import TimelineScreen from "./screens/TimelineScreen";
import MapScreen from "./screens/MapScreen";
import DetailScreen from "./screens/DetailScreen";
import { RipperEvent } from "./types/events";
import SplashScreen from "./screens/SplashScreen";
import GalleryScreen from "./screens/GalleryScreen";
import QuizScreen from "./screens/QuizScreen";

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Timeline: undefined;
  Map: undefined;
  Detail: { item: RipperEvent };
  Gallery: undefined;
  Quiz: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Timeline" component={TimelineScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
    </Stack.Navigator>
  );
}
