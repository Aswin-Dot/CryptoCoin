import React from "react";
import {
    View,
    Image,
    StyleSheet,
    // TouchableOpacity
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";

import { Home, Portfolio, Market, Profile } from "../screens";
import { TabIcon } from "../components/shared"
import { COLORS, icons } from "../constants";

import { setTradeModalVisibility } from "../redux/Tab/actions";

const Tab = createBottomTabNavigator()

const Tabs = ({ setTradeModalVisibility, isTradeModalVisible }) => {
  const TabBarCustomButton = ({ children }) => (
    <TouchableOpacity
      hitSlop={{ top: 50 }}
      style={{
        top: -30,
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
        zIndex: 9999,
        ...styles.shadow,
      }}
      onPress={() => setTradeModalVisibility(!isTradeModalVisible)}
    >
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={{
          width: 60,
          height: 60,
          borderRadius: 35,
          // borderWidth: 3,
          // borderColor: COLORS.white
        }}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          height: "8.5%",
          borderTopColor: "transparent",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            !isTradeModalVisible ? (
              <TabIcon focused={focused} icon={icons.home} label="Home" />
            ) : null,
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) =>
            !isTradeModalVisible ? (
              <TabIcon
                focused={focused}
                icon={icons.pie_chart}
                label="Portfolio"
              />
            ) : null,
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            !isTradeModalVisible ? (
              <Image
                source={icons.transaction}
                resizeMode="contain"
                style={{
                  height: 35,
                  width: 35,
                  tintColor: COLORS.white,
                }}
              />
            ) : (
              <Entypo name="cross" size={40} color={COLORS.white} />
            ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ focused }) =>
            !isTradeModalVisible ? (
              <TabIcon
                focused={focused}
                icon={icons.line_graph}
                label="Market"
              />
            ) : null,
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            !isTradeModalVisible ? (
              <TabIcon
                focused={focused}
                icon={icons.settings}
                label="Profile"
              />
            ) : null,
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

const mapStateToProps = (state) => {
  return {
    isTradeModalVisible: state.tab.isTradeModalVisible
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setTradeModalVisibility: (isVisible) =>  dispatch(setTradeModalVisibility(isVisible))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);