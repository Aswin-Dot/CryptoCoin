import React from 'react';
import {
    View,
    ScrollView,
} from 'react-native';

import {
  Header,
  PriceAlert,
  Notice,
} from "../components/Home";
import { TransactionHistory } from "../components/shared"

import {
  dummyData,
} from "../constants";

const Home = () => {
    return (
      <ScrollView>
        <View style={{ flex: 1, paddingBottom: 100 }}>
          {/* Header component */}
          <Header  />

          {/* Price Alert */}
          <PriceAlert />

          {/* Notice */}
          <Notice/>

          {/* Transaction */}
          <TransactionHistory transactions={dummyData.transactionHistory}/>
        </View>
      </ScrollView>
    );
}

export default Home;