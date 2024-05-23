import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { styles } from "./style";
import PrimaryButton from "../../components/PrimaryButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification";
import Spinner from "react-native-loading-spinner-overlay"; // Import Spinner

export function Login() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const requestBody = {
        email: email,
        password: password,
      };
      console.log("Request Body:", requestBody);

      const response = await axios.post(
        "http://192.168.137.1:3000/user/login",
        requestBody, // Use the requestBody in the post request
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Extract the user ID from the response
      const userId = response.data.data.id;

      console.log(response);

      // Store the user ID and email in AsyncStorage
      await AsyncStorage.setItem("userId", userId);
      await AsyncStorage.setItem("tokenEmail", email);
      await AsyncStorage.setItem("loggedIn", "true");
      navigate("dashboard");
    } catch (error) {
      setLoading(false);
      console.log(error);
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "Email atau password salah !",
        button: "OK",
      });
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
