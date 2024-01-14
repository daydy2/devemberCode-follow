import React, { useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);
  return (
    <View>
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        source={require("@assets/lottie/netflix.json")}
      />
      <View>
        <Button title="Play" onPress={() => animation.current?.play()} />
        <Button title="Pause" onPress={() => animation.current?.pause()} />
        <Button title="Reset" onPress={() => animation.current?.reset()} />
      </View>
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({});
