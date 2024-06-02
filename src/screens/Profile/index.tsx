import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./style";
import Avatar from "../../assets/avatar.svg";
import EditIcon from "../../assets/edit-icon.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import { API_URL } from "@env";
import {
  useNavigation,
  useRoute,
  CommonActions,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile: React.FC = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [domisili, setDomisili] = useState(null);
  const [umur, setUmur] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

  const {navigate} = useNavigation();
  const navigation = useNavigation();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const avatar = await AsyncStorage.getItem("avatar");
        const domisili = await AsyncStorage.getItem("domisili");
        const umur = await AsyncStorage.getItem("umur");
        const email = await AsyncStorage.getItem("tokenEmail");
        const username = await AsyncStorage.getItem("username");
        console.log(`============${username}============`);
        setAvatar(avatar);
        setDomisili(domisili);
        setUmur(umur);
        setUsername(username);
        setEmail(email);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const truncateUsername = (username) => {
    return username.length > 10 ? username.substring(0, 10) + "..." : username;
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    await AsyncStorage.setItem("loggedIn", "false");
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "login" }],
      })
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.scrollViewContent}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Profil Saya</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          {avatar ? (
            <Image
              source={{ uri: avatar }}
              style={{ width: 70, height: 70, borderRadius: 50 }}
            />
          ) : (
            <Avatar style={styles.profilePicture} width={70} height={70} />
          )}

          <View style={styles.profileInfo}>
            <Text style={styles.nameText}>
              {loading ? "loading..." : truncateUsername(username)}
            </Text>
            <Text style={styles.emailText}>
              {loading ? "loading..." : email}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.editIcon}
            onPress={() => navigate("profiledit")}
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
              <Text style={[styles.regularText]}>
                {loading ? "loading..." : truncateUsername(username)}
              </Text>
              <Text style={[styles.regularText]}>
                {loading ? "loading..." : email}
              </Text>
              <Text style={[styles.regularText]}>
                {loading ? "loading..." : domisili}
              </Text>
              <Text style={[styles.regularText]}>
                {loading ? "loading..." : umur}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.subTitle}>Pengaturan Akun</Text>
          <TouchableOpacity
            style={styles.settingBtn}
            onPress={() => navigate("tentang")}
          >
            <Text style={[styles.regularText, styles.boldText]}>Tentang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingBtn}
            onPress={() => navigate("kebijakan")}
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
