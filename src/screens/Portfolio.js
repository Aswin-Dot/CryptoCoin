import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import { connect } from "react-redux";

import { COLORS, SIZES, dummyData } from "../constants";

import { Header, Chart } from "../components/shared";
import MainLayout from "./MainLayout";

import { getCoinMarket, getHoldings } from "../redux/Market/actions";

const PortFolio = ({ myHoldings, coins, getCoinMarket, getHoldings }) => {
  useFocusEffect(
    React.useCallback(() => {
      getHoldings((myHoldings = dummyData.holdings));
      getCoinMarket();
    }, [])
  );

  return (
    <MainLayout>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View style={{ flex: 1, paddingBottom: 100 }}>
          {/* Header component */}
          <Header showTrending={false} />

          {/* Chart */}
          <View
            style={{
              flexDirection: "column",
              marginHorizontal: SIZES.padding,
              // marginVertical: SIZES.base ,
              // backgroundColor: COLORS.white,
              padding: SIZES.base,
              borderRadius: SIZES.radius,
              // ...styles.shadow,
            }}
          >
            <Chart chartPrices={coins[0]?.sparkline_in_7d?.price} />
          </View>

        </View>
      {/* </ScrollView> */}
    </MainLayout>
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

const mapStateToProps = (state) => {
  return {
    myHoldings: state.market.myHoldings,
    coins: state.market.coins,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHoldings: (
      holdings,
      currency,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) =>
      dispatch(
        getHoldings(
          holdings,
          currency,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      ),
    getCoinMarket: (
      holdings,
      currency,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) =>
      dispatch(
        getCoinMarket(
          holdings,
          currency,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortFolio);
