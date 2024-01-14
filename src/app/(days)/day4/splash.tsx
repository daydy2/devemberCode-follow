import React from "react";
import AnimatedSplashScreen from "@/components/day4/AnimatedSplash";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const AnimationScreen = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <AnimatedSplashScreen />;
    </>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({});
