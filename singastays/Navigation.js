import * as React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
// Import components
import HomeScreen from "./HomeScreen";
import AttractionScreen from "./AttractionScreen";
import ProfileScreen from "./ProfileScreen";
import LoginScreen from "./LoginScreen";
// Import the Logo component
import Logo from "./assets/logo.svg";
import AttractionDetail from "./AttractionDetail";

// Custom header component
function CustomHeader() {
  return (
    <View style={styles.headerContainer}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    // height: 60,
    backgroundColor: "#fff",
    paddingTop: 25,
    paddingBottom: 20,
  },
});

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Attraction") {
              iconName = focused ? "location" : "location-outline";
            } else if (rn === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#244D3B", // Change active tab color here
          tabBarInactiveTintColor: "#44546F", // Change inactive tab color here
          tabBarLabelStyle: { display: "none" }, // Hide the label
          tabBarStyle: { paddingTop: 10, paddingBottom: 10 }, // Adjust tab bar style here
          header: () => <CustomHeader />, // Use the custom header
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* Change AttractionScreen to AttractionDetail for testing */}
        {/* <Tab.Screen name="Attraction" component={AttractionScreen} /> */}
        <Tab.Screen name="Attraction" component={AttractionDetail} />
        <Tab.Screen name="Profile" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
