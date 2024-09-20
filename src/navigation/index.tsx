import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ScannerScreen from "../screens/ScannerScreen";
import { Image, StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const IconCss = {
  width: 20,
  height: 20,
  bgFocusColor: '#ef3f49',
  bgBlurColor: '#888'
}

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle:{
          position: "absolute",
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 15,
          backgroundColor: "#fff",
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <View 
              style={styles.tabContainer}
            >
              <Image 
                source={require("../../assets/images/homeDark.png")}
                resizeMode="contain"
                style={{
                  width: IconCss.width,
                  height: IconCss.height,
                  tintColor: focused ? IconCss.bgFocusColor : IconCss.bgBlurColor,
                }}
              />
              {/* <Text style={{color: focused ? "#ef3f49" : "#888", ...styles.tabText}}>Home</Text> */}
            </View>
          }
        }}
      />
      <Tab.Screen name="Scanner" component={ScannerScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <View 
              style={styles.tabContainer}
            >
              <Image 
                source={require("../../assets/images/scanner.png")}
                resizeMode="contain"
                style={{
                  width: IconCss.width,
                  height: IconCss.height,
                  tintColor: focused ? IconCss.bgFocusColor : IconCss.bgBlurColor,
                }}
              />
              {/* <Text style={{color: focused ? "#ef3f49" : "#888", ...styles.tabText}}>Scanner</Text> */}
            </View>
          }
        }}
      />
      <Tab.Screen name="List" component={ProductListScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <View 
              style={styles.tabContainer}
            >
              <Image 
                source={require("../../assets/images/listDark.png")}
                resizeMode="contain"
                style={{
                  width: IconCss.width,
                  height: IconCss.height,
                  tintColor: focused ? IconCss.bgFocusColor : IconCss.bgBlurColor,
                }}
              />
              {/* <Text style={{color: focused ? "#ef3f49" : "#888", ...styles.tabText}}>List</Text> */}
            </View>
          }
        }}
      />
      {/* <Tab.Screen name="" component={ScannerScreen}/>
      <Tab.Screen name="List" component={ProductListScreen}/> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor: 'grey',
    shadowOffset:{
      width: 0,
      height: 10
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.5,
    elevation: 5
  },
  tabContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabImage: {

  },
  tabText:{
    fontSize: 10
  }
})