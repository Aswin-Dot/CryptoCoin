import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import { BottomSheet, Button, ListItem } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import { Home, Transaction, Portfolio, Market, Profile } from "../screens";
import { TabIcon } from "../components/shared"
import { COLORS, FONTS, icons } from "../constants";

const Tab = createBottomTabNavigator()

const Tabs = () => {

    const TabBarCustomButton = ({ children }) => (
      <TouchableOpacity
        style={{
          top: -35,
          alignItems: "center",
          justifyContent: "center",
          ...styles.shadow,
        }}
        onPress={() => console.log("Press")}
      >
        <LinearGradient
          colors={[COLORS.primary, COLORS.secondary]}
          style={{
            width: 60,
            height: 60,
            borderRadius: 35,
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
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.home} label="Home" />
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                icon={icons.pie_chart}
                label="Portfolio"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Transaction"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.transaction}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  tintColor: COLORS.white,
                }}
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Market"
          component={Market}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                icon={icons.line_graph}
                label="Market"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                icon={icons.settings}
                label="Profile"
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
}

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

export default Tabs;