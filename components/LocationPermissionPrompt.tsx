import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LocationPermissionPrompt = ({setModalVisible}: {setModalVisible: (x: boolean) => void}) => {
  const [open, setOpen] = useState(true);

  const handleButtonClick = () => {
    setModalVisible(false);
    setOpen(false);
  }

  return (
    <View style={[styles.overlay, {display: open ? 'flex' : 'none'}]}>
    <View style={[styles.container, {display: open ? 'flex' : 'none'}]}>
      <Ionicons name="location-sharp" size={28} color="#3C5AFF" style={styles.icon} />
      <Text style={styles.title}>Allow Gigtap to access this device&apos;s approximate location?</Text>

      <Image
        source={require("@/assets/images/86d25b29adce06ad0a854a4f88e2ff315f6515de.png")} // Replace with your own location image
        style={styles.image}
      />

      <Pressable style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.buttonText}>While using the app</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.buttonText}>Only this time</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.lastButton]} onPress={handleButtonClick}>
        <Text style={[styles.buttonText, styles.lastButtonText]}>Don’t allow</Text>
      </Pressable>
    </View>
  </View>
  );
};

export default LocationPermissionPrompt;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // dull background
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    pointerEvents: "auto"
  },
  container: {
    width: 360,
    margin: 'auto',
    position: 'absolute',
    zIndex: 50,
    left: 30,
    right: 20,
    top: 178,
    backgroundColor: "white",
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 24,
    color: "#111",
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 32,
    borderRadius: 40,
  },
  button: {
    width: "100%",
    paddingVertical: 14,
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#3C5AFF",
  },
  lastButton: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  lastButtonText: {
    color: "#666",
  },
});
