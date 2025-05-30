import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ThemedButton from "@/components/ThemedButton";
import PageHeader from "@/components/ThemedPageTitle";
import ThemedOption from "@/components/ThemedOptionDiv";
import TopActionsButtons from "@/components/TopActionsButton";
import { useRouter } from "expo-router";

const languages = [
  { label: "English (English)", value: "en" },
  { label: "Thoda English (Hinglish)", value: "hinglish" },
  { label: "हिन्दी (Hindi)", value: "hi" },
  { label: "मराठी (Marathi)", value: "mr" },
  { label: "தமிழ் (Tamil)", value: "ta" },
  { label: "తెలుగు (Telugu)", value: "te" },
];

export default function LanguageSelectionScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TopActionsButtons showSkip={false}
        onClose={()=>router.back()}
        />
        <PageHeader
          title="Choose your Language"
          subtitle="Select a language for better experience."
        />
        {languages.map((lang) => (
          <ThemedOption
            title={lang.label}
            key={lang.value}
            style={[
              styles.langButton,
              selected === lang.value && styles.selected,
            ]}
            onPress={() => setSelected(lang.value)}
          />
        ))}
      </ScrollView>

      <View style={styles.bottomButton}>
        <ThemedButton
          title="Next"
          onPress={() => router.push("/auth/signup/PhoneNumberPage")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 106,
    backgroundColor: "#fff",
  },
  content: {
    paddingBottom: 20,
  },
  langButton: {
    marginVertical: 5,
  },
  selected: {
    backgroundColor: "rgba(226, 230, 251, 1)", // light blue
    borderColor: "rgba(60, 88, 230, 1)"
  },
  bottomButton: {
    padding: 20,
  },
});
