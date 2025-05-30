import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface HeaderCardProps {
  name: string;
  avatarUri: ImageSourcePropType;
  onNotificationPress?: () => void;
}

export default function HomeHeaderCard({
  name,
  avatarUri,
  onNotificationPress,
}: HeaderCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image source={avatarUri} style={styles.avatar} />
        <View>
          <Text style={styles.greeting}>Hello {name}</Text>
          <Text style={styles.subtext}>Welcome Back</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onNotificationPress}>
        <View style={styles.bellContainer}>
          <FontAwesome name="bell" size={20} color="#000" />
          <View style={styles.dot} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 391,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto",
    marginBottom: 20
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  subtext: {
    fontSize: 14,
    color: "#7d7d7d",
    marginTop: 2,
  },
  bellContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f1f4ff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  dot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
  },
});
