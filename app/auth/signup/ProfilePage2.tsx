import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  
} from "react-native";
import ThemedButton from "@/components/ThemedButton";
import PageHeader from "@/components/ThemedPageTitle";
import TopActionsButtons from "@/components/TopActionsButton";
import { useRouter } from "expo-router";
import ThemedInput from "@/components/ThemedInputBox";
import { ThemedText } from "@/components/ThemedText";
import { AntDesign } from "@expo/vector-icons";

export default function ProfilePage2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TopActionsButtons showSkip={true} 
        onClose={() => router.back()}
        onSkip={() => router.push("/auth/signup/UploadPhotoPage1")}
        />
        <PageHeader
          title="Create a profile"
          subtitle="Let's get you set up! Make your profile."
        />

        <View style={styles.boxContainer}>
          <ThemedInput
            label="Qualification"
            placeholder=""
            type="text"
            icon={<AntDesign name="caretdown" size={12} color="rgba(0, 0, 0, 0.5)" />}
          />

          <ThemedInput
            label="Experience"
            placeholder=""
            type="text"
            icon={<AntDesign name="caretdown" size={12} color="rgba(0, 0, 0, 0.5)" />}
          />

          <ThemedInput
            label="Daily Pay"
            placeholder="800"
            type="text"
          />

          <ThemedText style={{margin: "auto"}}>
            Based on daily wages your monthly salary is <ThemedText style={{color: "rgba(60, 88, 230, 1)"}}>Rs 18000. </ThemedText>
          </ThemedText>
        </View>
      </ScrollView>

      <View style={styles.bottomButton}>
        <ThemedButton
          title="Next"
          onPress={() => router.push("/auth/signup/UploadPhotoPage1")}
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
  boxContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  label: {
    fontSize: 20,
    color: "#000",
    marginBottom: 8,
    fontWeight: "600",
  },
  content: {
    paddingBottom: 0,
  },
  bottomButton: {
    padding: 20,
    backgroundColor: "transparent",
  },
});
