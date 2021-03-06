import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { BackHeader } from '../components/shared';
import { Chart, Wallet, About } from '../components/CryptoDetails';
import { PriceAlert } from '../components/Home';

const CryptoDetail = ({ route }) => {
    let { currency } = route.params;
    
    return (
      <SafeAreaView>
        {/* Back Header */}
        <BackHeader favorite={true} />

        {/* Body */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingBottom: 40 }}>
            {/* chart */}
            <Chart coin={currency} />

            {/* Wallet */}
            <Wallet coin={currency} />

            {/* About */}
            <About coin={currency} />

            {/* Price Alert */}
            <PriceAlert />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default CryptoDetail;