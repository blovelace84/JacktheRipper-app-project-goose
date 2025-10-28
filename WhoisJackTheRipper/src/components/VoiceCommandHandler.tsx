import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from "react-native";
import Voice from "@react-native-voice/voice";
import * as Speech from "expo-speech";
import { getGooseResponse } from "../services/gooseClient";

interface Props {
  onCommand: (response: string) => void;
}

export default function VoiceCommandHandler({ onCommand }: Props) {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");

  useEffect(() => {
    Voice.onSpeechResults = (event) => {
      const text = event.value?.[0];
      if (text) {
        setRecognizedText(text);
        handleResponse(text);
      }
    };
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const handleResponse = async (spokenText: string) => {
    const response = await getGooseResponse(spokenText);
    onCommand(response);
    Speech.speak(response);
  };

  const startListening = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) return;
    }
    setIsListening(true);
    await Voice.start("en-US");
  };

  const stopListening = async () => {
    await Voice.stop();
    setIsListening(false);
  };

  return (
    <View style={{ alignItems: "center", marginVertical: 20 }}>
      <TouchableOpacity
        style={{
          backgroundColor: isListening ? "#8B0000" : "#222",
          padding: 16,
          borderRadius: 8,
          alignItems: "center",
          width: 200,
        }}
        onPress={isListening ? stopListening : startListening}
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          {isListening ? "🛑 Stop Listening" : "🎤 Speak Command"}
        </Text>
      </TouchableOpacity>

      {recognizedText ? (
        <Text style={{ marginTop: 12, color: "#ccc" }}>
          You said: {recognizedText}
        </Text>
      ) : null}
    </View>
  );
}
