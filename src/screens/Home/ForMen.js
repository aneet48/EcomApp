import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { OSWALD, OSWALD_BOLD, OSWALD_MEDIUM } from "../../theme/fonts";
import { APP_BACKGROUND_GRAY } from "../../theme/colors";
const url =
  "https://images.unsplash.com/photo-1554412664-6e7b242f969d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
// const url =
//   "https://images.unsplash.com/photo-1451680350250-2ae7d6e00f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
// const url =
//   "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
const OfferButton = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <View style={styles.textArea}>
        <Text style={styles.title}>For Men </Text>
        <Text style={styles.count}>113 items </Text>
      </View>
    </View>
  );
};

export default OfferButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#eef1ef",
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
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center"
    // justifyContent:'flex-end',
    // alignItems: "flex-end"
  },
  image: {
    // flex: 1,
    width: "50%",
    height: "100%"
  }
});
