import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import ThemedButton from "@/components/ThemedButton";
import PageHeader from "@/components/ThemedPageTitle";
import TopActionsButtons from "@/components/TopActionsButton";
import { useRouter } from "expo-router";
import ThemedInput from "@/components/ThemedInputBox";
import { AntDesign } from "@expo/vector-icons";

export default function ProfilePage1() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = React.useState<string | null>(
    null
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TopActionsButtons showSkip={true} 
        onClose={() => router.back()}
        onSkip={() => router.push("/auth/signup/ProfilePage2")}
        />
        <PageHeader
          title="Create a profile"
          subtitle="Let's get you set up! Make your profile."
        />

        <View style={styles.boxContainer}>
          <ThemedInput
            label="What's your name?"
            placeholder="Full name"
            type="text"
          />

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginHorizontal: "auto",
            }}
          >
            <Text style={styles.label}>Gender</Text>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <TouchableOpacity
                onPress={() => setSelectedGender("male")}
                style={{
                  width: 173,
                  height: 48,
                  flexDirection: "row",
                  gap: 24,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor:
                    selectedGender === "male"
                      ? "rgba(60, 88, 230, 1)"
                      : "rgba(77, 77, 77, 1)",
                  borderRadius: 5,
                  padding: 8,
                  paddingHorizontal: 20,
                  boxShadow:
                    selectedGender === "male"
                      ? "0px 4px 25px 5px rgba(226, 231, 255, 0.8);"
                      : "",
                }}
              >
                <Image
                  source={require("@/assets/images/male.png")}
                  style={{ width: 24, height: 24, borderRadius: 12 }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color:
                      selectedGender === "male"
                        ? "rgba(60, 88, 230, 1)"
                        : "#000",
                  }}
                >
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedGender("female")}
                style={{
                  width: 173,
                  height: 48,
                  flexDirection: "row",
                  gap: 24,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor:
                    selectedGender === "female"
                      ? "rgba(60, 88, 230, 1)"
                      : "rgba(77, 77, 77, 1)",
                  borderRadius: 5,
                  padding: 8,
                  paddingHorizontal: 20,
                  boxShadow:
                    selectedGender === "female"
                      ? "0px 4px 25px 5px rgba(226, 231, 255, 0.8);"
                      : "",
                }}
              >
                <Image
                  source={require("@/assets/images/female.png")}
                  style={{ width: 24, height: 24, borderRadius: 12 }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color:
                      selectedGender === "female"
                        ? "rgba(60, 88, 230, 1)"
                        : "#000",
                  }}
                >
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <ThemedInput
            label="Date of Birth"
            placeholder="Full name"
            type="date"
          />

          <ThemedInput label="Address" placeholder="" type="text" icon={<AntDesign name="caretdown" size={12} color="rgba(0, 0, 0, 0.5)" />} />
        </View>
      </ScrollView>

      <View style={styles.bottomButton}>
        <ThemedButton
          title="Next"
          onPress={() => router.push("/auth/signup/ProfilePage2")}
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
