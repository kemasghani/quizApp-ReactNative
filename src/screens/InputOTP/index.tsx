import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { styles } from "./style";
import PrimaryButton from "../../components/PrimaryButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export function InputOTP() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
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
            placeholder="masukan kode anda"
          />
        </View>
      </View>
      <PrimaryButton
        title="Lanjutkan"
        onPress={() => navigate("successPass")}
      />
    </View>
  );
}
