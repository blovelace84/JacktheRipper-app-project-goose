import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "..";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View className="flex-1 bg-black">
      {/* Main scrollable content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="p-5">
          <Text className="text-white text-3xl font-bold mb-5">
            Ripper's London
          </Text>

          {/* Existing buttons */}
          <TouchableOpacity className="bg-red-600 p-4 mb-4 rounded-xl">
            <Text className="text-white text-lg text-center">Map Explorer</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-red-600 p-4 mb-4 rounded-xl">
            <Text className="text-white text-lg text-center">Victims</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-red-600 p-4 mb-4 rounded-xl">
            <Text className="text-white text-lg text-center">Suspects</Text>
          </TouchableOpacity>

          {/* NEW buttons */}
          <TouchableOpacity className="bg-red-600 p-4 mb-4 rounded-xl">
            <Text className="text-white text-lg text-center">Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-red-600 p-4 mb-4 rounded-xl">
            <Text className="text-white text-lg text-center">Quiz</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <View className="absolute bottom-0 left-0 right-0 bg-zinc-900 py-4 px-6 border-t border-zinc-700">
        <Text className="text-zinc-400 text-center">
          © {new Date().getFullYear()} Ripper Explorer
        </Text>
      </View>
    </View>
  );
}
