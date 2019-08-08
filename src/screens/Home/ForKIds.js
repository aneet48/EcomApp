import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { OSWALD, OSWALD_BOLD, OSWALD_MEDIUM } from "../../theme/fonts";
import { APP_BACKGROUND_GRAY } from "../../theme/colors";
// const url =
//   "https://images.unsplash.com/photo-1564222195116-8a74a96b2c8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";
const url =
  "https://images.pexels.com/photos/346796/pexels-photo-346796.jpeg?auto=compress&cs=tinysrgb&h=400&w=400";
const OfferButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.title}>For KIds </Text>
        <Text style={styles.count}>113 items </Text>
      </View>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  );
};

export default OfferButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#dcd8d5",
    justifyContent: "space-between",
    alignItems: "center",
    height: 120,
    marginVertical: 5
  },
  title: {
    fontFamily: OSWALD_MEDIUM,
    fontSize: 20
  },
  count: {
    color: "gray"
  },
  textArea: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    // flex: 1,
    height: "100%",
    width: "50%"
  }
});
