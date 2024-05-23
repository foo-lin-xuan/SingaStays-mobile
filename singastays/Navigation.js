import * as React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
// Import components
import HomeScreen from "./HomeScreen";
import AttractionScreen from "./AttractionScreen";
import AttractionDetail from "./AttractionDetail";
import ProfileScreen from "./ProfileScreen";
// import LoginScreen from "./LoginScreen";
// Import the Logo component
import Logo from "./assets/logo.svg";

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
    backgroundColor: "#fff",
    paddingTop: 25,
    paddingBottom: 20,
    ...Platform.select({
      ios: {
        paddingTop: 55,
      },
    }),
  },
});

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NestedHome" // Rename the nested "Home" screen to "NestedHome"
        component={HomeScreen}
        options={{
          header: () => <CustomHeader />,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AttractionDetail"
        component={AttractionDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

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
            } else if (rn === "AttractionScreen") {
              iconName = focused ? "location" : "location-outline";
            } else if (rn === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Icon name={iconName} size={size * 1.15} color={color} />;
          },
          tabBarActiveTintColor: "#244D3B", // Change active tab color here
          tabBarInactiveTintColor: "#44546F", // Change inactive tab color here
          tabBarLabelStyle: { display: "none" }, // Hide the label
          tabBarStyle: {
            paddingTop: 20,
            paddingBottom: 20,
            height: 70,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            ...Platform.select({
              ios: {
                shadowColor: "#585555",
                shadowOffset: { width: 5, height: -2 },
                shadowOpacity: 0.2,
                shadowRadius: 30,
                borderTopWidth: 0,
              },
              android: {
                elevation: 30,
                shadowColor: "#585555",
                shadowOffset: { width: 5, height: -2 },
                shadowOpacity: 0.2,
                shadowRadius: 30,
              },
            }),
          },
          header: () => <CustomHeader />, // Use the custom header
        })}
      >
        <Tab.Screen name="Home" component={MainStackNavigator} />
        <Tab.Screen name="AttractionScreen" component={AttractionScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
