import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/dist/Feather";
import { OSWALD, OSWALD_LIGHT } from "../../theme/fonts";

const { width } = Dimensions.get("window");
const boxWidth = width / 3;

const uris = [
  "https://images.unsplash.com/photo-1557185698-2af3e8c7aaa9?w=500&q=80",
  "https://images.unsplash.com/photo-1557157176-66b33e81d6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1545069153-6c75c6c51442?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80",
  "https://images.unsplash.com/photo-1557156977-d71b37bdfe3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
];
const BestSeller = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Best Seller</Text>
        <View style={styles.linkBox}>
          <Text style={styles.link}>See More</Text>
          <Icon name="chevron-right" size={20} />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {uris.map((uri, index) => (
          <View style={styles.productBox} key={`index-${index}`}>
            <Image
              source={{ uri: uri }}
              style={{ width: boxWidth, height: 150 }}
            />
            <View>
              <Text style={styles.productTitle}>Product Title</Text>
              <Text style={styles.productText}>$99.9</Text>
            </View>
          </View>
        ))}
        <Image />
      </ScrollView>
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  container:{
    marginVertical:10
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  linkBox: {
    flexDirection: "row",
  },
  heading: {
    fontSize: 20,
    fontFamily: OSWALD_LIGHT,
    textTransform: "capitalize"
  },
  link: {
    color: "#888",
    fontSize: 15,
    textTransform: "lowercase"
  },
  productBox: {
    marginRight: 20
  },
  productTitle: {
    fontFamily: OSWALD,
    //   fontWeight:'bold',
    textTransform: "capitalize"
  },
  productText: {
    fontWeight: "bold"
  }
});
