import React from "react";
import { View, TouchableOpacity, Text,StyleSheet } from "react-native";
import { OSWALD_MEDIUM } from "../../theme/fonts";

const OfferButton=()=>{
    return (
      <View style={styles.btn}>
        <Text style={styles.btnText}>Some Exciting Offer </Text>
      </View>
    );
}

export default OfferButton

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 5,
    width:'100%',
    alignSelf: "center",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
    // marginVertical:20
  },
  btnText: {
    color: "#fff",
    fontFamily: OSWALD_MEDIUM,
    fontSize: 20,
    textTransform: 'uppercase'
  }
});