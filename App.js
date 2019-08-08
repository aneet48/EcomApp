import React from "react";
import { View, Text, TouchableOpacity,Dimensions } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import SideMenu from "./src/components/SideMenu2";
import Home from "./src/screens/Home";
const {width} = Dimensions.get('window')


const HomeStack = createStackNavigator({
  Home:Home
})

const TabNavigator = createBottomTabNavigator({
  Home:HomeStack
})

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
