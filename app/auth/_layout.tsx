// app/auth/layout.tsx
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthLayout() {
  return (
      <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
    
  );
}
