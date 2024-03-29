import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import SearchResultsScreen from "../screens/SearchResults";
import SearchResultsTabNavigator from "./SearchResultsTabNavigator";

const Stack = createStackNavigator();

export default function ExploreNavigator(props) {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={"Welcome"}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      /> */}

      <Stack.Screen
        name={"SearchResults"}
        component={SearchResultsTabNavigator}
        options={{
          headerShown: false,
          title: "Search your destination",
        }}
      />
    </Stack.Navigator>
  );
}
