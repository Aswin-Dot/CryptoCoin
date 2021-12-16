import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ListItem } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

import {
  dummyData,
  icons,
  images,
  theme,
  COLORS,
  SIZES,
  FONTS,
} from "../../constants";

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState(dummyData.transactionHistory);

    return (
      <View
        style={{
          flexDirection: "column",
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.base * 2,
          backgroundColor: COLORS.white,
          padding: SIZES.radius,
          borderRadius: SIZES.radius,
          ...styles.shadow,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.black,
            justifyContent: "flex-start",
            marginBottom: SIZES.base,
          }}
        >
          Transaction History
        </Text>

        {transactions.map((item, i) => (
          <TouchableOpacity key={i} onPress={() => console.log(item.amount)}>
            <ListItem
              bottomDivider={i == transactions.length - 1 ? false : true}
            >
              <MaterialIcons
                name="compare-arrows"
                size={28}
                color={COLORS.secondary}
              />
              <ListItem.Content
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <ListItem.Title style={{ ...FONTS.h4 }}>{item.description}</ListItem.Title>
                  <ListItem.Subtitle>{item.date}</ListItem.Subtitle>
                </View>

                <View>
                  <ListItem.Title
                    style={{
                      color: item.type == "S" ? COLORS.red : COLORS.green,
                    }}
                  >
                    {item.currency}
                  </ListItem.Title>
                  <ListItem.Subtitle
                    style={{
                      color: item.type == "S" ? COLORS.red : COLORS.green,
                    }}
                  >
                    {item.amount}
                  </ListItem.Subtitle>
                </View>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        ))}
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

export default TransactionHistory;