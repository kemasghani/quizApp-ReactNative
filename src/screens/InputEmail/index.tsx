import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { styles } from "./style";
import PrimaryButton from "../../components/PrimaryButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export function InputEmail() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
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
          <TextInput style={styles.input} placeholder="Masukkan alamat email" />
        </View>
      </View>
      <PrimaryButton title="Lanjutkan" onPress={() => navigate("inputOtp")} />
    </View>
  );
}
