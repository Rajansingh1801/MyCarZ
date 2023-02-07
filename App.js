import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Home from "./src/pages/Home";
import All_Route from "./src/routes/All_Route";
import Tabs from "./src/routes/Tabs";

export default function App() {
  return (
    <>
      {/* <Tabs /> */}
      {/* <All_Route /> */}
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
