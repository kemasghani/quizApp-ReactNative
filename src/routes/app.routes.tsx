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
import { Kebijakan } from "../screens/Kebijakan";
import { Tentang } from "../screens/Tentang";
import { InputNewPass } from "../screens/InputNewPass";
import { Ranking } from "../screens/Ranking";
import { SuccessPass } from "../screens/SuccessPass";
import Profile from "../screens/Profile";
import profiledit from "../screens/ProfileEdit";
import Navigation from "../navigation";
const { Navigator, Screen, Group } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="navigation" component={Navigation} />
      <Screen name="login" component={Login} />
      <Group screenOptions={{ gestureEnabled: false }}>
        <Screen name="quiz" component={Quiz} />
        <Screen name="finish" component={Finish} />
      </Group>

      <Screen name="dashboard" component={Dashboard} />
      <Screen name="successPass" component={SuccessPass} />
      <Screen name="inputOtp" component={InputOTP} />
      <Screen name="kebijakan" component={Kebijakan} />
      <Screen name="tentang" component={Tentang} />
      <Screen name="inputNewPass" component={InputNewPass} />
      <Screen name="home" component={Home} />
      <Screen name="ranking" component={Ranking} />
      <Screen name="history" component={History} />
      <Screen name="inputEmail" component={InputEmail} />
      <Screen name="register" component={Register} />
      <Screen name="profile" component={Profile} />
      <Screen name="profiledit" component={profiledit} />
    </Navigator>
  );
}
