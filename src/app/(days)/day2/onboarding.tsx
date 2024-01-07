import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    title: "Welcome to #DEVember",
    description: "Daily React Native tutorials during December",
    icon: "snowflake",
  },
  {
    title: "Learn and Grow together",
    description: "Learn by building 24 projects with React Native and Expo",
    icon: "book-reader",
  },
  {
    title: "Education for Children",
    description:
      'Contribute to the fundraiser "Education for Children" to help the children in the effort of providing education for children.',
    icon: "child",
  },
];

const onboarding = () => {
  const [screenIndex, setScreenIndex] = useState<number>(0);

  const data = onboardingSteps[screenIndex];
  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex((prev) => screenIndex + 1);
    }
  };
  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex((prev) => screenIndex - 1);
    }
  };
  const endOnboarding = () => {
    setScreenIndex((prev) => 0);
    router.back();
  };

  const swipeForward = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(onContinue);
  const swipeBack = Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack);
  const swipes = Gesture.Simultaneous(swipeBack, swipeForward);
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar style="light" />
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((_, index) => (
          <View
            style={[
              styles.stepIndicator,
              { backgroundColor: index === screenIndex ? "#cef202" : "gray" },
            ]}
            key={index}
          />
        ))}
      </View>
      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              name={data.icon}
              style={styles.image}
              size={150}
              color="#cef202"
              styles={styles.image}
            />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(200)}
              exiting={SlideOutLeft.delay(200)}
              style={styles.desc}
            >
              {data.description}
            </Animated.Text>

            <View style={styles.buttonsRow}>
              <Text onPress={endOnboarding} style={styles.buttonText}>
                Skip
              </Text>

              <Pressable style={styles.button} onPress={onContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default onboarding;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#15141a",
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  title: {
    color: "#fdfdfd",
    fontSize: 50,
    fontFamily: "InterBlack",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  desc: {
    color: "grey",
    fontSize: 20,
    fontFamily: "Inter",
    lineHeight: 28,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 50,
  },
  footer: {
    marginTop: "auto",
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302e38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#fdfdfd",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 7,
    marginHorizontal: 15,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    borderRadius: 10,
  },
});
