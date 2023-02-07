import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// import { useNavigation } from "@react-navigation/native";

const Tabnav = ({ navigation }) => {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.tabcontainer}>
        <Text style={styles.txt} onPress={() => navigation.navigate("Hot")}>
          Hot
        </Text>
        <Text style={styles.txt}>America</Text>
        <Text style={styles.txt}>French</Text>
        <Text style={styles.txt}>Maxico</Text>
      </View>
    </View>
  );
};

export default Tabnav;

const styles = StyleSheet.create({
  container: {
    padding: 22,
  },
  tabcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  txt: {
    color: "black",
    fontWeight: "300",
  },
});
