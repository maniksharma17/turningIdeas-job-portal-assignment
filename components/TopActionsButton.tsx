import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Or use react-native-vector-icons

type Props = {
  onClose?: () => void;
  onSkip?: () => void;
  showSkip?: boolean;
};

const TopActionsButtons: React.FC<Props> = ({ onClose, onSkip, showSkip = true }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>

      {showSkip && (
        <TouchableOpacity onPress={onSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopActionsButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skipText: {
    fontSize: 16,
    color: "rgba(131, 128, 128, 1)",
    fontWeight: "500",
  },
});
