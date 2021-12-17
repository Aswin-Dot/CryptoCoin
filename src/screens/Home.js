import React from 'react';
import {
    View,
    ScrollView,
} from 'react-native';

import {
  Header,
  PriceAlert,
  Notice,
  TransactionHistory,
} from "../components/Home";

const Home = () => {
    return (
      <ScrollView>
        <View style={{ flex: 1, paddingBottom: 110 }}>
          {/* Header component */}
          <Header  />

          {/* Price Alert */}
          <PriceAlert />

          {/* Notice */}
          <Notice/>

          {/* Transaction */}
          <TransactionHistory/>
        </View>
      </ScrollView>
    );
}

export default Home;