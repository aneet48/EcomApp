import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import IconMat from "react-native-vector-icons/dist/MaterialCommunityIcons";
import SideMenu from "./src/components/SideMenu2";
import Home from "./src/screens/Home";
import Account from "./src/screens/Account";
import { OSWALD, OSWALD_SEMI_BOLD } from "./src/theme/fonts";
const { width } = Dimensions.get("window");

const HomeStack = createStackNavigator({
  Home: Home
});
const TestStack = createStackNavigator({
  Test: Home
});
const AccountStack = createStackNavigator({
  Account: Account
});

const TabNavigator = createBottomTabNavigator(
  {
    Explore: HomeStack,
    Categories: TestStack,
    Saved: TestStack,
    Account: AccountStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName == "Categories") {
          return (
            <IconMat
              name="format-list-bulleted-type"
              size={27}
              color={tintColor}
            />
          );
        }
        if (routeName == "Account") {
          return <Icon name="user-circle-o" size={23} color={tintColor} />;
        }
        if (routeName == "Saved") {
          return <IconMat name="tag-heart" size={25} color={tintColor} />;
        }
        if (routeName == "Explore") {
          return <IconMat name="compass" size={25} color={tintColor} />;
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "#bbb",
      labelStyle: {
        fontSize: 10,
        textTransform: "uppercase",
        fontFamily: OSWALD_SEMI_BOLD
      }
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: TabNavigator
  },
  {
    contentComponent: SideMenu,
    drawerWidth: width,
    drawerBackgroundColor: " rgba(255, 255, 255, .9)"
  }
);

export default createAppContainer(DrawerNavigator);
