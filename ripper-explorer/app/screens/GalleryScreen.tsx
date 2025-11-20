import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

interface GalleryItem {
  id: string;
  src: any;
  title: string;
}

const galleryData: GalleryItem[] = [
  {
    id: "1",
    src: require("../../assets/images/victim-annie-chapman.jpg"),
    title: "Annie Chapman",
  },
  {
    id: "2",
    src: require("../../assets/images/victim-mary-kelly.jpeg"),
    title: "Mary Jane Kelly",
  },
  {
    id: "3",
    src: require("../../assets/images/whitechapel-street.jpeg"),
    title: "Whitechapel Street",
  },
];

export default function GalleryScreen() {
  return (
    <View className="flex-1 bg-black p-4">
      <Text className="text-white text-3xl font-bold mb-4">Gallery</Text>

      <FlatList
        data={galleryData}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="mb-6 w-[48%]">
            <View
              className="bg-[#1a0000] rounded-xl p-1.5 border-[3px] border-[#3a0000] shadow-2xl shadow-red-900"
              style={{ shadowOpacity: 0.7, shadowRadius: 12, elevation: 10 }}
            >
              <View
                className="rounded-lg border-[4px] border-[#5e0000]"
                style={{
                  borderTopWidth: 3,
                  borderBottomWidth: 6,
                  borderLeftWidth: 5,
                  borderRightWidth: 3,
                }}
              >
                <Image
                  source={item.src}
                  className="w-full h-40 rounded-sm"
                  resizeMode="cover"
                  style={{ opacity: 0.9, borderRadius: 4 }}
                />
              </View>
            </View>

            <Text className="text-red-200 text-center mt-2 font-bold tracking-wider">
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
