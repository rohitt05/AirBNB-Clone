import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    marginLeft: 25,
  },
  button: {
    backgroundColor: "#fff",
    width: 200,
    height: 40,
    marginTop: 25,
    marginLeft: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#fff",
    width: Dimensions.get('screen').width - 20,
    height: 60,
    flexDirection: "row",
    borderRadius: 30,
    marginHorizontal:10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    zIndex: 100,
    marginTop: 20
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",

    
  },
});

export default styles;
