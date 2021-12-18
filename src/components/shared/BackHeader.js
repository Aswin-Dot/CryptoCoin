import React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import {
  icons,
  COLORS,
  SIZES,
  FONTS,
} from "../../constants";

const BackHeader = ({ favorite }) => {
    const navigation = useNavigation();

    return (
      <View
        style={{
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={icons.back_arrow}
              style={{ width: 25, height: 25, tintColor: COLORS.black }}
              resizeMode="contain"
            />
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.black,
                marginLeft: SIZES.base,
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
        </View>

        {favorite && (
          <View style={{ alignItems: "flex-end", flex: 1 }}>
            <TouchableOpacity onPress={() => console.log("fav")}>
              <Image
                source={icons.star}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
};

export default BackHeader;