import React from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import { COLORS, SIZES } from "../constants";

import {
  Header,
  PriceAlert,
  Notice,
  TransactionHistory,
} from "../components/Home";

const Home = ({ navigation }) => {
    return (
      <ScrollView>
        <View style={{ flex: 1, paddingBottom: 110 }}>
          {/* Header component */}
          <Header />

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