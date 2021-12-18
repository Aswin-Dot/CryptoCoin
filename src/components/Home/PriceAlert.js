import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  icons,
  COLORS,
  SIZES,
  FONTS,
} from "../../constants";

const PriceAlert = () => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          backgroundColor: COLORS.white,
          paddingVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          ...styles.shadow,
        }}
      >
        <View style={{ justifyContent: "center", paddingLeft: SIZES.base }}>
          <Image
            source={icons.notification_color}
            style={{
              width: 25,
              height: 25,
            }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{ justifyContent: "flex-start", marginLeft: SIZES.base }}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.black }}>
            Set Price Alert
          </Text>
          <Text style={{ ...FONTS.body5, color: COLORS.gray }}>
            Get notifications when your coins are moving
          </Text>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center", marginRight: SIZES.base }}>
          <Image
            source={icons.right_arrow}
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.gray,
            }}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
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

export default PriceAlert;
