import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./style";
import Avatar from "../../assets/avatar.svg";
import EditIcon from "../../assets/edit-icon.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import { API_URL } from "@env";
import { useNavigation, CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile: React.FC = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { navigate } = useNavigation();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (!userId) {
          Alert.alert("Error", "User ID not found in storage");
          setLoading(false);
          return;
        }

        const response = await axios.get(`${API_URL}/user/${userId}`);
        const userData = response.data[0];

        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        Alert.alert("Error", "Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const truncateUsername = (username) => {
    return username.length > 10 ? username.substring(0, 17) + "..." : username;
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
          {userData && userData.avatar && !loading ? (
            <Image
              source={{ uri: `${userData.avatar}` }}
              style={{ width: 70, height: 70, borderRadius: 50 }}
            />
          ) : (
            <Image
              source={require("../../assets/user.png")}
              style={{ width: 70, height: 70, borderRadius: 50 }}
            />
          )}

          <View style={styles.profileInfo}>
            <Text style={styles.nameText}>
              {loading
                ? "loading..."
                : truncateUsername(userData?.username || "")}
            </Text>
            <Text style={styles.emailText}>
              {loading ? "loading..." : truncateUsername(userData?.email || "")}
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
                {loading
                  ? "loading..."
                  : truncateUsername(userData?.username || "")}
              </Text>
              <Text style={[styles.regularText]}>
                {loading
                  ? "loading..."
                  : truncateUsername(userData?.email || "")}
              </Text>
              <Text style={[styles.regularText]}>
                {loading ? "loading..." : userData?.domisili || ""}
              </Text>
              <Text style={[styles.regularText]}>
                {loading ? "loading..." : userData?.umur || ""}
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
