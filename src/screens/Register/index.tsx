import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import axios from "axios";
import PrimaryButton from "../../components/PrimaryButton";
import Spinner from "react-native-loading-spinner-overlay";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { API_URL } from "@env";
import { Header } from "../../components/Header";
import Back from "../../assets/back.svg";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification";

export function Register() {
  const { navigate } = useNavigation();
  const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [umur, setUmur] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    axios
      .get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((response) => {
        setProvinces(response.data);
      })
      .catch((error) => {
        console.error("Error fetching provinces:", error);
      });
  }, []);

  const handleRegister = () => {
    if (
      !username ||
      !email ||
      !umur ||
      !selectedValue ||
      !password ||
      !confirmPassword
    ) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "Warning",
        textBody: "Input tidak boleh kosong",
        button: "Close",
      });
      return;
    }

    if (password !== confirmPassword) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "Kata sandi tidak sesuai",
        button: "Ok",
      });
      return;
    }

    setLoading(true);
    const userData = {
      username,
      email,
      umur,
      domisili: selectedValue,
      password,
    };
    console.log("Registering user with data:", userData);
    axios
      .post(`${API_URL}/user/register`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setLoading(false);
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Success",
          textBody: "Registrasi berhasil",
          button: "OK",
          onPressButton: () => navigate("login"), // Navigate to login screen on button press
        });
      })
      .catch((error) => {
        setLoading(false);
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: "Error",
          textBody: "Alamat sudah ada",
          button: "OK",
        });
      });
  };

  return (
    <AlertNotificationRoot>
      <Header title="Back" subtitle={`Back`} icon1={Back} icon2={null} />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            style={{ width: 300, height: 300 }}
            source={require("../../assets/smarta-icon.png")}
          />
          <View style={styles.loginCard}>
            <Text style={styles.inputLabel}>Nama Pengguna</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <Text style={styles.inputLabel}>Umur</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={umur}
                onChangeText={setUmur}
              />
            </View>
            <Text style={styles.inputLabel}>Daerah</Text>
            <View style={styles.inputContainer2}>
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
                style={styles.picker}
              >
                <Picker.Item label="-- Pilih domisili --" value="" />
                {provinces.map((province) => (
                  <Picker.Item
                    key={province.id}
                    label={province.name}
                    value={province.name}
                  />
                ))}
              </Picker>
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
            <Text style={styles.inputLabel}>Konfirmasi Kata Sandi</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
            <Spinner
              visible={loading}
              textContent={"Loading..."}
              textStyle={styles.spinnerText}
            />
            <View style={{ marginTop: 20 }}>
              <PrimaryButton title="Daftar" onPress={handleRegister} />
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Sudah Memiliki Akun? </Text>
              <TouchableOpacity onPress={() => navigate("login")}>
                <Text style={styles.textLink}>Masuk Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </AlertNotificationRoot>
  );
}
