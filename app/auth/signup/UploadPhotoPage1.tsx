import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ThemedButton from "@/components/ThemedButton";
import PageHeader from "@/components/ThemedPageTitle";
import TopActionsButtons from "@/components/TopActionsButton";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { Entypo } from "@expo/vector-icons";

export default function UploadPhotoPage1() {
  const router = useRouter();
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TopActionsButtons showSkip={true} 
        onClose={() => router.back()}
        onSkip={() => router.push("/auth/signup/UploadPhotoPage2")}
        />
        <PageHeader
          title="Upload your photo"
          subtitle="A clear photo helps you get hired fastre"
        />

        <TouchableOpacity style={styles.cameraContainer}>
          <View style={{ width: 258, height: 258, borderRadius: 150, backgroundColor: "rgba(60, 88, 230, 0.15)" }}>
            <Entypo name="camera" size={93} color="rgba(60, 88, 230, 1)" style={{ margin: "auto" }} />
          </View>
        </TouchableOpacity>

        
      </ScrollView>

      <View style={styles.bottomButton}>
        <ThemedText style={{width: 351, margin: "auto"}}>
          By uploading, you agree to our <ThemedText style={styles.underline}>Terms</ThemedText>, <ThemedText style={styles.underline}>Privacy</ThemedText>, and <ThemedText style={styles.underline}>Cookies</ThemedText>.
        </ThemedText>
        <ThemedButton
          title="I'll do it later"
          style={{ marginTop: 16, backgroundColor:"rgba(229, 229, 234, 1)", color: "rgba(153, 154, 154, 1)" }}
          onPress={() => router.push("/auth/signup/UploadPhotoPage2")}
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
  cameraContainer: {
    margin: "auto",
    paddingVertical: 60,
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
  underline: {
    textDecorationLine: "underline",
    color: "#007AFF",
  },
  disclaimer: {
    fontSize: 16,
    color: "rgba(131, 128, 128, 1)",
    marginTop: 8,
  },
});
