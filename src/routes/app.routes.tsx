import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Dashboard } from "../screens/Dashboard";
import { Home } from "../screens/Home";
import { InputEmail } from "../screens/InputEmail";
import { Quiz } from "../screens/Quiz";
import { Finish } from "../screens/Finish";
import { History } from "../screens/History";
import { Register } from "../screens/Register";
import { Login } from "../screens/Login";
import { InputOTP } from "../screens/InputOTP";
import { SuccessPass } from "../screens/SuccessPass";
import Navigation from "../navigation";
import { Ranking } from "../screens/Ranking";
const { Navigator, Screen, Group } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="login" component={Login} />
      <Screen name="navigation" component={Navigation} />
      <Screen name="ranking" component={Ranking} />
      <Group screenOptions={{ gestureEnabled: false }}>
        <Screen name="quiz" component={Quiz} />
        <Screen name="finish" component={Finish} />
      </Group>

      <Screen name="dashboard" component={Dashboard} />
      <Screen name="successPass" component={SuccessPass} />
      <Screen name="inputOtp" component={InputOTP} />
      <Screen name="home" component={Home} />
      <Screen name="history" component={History} />
      <Screen name="inputEmail" component={InputEmail} />
      <Screen name="register" component={Register} />

    </Navigator>
  );
}
