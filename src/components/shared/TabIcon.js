import React from "react";
import { View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, FONTS, icons } from "../../constants";

const TabIcon = ({ focused, isTrade, icon, label }) => (
  <View
    style={{
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "center",
    }}
  >
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        height: 30,
        width: 30,
        tintColor: focused ? COLORS.primary : COLORS.gray,
      }}
    />
    <Text
      style={{
        ...FONTS.body5,
        color: focused ? COLORS.primary : COLORS.gray,
      }}
    >
      {label}
    </Text>
  </View>
);

export default TabIcon;
