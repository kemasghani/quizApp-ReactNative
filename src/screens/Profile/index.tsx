import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./style";
import Avatar from "../../assets/avatar.svg";
import EditIcon from "../../assets/edit-icon.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';



const Profile: React.FC = () => {
  // Define default values for inputs
  const defaultName = "Janice";
  const defaultUsername = "janice";
  const defaultEmail = "ja.nice@gmail.com";
  const defaultPassword = "****"; // Default password placeholder

  const { navigate } = useNavigation();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.scrollViewContent}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Profil</Text>
      </View>
      {/* <View style={styles.container}>
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
        </View> */}
      <View style={styles.container}>

        <View style={styles.profileContainer}>
          <Avatar style={styles.profilePicture} width={70} height={70} />
          <View style={styles.profileInfo}>
            <Text style={styles.nameText}>{defaultName}</Text>
            <Text style={styles.emailText}>{defaultEmail}</Text>
          </View>
          <TouchableOpacity style={styles.editIcon} onPress={() => navigate('profiledit')}>
            <EditIcon />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.subTitle}>Informasi Akun</Text>
          <View style={styles.accountInfoContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.regularText}>Nama Pengguna</Text>
              <Text style={styles.regularText}>Email</Text>
              <Text style={styles.regularText}>Domisili</Text>
              <Text style={styles.regularText}>Kelas</Text>
            </View>
            <View style={[styles.textContainer, styles.rightAlignedText]}>
              <Text style={[styles.regularText, styles.boldText]}>Janice</Text>
              <Text style={[styles.regularText, styles.boldText]}>ja.nice@gmail.com</Text>
              <Text style={[styles.regularText, styles.boldText]}>Jakarta</Text>
              <Text style={[styles.regularText, styles.boldText]}>12</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.subTitle}>Pengaturan Akun</Text>
          <TouchableOpacity style={styles.settingBtn} onPress={() => navigate('login')}>
            <Text style={[styles.regularText, styles.boldText]}>Tentang</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingBtn} onPress={() => navigate('login')}>
            <Text style={[styles.regularText, styles.boldText]}>Kebijakan Privasi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingBtn} onPress={async () => {
            // Save keluar = true to local storage
            await AsyncStorage.clear();
            await AsyncStorage.setItem('keluar', 'true');
            // clear all async storage
            // Navigate to the logout screen or perform any other logout actions
            navigate('login');
          }}>
            <Text style={[styles.regularText, styles.boldText]}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;