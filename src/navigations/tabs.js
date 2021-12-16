import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";

import { Home } from "../screens"
import { COLORS, FONTS, icons } from "../constants"

const Tab = createBottomTabNavigator()

const Tabs = () => {

    const TabBarCustomButton = ({ children, onPress }) => (
        <TouchableOpacity 
            style={{
                top: -35,
                alignItems: "center",
                justifyContent: "center",
                ...styles.shadow
            }}
            onPress={onPress}
        >
            <LinearGradient
                colors={[COLORS.primary, COLORS.secondary]}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 35
            }}>
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )

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
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? COLORS.primary : COLORS.gray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body5,
                    color: focused ? COLORS.primary : COLORS.gray,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.pie_chart}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? COLORS.primary : COLORS.gray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body5,
                    color: focused ? COLORS.primary : COLORS.gray,
                  }}
                >
                  Portfolio
                </Text>
              </View>
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
            tabBarButton: (props) => (
                <TabBarCustomButton {...props}/>
            )
          }}
        />
        <Tab.Screen
          name="Prices"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.line_graph}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? COLORS.primary : COLORS.gray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body5,
                    color: focused ? COLORS.primary : COLORS.gray,
                  }}
                >
                  Prices
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.settings}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? COLORS.primary : COLORS.gray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body5,
                    color: focused ? COLORS.primary : COLORS.gray,
                  }}
                >
                  Profile
                </Text>
              </View>
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