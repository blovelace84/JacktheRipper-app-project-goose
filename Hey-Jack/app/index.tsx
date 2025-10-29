import React from "react";
import { SafeAreaView, Text, FlatList, Button } from "react-native";
import { ConvexProvider, ConvexReactClient, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

const convex = new ConvexReactClient("https://<your-deployment>.convex.site");

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <CaseList />
      </SafeAreaView>
    </ConvexProvider>
  );
}

function CaseList() {
  const cases = useQuery(api.cases.list) ?? [];
  return (
    <FlatList
      data={cases}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <>
          <Text style={{ fontSize: 18 }}>{item.title}</Text>
          <Button
            title="Ask Jack"
            onPress={() => triggerAssistant(item.title)}
          />
        </>
      )}
    />
  );
}

function triggerAssistant(title: string) {
  // Android App Action / deep link integration
  console.log(`Invoke Assistant for ${title}`);
}
