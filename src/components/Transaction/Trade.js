import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  COLORS,
  SIZES,
  FONTS,
} from "../../constants";

const Trade = ({ coin }) => {
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
      <View style={{ flexDirection: "column", marginHorizontal: SIZES.base }}>
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
      </View>

      {/* Amount */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: SIZES.base,
        }}
      >
        <Text style={{ ...FONTS.h1, color: COLORS.black }}>
          {`${coin.wallet.crypto} ${coin.code}`}
        </Text>
        <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
          ${coin.amount}
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        onPress={() => console.log("trade")}
        style={{
          flex: 1,
          margin: SIZES.base,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.green,
            paddingVertical: SIZES.base,
            borderRadius: SIZES.radius,
          }}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>Trade</Text>
        </View>
      </TouchableOpacity>
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

export default Trade;
