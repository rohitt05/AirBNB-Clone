import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Post(props) {
  const post = props.post;

  return (
    <View style={styles.container}>
      {/* image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image
        }}
      />

      {/* bed and bedroom*/}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedrooms
      </Text>

      {/* type and description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/* old and new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text>/ night
      </Text>

      {/* total price */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 35,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },

  bedrooms: {
    marginVertical: 10,
    fontSize: 14,
    color: "#5b5b5b",
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
    fontSize: 18,
  },
  newPrice: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
    fontSize: 19,
  },
});
