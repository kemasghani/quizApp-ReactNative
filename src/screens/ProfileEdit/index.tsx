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
              editable={false}
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
              editable={false}
              placeholderTextColor="black"
            />
          </View>
        </View>
        <View style={styles.singleInput}>
          <Text style={styles.inputLabel}>Domisili</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              defaultValue={defaultEmail}
              editable={false}
              placeholderTextColor="black"
            />
          </View>
        </View>
        <View style={styles.singleInput}>
          <Text style={styles.inputLabel}>Dropdown List</Text>
          <View style={styles.inputContainer}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: '100%' }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
            </Picker>
          </View>
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: 100 }}>
          <PrimaryButton
            title="Simpan"
            onPress={() => {
              navigate("Profile");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileEditScreen;
