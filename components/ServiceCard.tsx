import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface ServiceCardProps {
  imageUri: ImageSourcePropType;
  title: string;
  price: string;
  duration: string;
  type: 'On-Site' | 'Apartment';
  onPress: () => void;
  variant?: 'blue' | 'gray';
}

export const ServiceCard = ({
  imageUri,
  title,
  price,
  duration,
  type,
  onPress,
  variant = 'gray',
}: ServiceCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={imageUri} style={styles.image} />
      <View style={{ backgroundColor: variant === 'blue' ? '#3251EE' : '#9E9E9E', padding: 4 }}>
        <Text style={styles.typeText}>{type}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>₹ {price}/ {duration}</Text>
        <TouchableOpacity
          style={[styles.button, variant === 'blue' ? styles.buttonBlue : styles.buttonGray]}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 90,
    resizeMode: 'cover',
    backgroundColor: '#9E9E9E',
  },
  
  typeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonBlue: {
    backgroundColor: '#3251EE',
  },
  buttonGray: {
    backgroundColor: '#9E9E9E',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
