import { useEffect } from "react";
import { Stack } from "expo-router";
import {
  Inter_900Black,
  Inter_600SemiBold,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
  useFonts,
  AmaticSC_700Bold,
  AmaticSC_400Regular,
} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync(); 
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Devember" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
