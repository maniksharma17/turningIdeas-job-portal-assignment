// OTPVerificationScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ThemedButton from "@/components/ThemedButton";
import PageHeader from "@/components/ThemedPageTitle";
import TopActionsButtons from "@/components/TopActionsButton";
import { useRouter } from "expo-router";

export default function OTPVerificationScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const router = useRouter();

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);
  };

  return (
    <View style={styles.container}>
      <TopActionsButtons
        onClose={() => {
          router.back();
        }}
        onSkip={() => {
          router.push("/auth/signup/UserTypePage");
        }}
      />
      <PageHeader
        title="OTP Verification"
        subtitle="Enter the OTP sent to +91 XXXXXXXXXX"
        showIcon
      />
      <View style={styles.otpContainer}>
        {otp.map((digit, idx) => (
          <TextInput
            key={idx}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(val) => handleOtpChange(val, idx)}
          />
        ))}
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => console.log("Resend tapped")}>
          <Text style={styles.resendText}>
            Didn&apos;t receive OTP? <Text style={styles.resendLink}>RESEND</Text>
          </Text>
        </TouchableOpacity>

        <ThemedButton title="Verify" onPress={() => {router.push("/auth/signup/UserTypePage")}} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 106, backgroundColor: "#fff" },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    gap: 10,
  },
  otpInput: {
    width: 78,
    height: 62,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(77, 77, 77, 0.6)",
    textAlign: "center",
    fontSize: 18,
    boxShadow: "0px 4px 25px 5px rgba(0, 0, 0, 0.1)",
  },
  resendText: {
    textAlign: "center",
    color: "rgba(131, 128, 128, 1)",
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    margin: "auto",
    padding: 0,
    width: 350
  },
  resendLink: {
    color: "rgba(60, 88, 230, 1)",
    fontWeight: "bold",
  },
  button: {
    width: 118,
    height: 48,
    marginTop: 0,
    marginRight: 0,
    verticalAlign: 'top',
  },
});
