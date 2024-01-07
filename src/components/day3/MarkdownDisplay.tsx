import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import Markdown from "react-native-markdown-display";

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.page}>
      <Markdown style={markdown}>{children}</Markdown>
    </ScrollView>
  );
};

export default MarkdownDisplay;

const markdown = StyleSheet.create({
  heading1: {
    fontFamily: "InterBlack",
    color: "#404040",
    marginVertical: 10,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: "InterBold",
    color: "#404040",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
