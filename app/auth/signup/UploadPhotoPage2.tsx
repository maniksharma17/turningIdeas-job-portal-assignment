import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import ThemedButton from "@/components/ThemedButton";
import PageHeader from "@/components/ThemedPageTitle";
import TopActionsButtons from "@/components/TopActionsButton";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

export default function UploadPhotoPage2() {
  const router = useRouter();
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TopActionsButtons 
        showSkip={false}
        onClose={() => router.back()}
        />
        <PageHeader
          title="Upload your photo"
          subtitle="A clear photo helps you get hired fastre"
        />

        <TouchableOpacity style={styles.cameraContainer}>
          <Image 
          source={require("@/assets/images/9485fbd95f7f0fe2527894643e2c433c5e7af520.png")}
          style={{ width: 258, height: 258, borderRadius: 150, backgroundColor: "rgba(60, 88, 230, 0.15)" }}>
          </Image>
        </TouchableOpacity>

        
      </ScrollView>

      <View style={styles.bottomButton}>
        <ThemedText style={{width: 351, margin: "auto"}}>
          By uploading, you agree to our <ThemedText style={styles.underline}>Terms</ThemedText>, <ThemedText style={styles.underline}>Privacy</ThemedText>, and <ThemedText style={styles.underline}>Cookies</ThemedText>.
        </ThemedText>
        <ThemedButton
          title="Next"
          style={{ marginTop: 16 }}
          onPress={() => router.replace("/(tabs)")}
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
