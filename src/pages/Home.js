import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Tabnav from "../component/Tabnav";
import Tabs from "../routes/Tabs";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgCont}>
        <Image
          source={require("../../assets/images/logo1.png")}
          style={styles.img1}
          resizeMode="contain"
        />
      </View>
      <View>{/* <Tabnav /> */}</View>
      <Tabs style={styles.tab} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 22,
    width: "100%",
    height: "100%",
    backgroundColor: "#96C7AA",
  },
  imgCont: {
    justifyContent: "center",
    alignItems: "center",
  },
  img1: {
    alignContent: "center",
    justifyContent: "center",
    width: 251,
    height: 93,
  },
  tab: {
    backgroundColor: "black",
  },
});
