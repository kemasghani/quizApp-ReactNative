import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, Image } from "react-native";
import { styles } from "./style";
import Avatar from "../../assets/avatar.svg";
import EditIcon from "../../assets/edit-icon.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from 'axios';
import { API_URL, LOCALHOST_URL } from "@env";
import {
  useNavigation,
  useRoute,
  CommonActions,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile: React.FC = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { navigate } = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        console.log('userId:', userId);


        const response = await axios.get(`${API_URL}/user/${userId}`);
        console.log('userData:', response.data);
        // setUserData(response.data);
        setUserData(response.data[0]);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);




  const navigation = useNavigation();
  const route = useRoute();

  const handleLogout = async () => {
    // Save keluar = true to local storage
    await AsyncStorage.clear();
    await AsyncStorage.setItem("loggedIn", "false");
    // Navigate to the logout screen or perform any other logout actions
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "login" }],
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.scrollViewContent}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Profil Saya</Text>
      </View>
      <View style={styles.container}>

        <View style={styles.profileContainer}>
          {/* {userData?.avatar && <Image source={{ uri: userData?.avatar }} style={{ width: 100, height: 100, borderRadius: 50 }} />} */}
          {userData?.avatar ? (
            <Image
              source={{ uri: `${userData?.avatar}` }}
              style={{ width: 70, height: 70, borderRadius: 50 }}
            />
          ) : (
            <Image
              source={require('../../assets/user.png')}
              style={styles.profilePicture}
            />
          )}


          <View style={styles.profileInfo}>
            <Text style={styles.nameText}>{loading ? "loading..." : userData?.username}</Text>
            <Text style={styles.emailText}>{loading ? "loading..." : userData?.email}</Text>
          </View>
          <TouchableOpacity
            style={styles.editIcon}
            onPress={() => navigation.navigate("profiledit")}
          >
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
              <Text style={styles.regularText}>Umur</Text>
            </View>
            <View style={[styles.textContainer, styles.rightAlignedText]}>
              <Text style={[styles.regularText, styles.boldText]}>{loading ? "loading..." : userData.username}</Text>
              <Text style={[styles.regularText, styles.boldText]}>{loading ? "loading..." : userData.email}</Text>
              <Text style={[styles.regularText, styles.boldText]}>{loading ? "loading..." : userData.domisili}</Text>
              <Text style={[styles.regularText, styles.boldText]}>{loading ? "loading..." : userData.umur}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.subTitle}>Pengaturan Akun</Text>
          <TouchableOpacity
            style={styles.settingBtn}
            onPress={() => navigation.navigate("tentang")}
          >
            <Text style={[styles.regularText, styles.boldText]}>Tentang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingBtn}
            onPress={() => navigation.navigate("kebijakan")}
          >
            <Text style={[styles.regularText, styles.boldText]}>
              Kebijakan Privasi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingBtn} onPress={handleLogout}>
            <Text style={[styles.regularText, styles.boldText]}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
