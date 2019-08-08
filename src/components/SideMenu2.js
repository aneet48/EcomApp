import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/dist/Feather";
import {
  OSWALD_MEDIUM,
  OSWALD,
  OSWALD_LIGHT,
  OSWALD_BOLD,
  OSWALD_SEMI_BOLD
} from "../theme/fonts";
import Collapsible from "react-native-collapsible";

const SideMenu = props => {
  const [womenmenu, setwomenmenu] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Icon name="x" size={25} />
        </TouchableOpacity>
        <Text style={styles.signin}>Sign In </Text>
      </View>
      <ScrollView style={styles.menu}>
        <View style={styles.menuContainer}>
          <Icon name="home" size={20} style={styles.menuIcon} />
          <Text style={styles.menuText}>Home</Text>
        </View>
        <View style={styles.menuContainer}>
          <Icon name="layers" size={20} style={styles.menuIcon} />
          <Text style={styles.menuText}>Collections</Text>
        </View>
        <View style={styles.menuContainer}>
          <Icon name="thumbs-up" size={20} style={styles.menuIcon} />
          <Text style={styles.menuText}>best seller</Text>
        </View>
        <View style={styles.collapseMenu}>
          <TouchableOpacity
            style={[styles.menuContainer,{justifyContent:'space-between'}]}
            onPress={() => {
              setwomenmenu(!womenmenu);
            }}
          >
            <Text style={styles.menuText2}>For Women</Text>
            {womenmenu && (
              <Icon name="plus" size={20} style={styles.menuIcon} />
            )}
            {!womenmenu && (
              <Icon name="minus" size={20} style={styles.menuIcon} />
            )}
          </TouchableOpacity>

          <Collapsible collapsed={womenmenu} align="center">
            <View style={styles.content}>
              <Text style={styles.subMenu}>T-SHIRTS (25)</Text>
              <Text style={styles.subMenu}>Shoes (30)</Text>
              <Text style={styles.subMenu}>Acessories (45)</Text>
              <Text style={styles.subMenu}>Bags (40)</Text>
             
            </View>
          </Collapsible>
        </View>
        <View style={styles.collapseMenu}>
          <View style={styles.menuContainer}>
            <Text style={styles.menuText2}>For MEN</Text>
          </View>
        </View>
        <View style={styles.collapseMenu}>
          <View style={styles.menuContainer}>
            <Text style={styles.menuText2}>For kids</Text>
          </View>
        </View>
        {/* <TouchableOpacity onPress={this.toggleExpanded}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Single Collapsible</Text>
          </View>
        </TouchableOpacity> */}
      </ScrollView>

      <View style={styles.infoOptions}>
        <View style={styles.saparator} />
        <View style={styles.menuContainer}>
          <Icon name="help-circle" size={20} style={styles.menuIcon} />
          <Text style={styles.menuText}>Help & support</Text>
        </View>
      </View>
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 15
  },
  headerIcons: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  signin: {
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: OSWALD_MEDIUM
  },
  infoOptions: {
    justifyContent: "flex-end",
    marginBottom: 40,
    textTransform: "uppercase"
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  menuIcon: {
    marginRight: 25
  },
  menuText: {
    fontSize: 16,
    fontFamily: OSWALD_SEMI_BOLD,
    textTransform: "uppercase"
  },
  collapseMenu: {
    marginLeft: 40
  },
  menuText2: {
    // color: "gray",
    fontSize: 30,
    fontFamily: OSWALD_LIGHT,
    textTransform: "capitalize"
  },
  menu: {
    marginVertical: 40
  },
  saparator: {
    height: 2,
    backgroundColor: "#c1c1c1"
  },
  subMenu: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 15,
    color: "#555",
    textTransform: "capitalize",
    fontFamily: OSWALD_LIGHT
  }
});
