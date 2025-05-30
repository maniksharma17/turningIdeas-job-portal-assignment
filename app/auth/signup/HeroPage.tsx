import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ThemedButton from '@/components/ThemedButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function HeroPage() {
  const router = useRouter();
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/48e6b0ba0d0d8a5a136fdcc82e06b19d3b05c574.png')} 
        style={styles.background}
        resizeMode="cover"
      >
        
        <View style={styles.content}>
          <LinearGradient
            colors={['rgba(217, 217, 217, 0)', 'rgba(6, 24, 113, 0.5)', 'rgba(0, 12, 70, 1)']}
            style={styles.gradient}
          />
          <Text style={styles.logo}>Logo</Text>
          <Text style={styles.title}>Easy way to find and do work.</Text>
          <Text style={styles.subtitle}>Find short or full-time jobs in just a few taps.</Text>
          <View style={styles.buttonContainer}>
            <ThemedButton
              title="Login"
              onPress={() => router.push('/auth/signup/LanguagePage')}
              style={{ width: 172, height: 48, marginBottom: 20, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
            ></ThemedButton>
            <ThemedButton
              title="Sign Up"
              onPress={() => router.push('/auth/signup/LanguagePage')}
              style={{  width: 172, height: 48, marginBottom: 20 }}
            ></ThemedButton>
          </View>
        </View>

        
      </ImageBackground>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  background: {
    width,
    height,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    padding: 20,
  },
  logo: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 36,
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 24,
    width: 287,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontWeight: '500',
    width: 287,
},
});
