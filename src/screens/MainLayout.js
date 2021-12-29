import React, { useRef, useEffect } from "react";
import { View, Animated, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-elements";

import { FontAwesome5 } from "@expo/vector-icons";

import {
  COLORS,
  SIZES,
} from "../constants";

const MainLayout = ({ children, isTradeModalVisible }) => {

  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if(isTradeModalVisible) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 350,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 350,
        useNativeDriver: false,
      }).start();
    }
  }, [isTradeModalVisible])

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 212]
  })

  return (
    <View style={{ flex: 1 }}>
      {children}

      {/* Dim Layout */}
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: COLORS.transparentBlack1,
        }}
        opacity={modalAnimatedValue}
      />

      {/* Modal */}
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          top: modalY,
          width: "100%",
          padding: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
          backgroundColor: COLORS.white,
          borderTopRightRadius: SIZES.radius,
          borderTopStartRadius: SIZES.radius,
        }}
      >
        <Button
          TouchableComponent={TouchableOpacity}
          onPress={() => console.log("Transfer")}
          buttonStyle={{
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          icon={
            <FontAwesome5
              name="paper-plane"
              size={16}
              color={COLORS.white}
              style={{ marginRight: 10 }}
            />
          }
          title="Transfer"
        />
        <Button
          TouchableComponent={TouchableOpacity}
          onPress={() => console.log("Withdraw")}
          buttonStyle={{
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          icon={
            <FontAwesome5
              name="arrow-circle-down"
              size={16}
              color={COLORS.white}
              style={{ marginRight: 10 }}
            />
          }
          title="Withdraw"
        />
      </Animated.View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    isTradeModalVisible: state.tab.isTradeModalVisible
  }
};

export default connect(mapStateToProps)(MainLayout);
