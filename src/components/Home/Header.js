import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import {
  dummyData,
  icons,
  images,
  COLORS,
  SIZES,
  FONTS,
} from "../../constants";

const window = Dimensions.get("window");

const Header = () => {

    const navigation = useNavigation();

    const [dimensions, setDimensions] = useState({ window });
    const [trending, setTrending] = useState(dummyData.trendingCurrencies)

    useEffect(() => {
      const subscription = Dimensions.addEventListener(
        "change",
        ({ window }) => {
          setDimensions({ window });
        }
      );
      return () => subscription?.remove();
    });

    const renderTrending = ({item,index}) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("CryptoDetail", {
              currency: item
            })}
            style={{
              padding: SIZES.padding,
              width: 180,
              marginLeft: index == 0 ? SIZES.padding : 0,
              marginRight:
                index == trending.length - 1 ? SIZES.padding : SIZES.base,
              backgroundColor: COLORS.white,
              borderRadius: SIZES.radius,
              overflow: "visible",
              elevation: 3,
              marginBottom: SIZES.base,
            }}
          >
            {/*  currency */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{
                    height: 30,
                    width: 30,
                  }}
                />
              </View>

              <View style={{ marginLeft: SIZES.radius }}>
                <Text style={{ ...FONTS.h3, color: COLORS.black }}>
                  {item.currency}
                </Text>
                <Text style={{ ...FONTS.body4, color: COLORS.black }}>
                  {item.code}
                </Text>
              </View>
            </View>

            {/* Value */}
            <View
              style={{
                flexDirection: "column",
                marginTop: SIZES.base,
                justifyContent: "center",
              }}
            >
              <Text style={{ ...FONTS.h2, color: COLORS.black }}>
                ${item.amount}
              </Text>
              <Text
                style={{
                  ...FONTS.h3,
                  color: item.type == "I" ? COLORS.green : COLORS.red,
                }}
              >
                {item.changes}
              </Text>
            </View>
          </TouchableOpacity>
        );
    };

    return (
      <View
        style={{
          width: "100%",
          height: (dimensions.window.height * 40) / 100,
          overflow: "visible",
          marginBottom: "22.5%",
          ...styles.shadow,
        }}
      >
        <ImageBackground
          source={images.banner}
          style={{
            flex: 1,
            alignItems: "center",
            overflow: "visible",
          }}
          resizeMode="cover"
        >
          {/* Header bar */}
          <View
            style={{
              marginTop: SIZES.padding * 1.5,
              paddingHorizontal: SIZES.padding,
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              height: 40,
            }}
          >
            <TouchableOpacity onPress={() => console.log("menu")}>
              <Entypo name="menu" size={36} color={COLORS.white} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => console.log("notification")}
            >
              <Image
                source={icons.notification_white}
                style={{ flex: 1 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* Portfolio */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: SIZES.base,
            }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              Your Portfolio Value
            </Text>
            <Text
              style={{
                ...FONTS.h1,
                color: COLORS.white,
                marginVertical: SIZES.base,
              }}
            >
              ${dummyData.portfolio.balance}
            </Text>
            <Text style={{ ...FONTS.body5, color: COLORS.white }}>
              ${dummyData.portfolio.changes} last 24 hours
            </Text>
          </View>

          {/* Trending */}
          <View style={{ position: "absolute", bottom: "-30%" }}>
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.white,
                marginLeft: SIZES.padding,
              }}
            >
              Trending
            </Text>
            <FlatList
              contentContainerStyle={{ marginTop: SIZES.base }}
              keyExtractor={(item) => `${item.id}`}
              data={trending}
              renderItem={renderTrending}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
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

    elevation: 8,
  },
});

export default Header;