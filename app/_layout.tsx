import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('../assets/fonts/InterVariable.ttf'),
  });


  if (!loaded) {
    return null;
  }

  return <Slot />;
}
