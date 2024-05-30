import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Finish } from "../screens/Finish";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Dashboard } from "../screens/Dashboard";
import { History } from "../screens/History";
import { Quiz } from "../screens/Quiz";
import Notifikasi from "../screens/Notifikasi";
import { InputEmail } from "../screens/InputEmail";
import { InputOTP } from "../screens/InputOTP";
import { Kebijakan } from "../screens/Kebijakan";
import { Tentang } from "../screens/Tentang";
import { InputNewPass } from "../screens/InputNewPass";
import Profile from "../screens/Profile";
import { SuccessPass } from "../screens/SuccessPass";
import { Ionicons } from "@expo/vector-icons";
import CustomTabBar from "./customTabBar";
import { Ranking } from "../screens/Ranking";
import ProfileEditScreen from "../screens/ProfileEdit";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  function MyTabs() {
    return (
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />} // Use CustomTabBar component
      >
        <Tab.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
            tabBarLabel: "Beranda",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="history"
          component={History}
          options={{
            headerShown: false,
            tabBarLabel: "Riwayat",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "time" : "time-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="notifikasi"
          component={Notifikasi}
          options={{
            headerShown: false,
            tabBarLabel: "Notifikasi",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "notifications" : "notifications-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="quiz"
          component={Quiz}
          options={{
            headerShown: false,
            tabBarLabel: "Quiz",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="finish"
          component={Finish}
          options={{
            headerShown: false,
            tabBarLabel: "Finish",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ranking"
          component={Ranking}
          options={{
            headerShown: false,
            tabBarLabel: "ranking",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "time" : "time-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
            tabBarLabel: "Login",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="register"
          component={Register}
          options={{
            headerShown: false,
            tabBarLabel: "Register",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="inputEmail"
          component={InputEmail}
          options={{
            headerShown: false,
            tabBarLabel: "Register",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="inputOtp"
          component={InputOTP}
          options={{
            headerShown: false,
            tabBarLabel: "Register",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="kebijakan"
          component={Kebijakan}
          options={{
            headerShown: false,
            tabBarLabel: "Register",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="tentang"
          component={Tentang}
          options={{
            headerShown: false,
            tabBarLabel: "Register",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="inputNewPass"
          component={InputNewPass}
          options={{
            headerShown: false,
            tabBarLabel: "Register",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="successPass"
          component={SuccessPass}
          options={{
            headerShown: false,
            tabBarLabel: "Register",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="profiledit"
          component={ProfileEditScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Register",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
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
