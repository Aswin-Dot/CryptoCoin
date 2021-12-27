import React from "react";
import { View } from "react-native";

const MainLayout = ({ children }) => (
  <View style={{ flex: 1 }}>{children}</View>
);

export default MainLayout;
