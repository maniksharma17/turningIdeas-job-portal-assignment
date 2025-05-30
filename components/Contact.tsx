import React from 'react';
import { ThemedView } from './ThemedView';
import { StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import PhoneIcon from './PhoneIcon';

export const ContactCard = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={{ fontSize: 15, fontWeight: 500, color: "#000" }}>
        Contact for more information
      </ThemedText>
      <PhoneIcon />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderWidth: 1,
    borderColor: "rgba(60, 88, 230, 1)",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(126, 146, 250, 0.12)',
    borderRadius: 5,
    margin: 16,
    marginBottom: 40,
    borderStyle: 'dashed'
  },
  
});
