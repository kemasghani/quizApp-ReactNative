import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Dashboard } from "../screens/Dashboard";
import { Home } from "../screens/Home";
import { Quiz } from "../screens/Quiz";
import { Finish } from "../screens/Finish";
import { History } from "../screens/History";
import { Register } from '../screens/Register';
import { Login } from '../screens/Login';
const { Navigator, Screen, Group } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="dashboard" component={Dashboard} />



      <Group screenOptions={{ gestureEnabled: false }}>
        <Screen name="quiz" component={Quiz} />
        <Screen name="finish" component={Finish} />
      </Group>

      <Screen name="home" component={Home} />
      <Screen
        name="history"
        component={History}
      />

      <Screen
        name="register"
        component={Register}
      />

      <Screen
        name="login"
        component={Login}
      />
    </Navigator>
  );
}
