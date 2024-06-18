import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, TextInput, Button } from "react-native";
import axios from "axios";
import { styles } from "./style";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Dialog,
  AlertNotificationRoot,
  ALERT_TYPE,
} from "react-native-alert-notification";
import { API_URL } from "@env";
import { Header } from "../../components/Header";
import Back from "../../assets/back.svg";

export function InputNewPass() {
  const { navigate } = useNavigation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    getEmailFromStorage();
  }, []);

  const getEmailFromStorage = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("email");
      if (storedEmail) {
        setEmail(storedEmail);
      }
    } catch (error) {
      console.error("Error fetching email from storage:", error);
    }
  };

  const handleUpdatePassword = async () => {
    try {
      setLoading(true);

      if (newPassword !== confirmPassword) {
        // Use the Dialog to show the alert notification
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: "Error",
          textBody: "Kata sandi tidak sesuai",
          button: "Close",
        });
        return;
      }

      const response = await axios.post(`${API_URL}/user/change-pass`, {
        email: email,
        newPassword: newPassword,
      });
      console.log("Response from backend:", response.data);
      navigate("successPass");
    } catch (error) {
      console.error("Error updating password:", error);
      // Handle error as needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertNotificationRoot>
      <Header title="Back" subtitle={`Back`} icon1={Back} icon2={null} />
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Spinner
            visible={loading}
            textContent={"Loading..."}
            textStyle={styles.spinnerText}
          />
          <Image
            style={{ width: 300, height: 300 }}
            source={require("../../assets/smarta-icon.png")}
          />
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>Pemulihan Kata Sandi</Text>
            </View>
            <View>
              <Text style={styles.subTitle}>Masukkan kata sandi baru</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Masukkan password baru"
                secureTextEntry={true}
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
              />
            </View>
            <View style={styles.inputContainer2}>
              <TextInput
                style={styles.input}
                placeholder="Masukkan konfirmasi password"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>
          </View>
          <PrimaryButton title="Lanjutkan" onPress={handleUpdatePassword} />
        </View>
      </ScrollView>
    </AlertNotificationRoot>
  );
}
