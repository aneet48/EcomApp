import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
export default class SideMenu extends Component {
  noAuthBar = () => {
    return (
      <View style={styles.noauthBar}>
        <Icon name="account-circle-outline" color="#fff" size={40} />
        <View style={styles.textContainer}>
          <Text style={styles.noauthText}>Log In</Text>
          <Text style={styles.noauthText}>Sign up</Text>
        </View>
      </View>
    );
  };

  AuthBar = () => {
    return (
      <View style={styles.authBar}>
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          }}
          style={styles.avatar}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.authName}>Rajneet Kaur</Text>
          <Text style={styles.authLocation}>Ludhiana, Punjab</Text>
        </View>
      </View>
    );
  };

  MenuItems = () => {
    return (
      <View style={styles.menuItems}>
        <ScrollView>
          <Text style={styles.item}>HOME</Text>
          <Text style={styles.item}>Category 1</Text>
          <Text style={styles.item}>Category 2</Text>
          <Text style={styles.item}>Category 3</Text>
          <Text style={styles.item}>Category 4</Text>
        </ScrollView>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.AuthBar()}
        {this.MenuItems()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2c2c",
    justifyContent: "space-between"
  },
  authBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B1B1B",
    height: "15%"
  },
  noauthBar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B1B1B",
    height: "15%"
  },
  noauthText: {
    color: "#fff",
    fontSize: 14,
    marginVertical: 4,
    marginHorizontal: 5,
    textDecorationLine: "underline"
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  avatar: {
    height: 70,
    width: 70,
    borderRadius: 5,
    marginRight: 10
  },
  authName: {
    color: "#fff",
    fontSize: 14,
    marginVertical: 4,
    marginHorizontal: 5,
    textAlign: "center"
  },
  authLocation: {
    fontSize: 12,
    color: "#ddd",
    textAlign: "center"
  },
  item: {
    textTransform: "uppercase",
    color: "#bbb",
    fontSize: 14,
    marginVertical: 3
  },
  menuItems: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});
