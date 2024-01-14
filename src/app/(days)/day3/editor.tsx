import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Stack } from "expo-router";
import MarkdownDisplay from "@components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const template = `# Markdown Editor Hello **World**`;

const EditorScreen = () => {
  const [content, setContent] = useState<string>(template);
  const [tab, setTab] = useState<string>("edit");
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.tabsContainer}>
        <Pressable onPress={() => setTab('edit')} style={styles.tab}>
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable onPress={() => setTab('preview')} style={styles.tab}>
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>
      {tab === "edit" ? (
        <TextInput
          value={content}
          multiline
          numberOfLines={50}
          style={styles.input}
          onChangeText={setContent}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
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
    backgroundColor: "whitesmoke",
    flex: 1,
    padding: 15,
    borderRadius: 10,
    paddingTop: 50,
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
  tabText: {
    fontFamily: "InterBold",
  },
});
