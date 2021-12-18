import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, FONTS } from "../../constants";

const Wallet = ({ coin }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.base,
        backgroundColor: COLORS.white,
        padding: SIZES.radius,
        borderRadius: SIZES.radius,
        ...styles.shadow,
      }}
    >
      <View style={{ flexDirection: "row", marginBottom: SIZES.base }}>
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

        <View
          style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.black }}>
            $ {coin.wallet.value}
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.gray,
            }}
          >
            {`${coin.wallet.crypto} ${coin.code}`}
          </Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Transaction", {currency: coin})}
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
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>Buy</Text>
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

export default Wallet;
