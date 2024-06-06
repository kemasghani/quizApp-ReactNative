import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import PrimaryButton from "../../components/PrimaryButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation, CommonActions } from "@react-navigation/native";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification";
import Spinner from "react-native-loading-spinner-overlay"; // Import Spinner
import { API_URL } from "@env";

export function Login() {
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "Warning",
        textBody: "Input tidak boleh kosong",
        button: "Close",
      });
      return;
    }

    try {
      setLoading(true);

      const requestBody = {
        email: email,
        password: password,
      };
      console.log("Request Body:", requestBody);

      const response = await axios.post(`${API_URL}/user/login`, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const userId = response.data.data.id;
      const username = response.data.data.username;
      const getdata = await axios.get(`${API_URL}/user/${userId}`);
      const userData = getdata.data[0];
      console.log("userData:", userData.umur);

      // Helper function to store non-null/undefined values in AsyncStorage
      const safeSetItem = async (key, value) => {
        if (value !== null && value !== undefined) {
          await AsyncStorage.setItem(key, value.toString());
        }
      };

      // Store the user data in AsyncStorage
      await safeSetItem("userId", userId);
      await safeSetItem("tokenEmail", email);
      await safeSetItem("username", username);
      await safeSetItem("domisili", userData.domisili);
      await safeSetItem("umur", userData.umur);
      await safeSetItem("avatar", userData.avatar);
      await safeSetItem("loggedIn", "true");

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "dashboard" }],
        })
      );
    } catch (error) {
      console.log(error);
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "Email atau password salah !",
        button: "OK",
      });
      console.log("modal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("../../assets/smarta-icon.png")}
        />
        <View style={styles.loginCard}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <Text style={styles.inputLabel}>Kata Sandi</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity
            style={{ alignItems: "flex-end", marginBottom: 13 }}
            onPress={() => navigate("inputEmail")}
          >
            <Text style={styles.textLink}>Lupa Kata Sandi?</Text>
          </TouchableOpacity>
          <View style={{ alignContent: "center", alignItems: "center" }}>
            <PrimaryButton title="Login" onPress={handleLogin} />
            <Spinner
              visible={loading}
              textContent={"Loading..."}
              textStyle={styles.spinnerText}
            />
            <View style={styles.footer}>
              <Text style={styles.footerText}>Belum Memiliki Akun? </Text>
              <TouchableOpacity onPress={() => navigate("register")}>
                <Text style={styles.textLink}>Daftar Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </AlertNotificationRoot>
  );
}
