import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "../screens/Dashboard";
import ProfileTab from "../screens/Profile";
import Riwayat from "../screens/Riwayat";
import Notifikasi from "../screens/Notifikasi";
import { Ionicons } from "@expo/vector-icons";
import CustomTabBar from "./customTabBar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  function MyTabs() {
    return (
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />} // Use CustomTabBar component
      >
        <Tab.Screen
          name="DashboardTabs"
          component={Dashboard}
          options={{
            headerShown: false,
            tabBarLabel: "Beranda",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="RiwayatTabs"
          component={Riwayat}
          options={{
            headerShown: false,
            tabBarLabel: "Riwayat",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "time" : "time-outline"} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="NotifikasiTabs"
          component={Notifikasi}
          options={{
            headerShown: false,
            tabBarLabel: "Notifikasi",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "notifications" : "notifications-outline"} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileTabs"
          component={ProfileTab}
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}
