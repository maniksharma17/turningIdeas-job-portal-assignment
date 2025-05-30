import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "./ThemedText";

interface SquareCardProps {
  imageSource: ImageSourcePropType;
  title: string;
  subtitle?: string;
  selected?: boolean;
  onPress?: () => void;
}

export default function ThemedJobTypeBox({
  imageSource,
  title,
  subtitle,
  selected = false,
  onPress = () => {},
}: SquareCardProps) {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={[styles.card, selected && { borderColor: "#3C58E6", "boxShadow": "0px 4px 25px 5px #E2E6FB" }]}>
      <Image source={imageSource} style={styles.image} />
      <ThemedText
        style={[styles.title, selected && { color: "#3C58E6" }]}
        numberOfLines={1}
      >
        {title}
      </ThemedText>
      {subtitle ? (
        <ThemedText 
          style={[styles.subtitle, selected && { color: "#3C58E6" }]}
          numberOfLines={2}
        >
          {subtitle}
        </ThemedText>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "transparent",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(77, 77, 77, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    width: 172,
    height: 145,
    marginTop: 6,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 32,
    marginBottom: 12,
    resizeMode: "cover",
  },
  title: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 14,
    color: "#000",
  },
  subtitle: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});
