import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ThemedButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
  disabled?: boolean;
}

export default function ThemedButton({ title, onPress, style, textStyle, disabled = false }: ThemedButtonProps) {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3C58E6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 56,
    width: 361,
    height: 48,
    margin: 'auto',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
