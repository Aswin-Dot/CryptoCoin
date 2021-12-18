import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  COLORS,
  SIZES,
  FONTS,
} from "../../constants";

const Notice = () => {
    return (
      <View
        style={{
          flexDirection: "column",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base ,
          backgroundColor: COLORS.secondary,
          padding: SIZES.radius,
          borderRadius: SIZES.radius,
          ...styles.shadow,
        }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.white }}>
          Investing Safely
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.white,
            lineHeight: 18,
            marginTop: SIZES.base,
          }}
        >
          Minim nisi pariatur do do et sint proident duis occaecat amet esse
          commodo. Dolore irure in aliquip veniam quis culpa ex ex occaecat
          pariatur commodo consequat mollit. Culpa exercitation nisi consequat
          est pariatur do consequat mollit commodo in minim eiusmod culpa.
          Consectetur esse cupidatat ut reprehenderit culpa dolore id ullamco.{" "}
        </Text>
        <TouchableOpacity style={{ marginTop: SIZES.base }}>
            <Text style={{ ...FONTS.body4, color: COLORS.green, textDecorationLine: "underline" }}>Lear More</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 3,
  },
});

export default Notice;