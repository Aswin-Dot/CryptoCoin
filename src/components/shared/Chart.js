import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";
import {
  ChartDot,
  ChartXLabel,
  ChartYLabel,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";

import {
  LineChart,
} from "react-native-chart-kit";


import {
  dummyData,
  icons,
  images,
  COLORS,
  SIZES,
  FONTS,
} from "../../constants";

const Charts = ({chartPrices}) => {
    
    // Points
    let startUnixTimestamp = moment().subtract(7, "day").unix();

    let data = chartPrices ? chartPrices?.map((item, index) => {
        return {
            x: startUnixTimestamp + (index + 1) * 3600,
            y: item
        }
    }) : []

    const points = monotoneCubicInterpolation({ data, range: 40 });

    return (
      // <View>
      //   <LineChart
      //     data={{
      //       labels: ["January", "February", "March", "April", "May", "June"],
      //       datasets: [
      //         {
      //           data: [
      //             Math.random() * 100,
      //             Math.random() * 100,
      //             Math.random() * 100,
      //             Math.random() * 100,
      //             Math.random() * 100,
      //             Math.random() * 100,
      //           ],
      //         },
      //       ],
      //     }}
      //     width={Dimensions.get("window").width - 70} // from react-native
      //     height={220}
      //     // yAxisLabel="$"
      //     // yAxisSuffix="k"
      //     yAxisInterval={1} // optional, defaults to 1
      //     chartConfig={{
      //       backgroundColor: "#e26a00",
      //       backgroundGradientFrom: "#fb8c00",
      //       backgroundGradientTo: "#ffa726",
      //       decimalPlaces: 2, // optional, defaults to 2dp
      //       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      //       labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      //       style: {
      //         borderRadius: 16,
      //       },
      //       propsForDots: {
      //         r: "6",
      //         strokeWidth: "2",
      //         stroke: "#ffa726",
      //       },
      //     }}
      //     bezier
      //     style={{
      //       marginVertical: 8,
      //       borderRadius: 16,
      //     }}
      //   />
      // </View>

      <View style={{ backgroundColor: "black" }}>
        <ChartPathProvider data={{ points, smoothingStrategy: "bezier" }}>
          <ChartPath height={SIZES.height / 2} stroke="yellow" width={SIZES.width} />
          <ChartDot style={{ backgroundColor: "blue" }} />
        </ChartPathProvider>
      </View>
    );
};

export default Charts;