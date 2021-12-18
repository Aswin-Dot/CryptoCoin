import React from "react";
import { View, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { BackHeader } from "../components/shared";
import { Trade } from "../components/Transaction";
import { TransactionHistory } from "../components/shared";

const Transaction = ({ route }) => {
  let { currency } = route.params;

  return (
    <SafeAreaView>
      {/* Back Header */}
      <BackHeader favorite={false} />

      {/* Body */}
      <ScrollView>
        <View style={{ flex: 1, paddingBottom: 50 }}>
          {/* chart */}
          <Trade coin={currency} />

          {/* Transaction */}
          <TransactionHistory transactions={currency.transactionHistory} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transaction;
