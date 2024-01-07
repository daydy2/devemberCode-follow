import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Stack } from "expo-router";
import MarkdownDisplay from "@components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const template = `# Markdown Editor

Hello **World**
`;

const EditorScreen = () => {
  const [content, setContent] = useState<string>(template);
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <TextInput value={content} multiline style={styles.input} />
      <MarkdownDisplay>{content}</MarkdownDisplay>
    </SafeAreaView>
  );
};

export default EditorScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  input: {
    
  }
});
