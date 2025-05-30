import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import AuthScreenImage from './AuthScreenImage';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSource?: ImageSourcePropType;
  showIcon?: boolean;
}

export default function PageHeader({ title, subtitle, imageSource, showIcon }: PageHeaderProps) {
  return (
    <View style={styles.container}>
      {showIcon && (
        <View style={styles.imageWrapper}><AuthScreenImage /></View>
      )}

      {imageSource && (
        <View style={styles.imageWrapper}>
          <Image source={imageSource} style={styles.image} />
        </View>
      )}
      
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 'auto',
    marginBottom: 40,
  },
  imageWrapper: {
    width: 148,
    height: 148,
    borderRadius: 72,
    backgroundColor: '#E2E6FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  image: {
    width: 87,
    height: 73,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    paddingHorizontal: 16,
    width: 273,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    color: '#555',
    marginTop: 8,
    textAlign: 'center',
  },
});
