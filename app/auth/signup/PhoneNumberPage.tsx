import React, { useState } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import PageHeader from "@/components/ThemedPageTitle";
import TopActionsButtons from "@/components/TopActionsButton";
import ThemedButton from "@/components/ThemedButton";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function PhoneNumberScreen() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <TopActionsButtons
        onClose={() => router.back()}
        onSkip={() => router.push("/auth/signup/OTPVerificationPage")}
      />

      
      {/* Page Title */}
      <PageHeader
        title="Enter your phone number"
        subtitle="We'll send you the 4 digit verification code"
        showIcon={true}
      />

      {/* Phone Number Input */}
      <View style={styles.phoneInputContainer}>
        <View style={styles.codeBox}>
          <TextInput
            editable={false}
            value="+91"
            style={styles.codeText}
            placeholderTextColor={"rgba(77, 77, 77, 1)"}
          />
          <AntDesign name="caretdown" size={8} color="rgba(153, 154, 154, 1)" />
        </View>
        <TextInput
          style={styles.inputBox}
          placeholder="XXXXXXXXXX"
          keyboardType="number-pad"
          maxLength={10}
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomButton}>
        <ThemedButton
          title="Generate OTP"
          onPress={() => router.push("/auth/signup/OTPVerificationPage")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 106,
  },
  illustrationContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  illustration: {
    width: 100,
    height: 100,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 0,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "rgba(77, 77, 77, 1)",
    borderRadius: 5,
    width: 361,
    height: 48,
    marginHorizontal: "auto",
    backgroundColor: "transparent"
  },
  codeBox: {
    width: 80,
    alignItems: "center",
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "row",
    paddingRight: 10,
  },
  codeText: {
    fontSize: 16,
    color: "rgba(153, 154, 154, 1)",
  },
  inputBox: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    borderLeftColor: "rgba(153, 154, 154, 1)",
    borderLeftWidth: 1,
  },
  bottomButton: {
    marginTop: "auto",
    padding: 20,
    paddingBottom: 300,
    backgroundColor: "#fff",
  },
  
});
