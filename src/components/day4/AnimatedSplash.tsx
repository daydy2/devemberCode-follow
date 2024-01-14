import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import Animated, { FadeOut } from "react-native-reanimated";

// const AnimatedLottieView = Animated.createAnimatedComponent(LottieView)

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);
  return (
    <Animated.View
      exiting={FadeOut.duration(3000)}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <StatusBar style="light" />
      <LottieView
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        autoPlay
        style={{
          width: "80%",
          maxWidth: 400,
          // height: 200,
          // backgroundColor: "#eee",
        }}
        source={require("@assets/lottie/netflix.json")}
      />
    </Animated.View>
  );
};

export default AnimatedSplashScreen;

const styles = StyleSheet.create({});
