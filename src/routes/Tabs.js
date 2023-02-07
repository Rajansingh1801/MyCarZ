import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaxicoTab from "../pages/MaxicoTab";
import HotTab from "../pages/HotTab";
import FrenchTab from "../pages/FrenchTab";
import AmericaTab from "../pages/AmericaTab";
const Tab = createMaterialTopTabNavigator();
const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Hot"
          component={HotTab}
          options={{
            tabBarContentContainerStyle: {
              borderColor: "black",
              borderWidth: 1,
              borderStyle: "solid",
            },
            tabBarActiveTintColor: "black",
            tabBarGap: 1,
            tabBarStyle: {
              backgroundColor: "transparent",
              shadowColor: "#96C7AA",
            },
            tabBarPressColor: "#8E6400",
            tabBarLabelStyle: {
              fontSize: 14,
              borderColor: "black",
              borderWidth: 1,
              borderStyle: "solid",
              // paddingHorizontal: 20,
            },
          }}
        />
        <Tab.Screen name="Maxico" component={MaxicoTab} />
        <Tab.Screen name="French" component={FrenchTab} />
        <Tab.Screen name="America" component={AmericaTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
