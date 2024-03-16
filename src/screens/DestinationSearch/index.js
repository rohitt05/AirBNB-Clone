import { View, TextInput, StyleSheet, FlatList, Text, Pressable } from "react-native";
import React, { useState } from "react";
import searchResults from "../../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";


export default function DestinationSearchScreen() {
  const [inputText, setInputText] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChange={setInputText}
      />
      {/* list of destination */}
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <Pressable onPress={()=>navigation.navigate("Guests")} style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 25,
  },
  textInput: {
    fontSize: 20,
  },
  row:{
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgrey"

  },
  iconContainer:{
    backgroundColor: "#e7e7e7",
    padding: 7,
    borderRadius: 10,
    marginRight: 15,

  },
  locationText:{
    fontWeight: "700"
  }
});
