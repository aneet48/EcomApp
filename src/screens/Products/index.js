import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Modal
} from "react-native";
import {
  OSWALD_MEDIUM,
  OSWALD_BOLD,
  OSWALD_SEMI_BOLD,
  OSWALD
} from "../../theme/fonts";
import Icon from "react-native-vector-icons/dist/Feather";
import IconFont from "react-native-vector-icons/dist/FontAwesome";
import { APP_HORIZONTAL_MARGIN } from "../../theme/constants";
import womenProductJson from "../../assets/json/WomenProducts.json";
import menProductJson from "../../assets/json/MenProducts.json";
import { FlatList } from "react-native-gesture-handler";
import Filter from "./Filter";
const { width } = Dimensions.get("window");
let boxWidth = width / 2 - 30;

const Products = props => {
  const [type, settype] = useState("");
  const [list, setlist] = useState(false);
  const [products, setproducts] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false);
  useEffect(() => {
    let params = props.navigation.state.params;
    params && params.title ? settype(params.title) : settype("Products");
    params && params.title && params.title == "men"
      ? setproducts(menProductJson)
      : setproducts(womenProductJson);

    console.log(womenProductJson);
  }, []);

  const productsGrid = () => {
    return (
      <ScrollView>
        <View style={styles.products}>
          {products.map((item, index) => (
            <View style={styles.product} key={`item-${index}`}>
              <Image source={{ uri: item }} style={styles.image} />

              <Text style={styles.productTitle}>Product Title</Text>
              <View style={styles.productFooter}>
                <Text style={styles.productPrice}>$69.8</Text>
                <IconFont name="heart-o" size={20} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

  const productsList = () => {
    return (
      <ScrollView>
        <View style={styles.products}>
          {/* {womenProductJson.map((item, index) => ( */}
          <FlatList
            data={products}
            renderItem={(item, index) => (
              <View style={styles.listProduct} key={`item-${index}`}>
                <Image source={{ uri: item.item }} style={styles.listImage} />
                <View style={styles.listDetail}>
                  <Text style={styles.productListTitle}>
                    Product title with some description
                  </Text>
                  <View style={styles.productFooter}>
                    <Text style={styles.productListPrice}>$69.8</Text>
                    <IconFont name="heart" size={20} />
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => `item-${index}`}
          />
          {/* ))} */}
        </View>
      </ScrollView>
    );
  };

  closeModal=()=>setmodalVisible(false)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.optionMenu}>
          <Text style={styles.itemCount}>119 items</Text>
          <View style={styles.rightOptions}>
            <TouchableOpacity onPress={() => setlist(true)}>
              <Icon name="menu" size={21} color={list ? "#000" : "#ccc"} />
            </TouchableOpacity>

            <Text style={{ color: "#ccc", fontSize: 20 }}>|</Text>

            <TouchableOpacity onPress={() => setlist(false)}>
              <Icon name="grid" size={18} color={!list ? "#000" : "#ccc"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setmodalVisible(true)}>
              <View style={styles.filterBtn}>
                <Text style={styles.filterText}>FILTER</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        {/* <View style={styles.filterContainer}>
          <View styl={styles.filterHeader}>
            <TouchableOpacity
              onPress={() => {
                setmodalVisible(false);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View> */}
        <Filter closeModal={closeModal} />
      </Modal>
      {/* {productsGrid()} */}
      {list ? productsList() : productsGrid()}
    </View>
  );
};
export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginHorizontal: APP_HORIZONTAL_MARGIN
  },
  title: {
    fontFamily: OSWALD_MEDIUM,
    fontSize: 25,
    textTransform: "uppercase",
    marginHorizontal: APP_HORIZONTAL_MARGIN
  },
  optionMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: APP_HORIZONTAL_MARGIN
  },
  itemCount: {
    fontSize: 14,
    color: "gray",
    flex: 1
  },
  rightOptions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // justifyContent: "flex-end",
    alignItems: "center"
  },
  filterBtn: {
    // width: "50%",
    borderLeftWidth: 1,
    borderLeftColor: "#ccc",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingLeft: 20
  },
  filterText: {
    // marginHorizontal
    fontFamily: OSWALD_MEDIUM,
    fontSize: 15,
    paddingVertical: 15
  },
  image: {
    width: boxWidth,
    height: 230
  },
  listImage: {
    width: 120,
    height: 150
  },
  products: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginHorizontal: APP_HORIZONTAL_MARGIN
  },
  product: {
    marginVertical: 15
  },
  productTitle: {
    // fontFamily: OSWALD,
    fontSize: 16
  },
  productListTitle: {
    // fontFamily: OSWALD,
    fontSize: 20
  },
  productPrice: {
    fontFamily: OSWALD_MEDIUM,
    fontSize: 16
  },
  productListPrice: {
    fontFamily: OSWALD_MEDIUM,
    fontSize: 18
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listProduct: {
    marginVertical: 20,
    flex: 1,
    flexDirection: "row"
    // justifyContent:'space-between'
  },
  listDetail: {
    marginLeft: 20,
    flex: 1,
    justifyContent: "space-between"
  },
  filterContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, .9)",
    marginVertical: APP_HORIZONTAL_MARGIN,
    marginHorizontal: APP_HORIZONTAL_MARGIN
  },
  
});

Products.navigationOptions = ({ navigation }) => {
  console.log(navigation);
  return {
    title: "FOR " + navigation.state.params.title || "Products",
    headerTitleStyle: {
      fontSize: 16,
      textAlign: "center",
      alignSelf: "center",
      flex: 1,
      fontFamily: OSWALD_MEDIUM,
      color: "#000",
      textTransform: "uppercase"
    },

    headerRight: (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity>
          <Icon
            name="shopping-bag"
            style={{ paddingRight: 20, color: "#000" }}
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" style={{ paddingRight: 20 }} size={20} />
        </TouchableOpacity>
      </View>
    )
  };
};
