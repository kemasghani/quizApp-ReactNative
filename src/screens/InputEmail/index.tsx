import React, { useState } from "react";
import { View, Text, ScrollView, Image, TextInput } from "react-native";
import axios from "axios";
import { styles } from "./style";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay"; // Import Spinner
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";
import { Header } from "../../components/Header";
import Back from "../../assets/back.svg";
import {
  Dialog,
  AlertNotificationRoot,
  ALERT_TYPE,
} from "react-native-alert-notification";

export function InputEmail() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState(""); // State to store the email input
  const [loading, setLoading] = useState(false); // State to handle loading

  const handleFetchData = async () => {
    try {
      if (email.trim() === "") {
        Dialog.show({
          type: ALERT_TYPE.WARNING,
          title: "Warning",
          textBody: "Alamat email tidak boleh kosong",
          button: "Close",
        });
        return;
      }

      setLoading(true); // Show loading spinner
      const response = await axios.post(`${API_URL}/user/otp`, { email });
      console.log("Response from backend:", response.data);
      // Set email in AsyncStorage
      await AsyncStorage.setItem("email", email);
      // Navigate to the next screen after receiving a successful response
      navigate("inputOtp");
    } catch (error) {
      console.log("Error fetching data:", error);
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Warning",
        textBody: "Alamat email tidak ditemukan",
        button: "Close",
      });
      // Handle error as needed
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <Spinner
          visible={loading}
          textContent={"Loading..."}
          textStyle={styles.spinnerText}
        />
        <Header title="Back" subtitle={`Back`} icon1={Back} icon2={null} />
        <ScrollView style={styles.scroll}>
          <View style={styles.contentContainer}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 250,
                  height: 250,
                }}
                source={require("../../assets/smarta-icon.png")}
              />
            </View>
            <View style={styles.content}>
              <View>
                <Text style={styles.title}>Lupa Kata Sandi</Text>
              </View>
              <View>
                <Text style={styles.subTitle}>
                  Masukkan alamat email kamu untuk membuat kata sandi baru
                </Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Masukkan alamat email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <PrimaryButton title="Lanjutkan" onPress={handleFetchData} />
            </View>
          </View>
        </ScrollView>
      </View>
    </AlertNotificationRoot>
  );
}
