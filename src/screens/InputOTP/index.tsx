import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import axios from "axios"; // Import Axios
import { styles } from "./style";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay"; // Import Spinner
import AsyncStorage from "@react-native-async-storage/async-storage";

export function InputOTP() {
  const { navigate } = useNavigation();
  const [otp, setOtp] = useState(""); // State to store the OTP entered by the user
  const [loading, setLoading] = useState(false); // State to handle loading
  const [email, setEmail] = useState(""); // State to store the email

  useEffect(() => {
    // Fetch email from AsyncStorage when component mounts
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

  const handleVerifyOtp = async () => {
    try {
      setLoading(true); // Show loading spinner

      const response = await axios.post(
        "https://server-side-quiz-react-native.vercel.app/user/submit-otp",
        {
          email: email, // Use the fetched email
          otp: otp,
        }
      );
      console.log("Response from backend:", response.data);

      // Proceed to the next screen if OTP verification is successful
      navigate("inputNewPass");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Handle error as needed
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
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
          <Text style={styles.title}>Kode Verifikasi</Text>
        </View>
        <View>
          <Text style={styles.subTitle}>
            Tolong salin kode verifikasi dari email untuk melakukan pemulihan
            akun
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { textAlign: "center" }]} // Center the placeholder text
            placeholder="Masukkan kode Anda"
            keyboardType="numeric"
            value={otp}
            onChangeText={(text) => setOtp(text)}
          />
        </View>
      </View>
      <PrimaryButton title="Lanjutkan" onPress={handleVerifyOtp} />
    </View>
  );
}
