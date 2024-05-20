import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { styles } from "./style";
import PrimaryButton from "../../components/PrimaryButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export function SuccessPass() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("../../assets/successPass.png")}
        />
      </View>
      <Text style={styles.subTitle}>
        Selamat, kata sandi telah berhasil diubah, silahkan login kembali
      </Text>
      <PrimaryButton title="Masuk Kembali" onPress={() => navigate("login")} />
    </View>
  );
}
