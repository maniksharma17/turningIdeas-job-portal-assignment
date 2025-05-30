import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ThemedButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
}

export default function ThemedOption({ title, onPress, style, textStyle }: ThemedButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: "#4D4D4D",
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    width: 361,
    height: 48,
    margin: "auto"
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});
