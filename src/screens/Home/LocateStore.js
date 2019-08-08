import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground } from "react-native";
import { OSWALD, OSWALD_BOLD, OSWALD_MEDIUM } from "../../theme/fonts";
import { APP_BACKGROUND_GRAY, DARK_BUTTON } from "../../theme/colors";
const url =
  "https://images.unsplash.com/photo-1494346630177-f9d9a1a9f716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80";
const OfferButton = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: url }} style={styles.image}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Locate Store</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OfferButton;

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginVertical: 10
  },
  image: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  btn: {
      borderRadius:4,
    width: "80%",
    backgroundColor: DARK_BUTTON,
    paddingHorizontal: 10,
    paddingVertical: 6,marginBottom:20
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    textTransform:'uppercase',
    fontSize: 20,
    fontFamily: OSWALD
  }
});
