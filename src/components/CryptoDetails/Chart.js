import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Animated,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { VictoryLine, VictoryScatter, VictoryChart, VictoryAxis } from "victory-native";
import { VictoryCustomTheme } from "../../styles";

import {
  dummyData,
  icons,
  images,
  COLORS,
  SIZES,
  FONTS,
} from "../../constants";

const Chart = ({coin}) => {

  const scrollX = new Animated.Value(0);
  const numberOfCharts = [1,2,3]

  const [chartOptions, setChartoptions] = useState(dummyData.chartOptions);
  const [selectedOption, setSelectedOption] = useState(chartOptions[0]);

  const renderDots = () => {
    const dotPosition = new Animated.divide(scrollX, SIZES.width)

    return(
      <View style={{ height: 30, marginTop: SIZES.base }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center' }}>
          {numberOfCharts.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 0, 0.3],
              extrapolate: "clamp"
            });

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 0, SIZES.base * 0.8],
              extrapolate: "clamp",
            });

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                backgroundColor={dotColor}
                style={{ 
                  borderRadius: SIZES.radius,
                  marginHorizontal: SIZES.base,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor
                }}
              />
            )
          })}
        </View>

      </View>
    )
  }

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
        {/* Header */}
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

        {/* Chart */}
        <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="center"
          snapToInterval={SIZES.width - 40}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x: scrollX },
                },
              },
            ],
            { useNativeDriver: false }
          )}
        >
          {numberOfCharts.map((item, index) => (
            <View
              key={`chart-${index}`}
              style={{ marginRight: index == item.length - 1 ? 0 : "auto" }}
            >
              <View style={{ marginTop: -25 }}>
                <VictoryChart
                  theme={VictoryCustomTheme}
                  height={220}
                  width={SIZES.width - 40}
                >
                  <VictoryLine
                    style={{
                      data: {
                        stroke: COLORS.secondary,
                      },
                      parent: {
                        border: "1px solid #ccc",
                      },
                    }}
                    data={coin?.chartData}
                    categories={{
                      x: ["15MIN", "30MIN", "45MIN", "60MIN"],
                      Y: ["15", "30", "45"],
                    }}
                  />
                  <VictoryScatter
                    data={coin?.chartData}
                    size={7}
                    style={{
                      data: {
                        fill: COLORS.secondary,
                      },
                    }}
                  />
                  <VictoryAxis
                    style={{
                      grid: {
                        stroke: "transparent",
                      },
                    }}
                  />
                  <VictoryAxis
                    dependentAxis
                    style={{
                      axis: {
                        stroke: "transparent",
                      },
                      grid: {
                        stroke: "grey",
                      },
                    }}
                  />
                </VictoryChart>
              </View>
            </View>
          ))}
        </Animated.ScrollView>

        {/* Options */}
        <View style={{ marginHorizontal: SIZES.base, marginBottom: SIZES.base * 0.75 }}>
          <FlatList
            data={chartOptions}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    marginRight:
                      index == chartOptions.length - 1 ? 0 : SIZES.base,
                    backgroundColor:
                      selectedOption.id == item.id
                        ? COLORS.secondary
                        : COLORS.lightGray1,
                    borderRadius: 50,
                    paddingVertical: SIZES.base * 0.75,
                    paddingHorizontal: SIZES.padding * 0.75,
                  }}
                  onPress={() => setSelectedOption(chartOptions[index])}
                >
                  <Text
                    style={{
                      color:
                        selectedOption.id == item.id
                          ? COLORS.white
                          : COLORS.gray,
                      ...FONTS.body4,
                    }}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* Dots */}
        {renderDots()}
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