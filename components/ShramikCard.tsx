import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ShramikCardProps {
  name: string;
  id: string;
  dob: string;
  address: string;
  photoUri: ImageSourcePropType;
}

export default function ShramikCard({
  name,
  id,
  dob,
  address,
  photoUri,
}: ShramikCardProps) {
  return (
    <LinearGradient
      colors={["#3251EE", "#7E92FA"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1.2, y: 1 }}
      style={styles.container}
    >
      <View style={styles.topRow}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>Logo</Text>
        </View>
        <Text style={styles.hindiTitle}>श्रमिक कार्ड</Text>
      </View>

      <View style={styles.infoRow}>
        <Image source={photoUri} style={styles.image} />
        <View style={styles.infoText}>
          <Info label="Name" value={name} />
          <Info label="ID" value={id} />
          <Info label="D.O.B." value={dob} />
          <Info label="ADDRESS" value={address} />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.hindiFooter}>सुरक्षित भविष्य, सशक्त श्रमिक</Text>
      </View>
    </LinearGradient>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.colon}>:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 391,
    height: 212,
    borderRadius: 10,
    padding: 16,
    justifyContent: "space-between",
    backgroundColor: "transparent",
    margin: "auto",
    marginBottom: 40,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoCircle: {
    width: 28,
    height: 28,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#3251EE",
    fontSize: 8
  },
  hindiTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    margin: "auto"
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  image: {
    width: 79,
    height: 83,
    borderRadius: 12,
  },
  infoText: {
    marginLeft: 16,
    flex: 1,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
    flexWrap: "wrap",
  },
  label: {
    fontWeight: "bold",
    color: "#fff",
    width: 70,
    fontSize: 14
  },
  colon: {
    color: "#fff",
    marginHorizontal: 4,
  },
  value: {
    color: "#fff",
    flexShrink: 1,
    fontWeight: "600",
    fontSize: 12,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#fff",
    marginTop: 8,
    paddingTop: 4,
    alignItems: "center",
  },
  hindiFooter: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
