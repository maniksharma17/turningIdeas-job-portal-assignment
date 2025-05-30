import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import ThemedButton from "./ThemedButton";
import { ThemedView } from "./ThemedView";
import { LinearGradient } from "expo-linear-gradient";

interface VideoPromoCardProps {
  onPress: () => void;
}

export const VideoPromoCard = ({ onPress }: VideoPromoCardProps) => {
  return (
    <LinearGradient
      colors={['rgba(50, 81, 238, 1)', 'rgba(126, 146, 250, 1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <ThemedText style={styles.heading}>
          Trending{"\n"}Electrician Work
        </ThemedText>
        <ThemedText style={styles.subtext}>Latest jobs, apply now</ThemedText>

        <ThemedButton
          title="See video"
          style={styles.button}
          onPress={onPress}
          textStyle={{ fontSize: 10, color: "#000" }}
        />
      </View>
      <ThemedView style={styles.imageWrapper}>
        <Image
          source={require("@/assets/images/video-banner-image.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </ThemedView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 391,
    height: 140,
    backgroundColor: "#3251EE",
    borderRadius: 12,
    padding: 6,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "auto",
    paddingHorizontal: 24,
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 4,
  },
  heading: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 900,
  },
  subtext: {
    color: "#e0e0e0",
    fontSize: 12,
    marginBottom: 0,
  },
  button: {
    width: 100,
    height: 28,
    borderRadius: 6,
    marginTop: 2,
    margin: 0,
    backgroundColor: "#fff",
    color: "#000",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  imageWrapper: {
    width: 194, 
    height: 164, 
    overflow: "hidden",
    borderRadius: 12, 
    backgroundColor: 'transparent',
    marginBottom: 24,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: "cover",
    transform: [{ scaleX: -1 }],
  },
});
