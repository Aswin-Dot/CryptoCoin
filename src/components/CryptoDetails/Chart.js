import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import {
  dummyData,
  icons,
  images,
  COLORS,
  SIZES,
  FONTS,
} from "../../constants";

const Chart = ({coin}) => {

    return (
      <View
        style={{
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.base * 2,
          marginBottom: SIZES.base,
          backgroundColor: COLORS.white,
          padding: SIZES.radius,
          borderRadius: SIZES.radius,
          ...styles.shadow,
        }}
      >
        {/* title */}
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ flex: 1, flexDirection: "row", alignItems: "flex-start" }}
          >
            <Image
              source={coin.image}
              style={{
                height: 25,
                width: 25,
                alignSelf: "center",
              }}
              resizeMode="cover"
            />
            <View style={{ flexDirection: "column", marginLeft: SIZES.base }}>
              <Text style={{ ...FONTS.h3, color: COLORS.black }}>
                {coin.currency}
              </Text>
              <Text style={{ ...FONTS.body3, color: COLORS.black }}>
                {coin.code}
              </Text>
            </View>
          </View>

          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.black }}>
              $ {coin.amount}
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                color: coin.type == "I" ? COLORS.green : COLORS.red,
              }}
            >
              {coin.changes}
            </Text>
          </View>
        </View>
      </View>
    );
};

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


export default Chart;