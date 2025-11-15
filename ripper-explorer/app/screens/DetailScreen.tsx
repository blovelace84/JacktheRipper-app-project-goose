import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../index";
import { useState } from "react";
import { generateWithGoose } from "../utils/goose";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function DetailScreen({ route }: Props) {
  const { item } = route.params;
  const [aiText, setAiText] = useState("");

  const askAI = async () => {
    const res = await generateWithGoose(
      `Summarize this Jack the Ripper event historically: 
       ${item.title}, ${item.date}, ${item.location}.`
    );
    setAiText(res);
  };

  return (
    <View className="flex-1 bg-black p-4">
      <Text className="text-white text-3xl">{item.title}</Text>
      <Text className="text-red-600">{item.date}</Text>
      <Text className="text-gray-300 mt-4">{item.summary}</Text>

      <TouchableOpacity
        className="bg-red-800 px-4 py-3 rounded mt-6"
        onPress={askAI}
      >
        <Text className="text-white text-center">Generate AI Summary</Text>
      </TouchableOpacity>

      {aiText !== "" && (
        <Text className="text-gray-200 mt-4 border-t border-gray-600 pt-4">
          {aiText}
        </Text>
      )}
    </View>
  );
}
