import React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { styles } from "./style";
import PrimaryButton from "../../components/PrimaryButton";
import { Header } from "../../components/Header";
import Avatar from "../../assets/avatar.svg";

const ProfileScreen: React.FC = () => {
  // Define default values for inputs
  const defaultName = "John Doe";
  const defaultUsername = "johndoe";
  const defaultEmail = "johndoe@example.com";
  const defaultPassword = "********"; // Default password placeholder

  return (
    <View>
      <Header
        title="Profile"
        subtitle={`profile`}
        icon1={Avatar}
        icon2={null}
        />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.loginCard}>
            <View style={styles.singleInput}>
              <Text style={styles.inputLabel}>Nama</Text>
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
              <Text style={styles.inputLabel}>Nama Pengguna</Text>
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
              <Text style={styles.inputLabel}>Email</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  defaultValue={defaultEmail}
                  editable={false}
                  placeholderTextColor="black"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
