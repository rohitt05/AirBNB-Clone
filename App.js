import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import feed from "./assets/data/feed";

import "react-native-gesture-handler";
import Router from "./src/navigation/Router";

// const post1 = feed[0];
// const post2 = feed[1];
// const post3 = feed[2];
// const post4 = feed[3];

export default function App() {
  return (
    <>
      <StatusBar style="dark-content" />
      <Router />
    </>
  );
}
