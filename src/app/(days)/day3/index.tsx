import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
  # Markdown

  Integrate Markdown content in **React Native**
`;
const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 2: Markdown" }} />
      <Text>Day Details Screen</Text>
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={"/day3/editor"} asChild>
        <Button title="Go to editor" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({});
