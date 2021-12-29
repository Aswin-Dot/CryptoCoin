import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import { connect } from "react-redux";

import { Header } from "../components/shared";
import MainLayout from "./MainLayout";

import { getCoinMarket, getHoldings } from "../redux/Market/actions";

import { dummyData } from "../constants";

const PortFolio = ({ myHoldings, coins, getCoinMarket, getHoldings }) => {
  useFocusEffect(
    React.useCallback(() => {
      getHoldings((myHoldings = dummyData.holdings));
      getCoinMarket();
    }, [])
  );

  return (
    <MainLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingBottom: 100 }}>
          {/* Header component */}
          <Header showTrending={false} />

        </View>
      </ScrollView>
    </MainLayout>
  );
};

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
