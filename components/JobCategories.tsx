import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface CategoryCardProps {
  imageUri: ImageSourcePropType;
  title: string;
}

export const CategoryCard = ({ imageUri, title }: CategoryCardProps) => (
  <View style={styles.container}>
    <Image source={imageUri} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 5,
  },
  image: {
    width: 78,
    height: 78,
    borderRadius: 44,
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    width: 87
  },
});
