import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import axios from "axios"; // Import Axios
import { styles } from "./style";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay"; // Import Spinner
import AsyncStorage from "@react-native-async-storage/async-storage"; 

export function InputEmail() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState(""); // State to store the email input
  const [loading, setLoading] = useState(false); // State to handle loading

  const handleFetchData = async () => {
    try {
      setLoading(true); // Show loading spinner
      const response = await axios.post(
        "https://server-side-quiz-react-native.vercel.app/user/otp",
        { email }
      );
      console.log("Response from backend:", response.data);
      // Set email in AsyncStorage
      await AsyncStorage.setItem("email", email);
      // Navigate to the next screen after receiving a successful response
      navigate("inputOtp");
    } catch (error) {
      console.error("Error fetching data:", error);
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
      <PrimaryButton title="Lanjutkan" onPress={handleFetchData} />
    </View>
  );
}
