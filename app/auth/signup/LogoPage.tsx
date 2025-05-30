import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

export default function LogoPage() {
  const router = useRouter();
  useEffect(()=>{
    setTimeout(() => {
      router.replace('/auth/signup/HeroPage');
    }
    , 2000);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle}>
          <ThemedText style={styles.text}>Logo</ThemedText>
        </View>
      </View>
    </View>
  );
}

const CIRCLE_SIZE = 174;
const INNER_CIRCLE_SIZE = 144;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff', 
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    color: '#fff', 
    fontSize: 20,
    fontWeight: '600',
  },
  outerCircle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: '#E2E6FB', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: INNER_CIRCLE_SIZE,
    height: INNER_CIRCLE_SIZE,
    borderRadius: INNER_CIRCLE_SIZE / 2,
    backgroundColor: '#3C58E6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' 
  },
});
