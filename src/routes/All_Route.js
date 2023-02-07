import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import HotTab from "../pages/HotTab";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const All_Route = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Hot" component={HotTab} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default All_Route;

const styles = StyleSheet.create({});
