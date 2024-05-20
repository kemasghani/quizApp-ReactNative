import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Updated import

import { styles } from "./style";
import PrimaryButton from "../../components/PrimaryButton";
import { Header } from "../../components/Header";
import Avatar from "../../assets/avatar.svg";
import EditIcon from "../../assets/edit-icon.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ProfileEditScreen: React.FC = () => {
  // Define default values for inputs
  const defaultName = "John Doe";
  const defaultAge= "18";
  const defaultUsername = "johndoe";
  const defaultEmail = "johndoe@example.com";
  const defaultPassword = "********"; // Default password placeholder

  const { navigate } = useNavigation();
  const [selectedValue, setSelectedValue] = useState("10");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.scrollViewContent}>
      <View style={styles.headerContainer}>
        <Avatar style={styles.profilePicture} width={70} height={70} />
        <Text style={styles.headerText}>Ganti Avatar</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.singleInput}>
          <Text style={styles.inputLabel}>Nama Pengguna</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              defaultValue={defaultName}
              placeholderTextColor="black"
            />
          </View>
        </View>
        <View style={styles.singleInput}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              defaultValue={defaultUsername}
              placeholderTextColor="black"
            />
          </View>
        </View>
        <View style={styles.singleInput}>
          <Text style={styles.inputLabel}>Umur</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              defaultValue={defaultAge}
              placeholderTextColor="black"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.singleInput}>
          <Text style={styles.inputLabel}>Domisili</Text>
          <View style={styles.inputContainer}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: '100%', transform: [{ translateY: -7 }], }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
              <Picker.Item label="-- Pilih domisili --" value="Pilih domisili" />
              <Picker.Item label="Bandung" value="Bandung" />
              <Picker.Item label="Surabaya" value="Surabaya" />
              <Picker.Item label="Medan" value="Medan" />
            </Picker>
          </View>
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: 100 }}>
          <PrimaryButton
            title="Simpan"
            onPress={() => {
              navigate("profile");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileEditScreen;
