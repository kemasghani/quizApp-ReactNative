import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, CommonActions } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification";
import { styles } from "./style";
import PrimaryButton from "../../components/PrimaryButton";
import DangerButton from "../../components/DangerButton";
import { API_URL } from "@env";

const ProfileEditScreen = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

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

        setName(userData.username);
        setAge(userData.umur.toString());
        setUsername(userData.username);
        setEmail(userData.email);
        setSelectedValue(userData.domisili);
        setAvatar(userData.avatar);
      } catch (error) {
        console.error("Failed to fetch user data", error);
        Alert.alert("Error", "Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
        );
        setProvinces(response.data);
      } catch (error) {
        console.error("Failed to fetch provinces", error);
        Alert.alert("Error", "Failed to fetch provinces");
      }
    };

    fetchProvinces();
  }, []);

  const handleChooseAvatar = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert("Permission to access camera roll is required!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (result.canceled) {
        console.log("User cancelled image picker");
        return;
      }

      if (result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        setPreviewAvatar(uri); // Set the preview image URI
        await uploadAvatar(uri); // Upload the image as soon as it's picked
      } else {
        console.log("No URI found in the result", result);
        Alert.alert("Error", "Failed to pick an image");
      }
    } catch (error) {
      console.error("Error picking an image", error);
      Alert.alert("Error", "Error picking an image");
    }
  };

  const uploadAvatar = async (uri) => {
    if (!uri) {
      console.error("No URI provided for avatar upload");
      Alert.alert("Error", "No URI provided for avatar upload");
      return;
    }

    const userId = await AsyncStorage.getItem("userId");
    if (!userId) {
      Alert.alert("Error", "User ID not found in storage");
      return;
    }

    setUploading(true);

    try {
      // Compress the image
      const manipResult = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 300, height: 300 } }],
        { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
      );

      const filename = manipResult.uri.split("/").pop();
      const formData = new FormData();
      formData.append("avatar", {
        uri: manipResult.uri,
        name: filename,
        type: "image/jpeg",
      });

      const response = await axios.post(
        `${API_URL}/user/${userId}/upload-avatar`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const updatedUser = response.data.user;
        setAvatar(updatedUser.avatar); // Update the avatar with the URL from the server
        console.log("Avatar uploaded successfully:", response.data);
      } else {
        console.log("Failed to upload avatar:", response);
        Alert.alert("Error", "Failed to upload avatar");
      }
    } catch (error) {
      console.error("Error uploading avatar", error);
      Alert.alert("Error", "Error uploading avatar");
    } finally {
      setUploading(false);
    }
  };

  const saveUserData = async () => {
    if (!name || !email || !age || !selectedValue) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) {
        Alert.alert("Error", "User ID not found in storage");
        setLoading(false);
        return;
      }

      const response = await axios.put(`${API_URL}/user/${userId}`, {
        username: name,
        email,
        umur: parseInt(age, 10),
        domisili: selectedValue,
      });

      if (response.status === 200) {
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Success",
          textBody: "Perbarui profile berhasil",
          button: "OK",
          onPressButton: () => {
            // Navigate after the dialog is closed
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "profile" }],
              })
            );
          },
        });

        // Update AsyncStorage with new data
        await AsyncStorage.setItem("username", name);
        await AsyncStorage.setItem("tokenEmail", email);
        await AsyncStorage.setItem("domisili", selectedValue);
        await AsyncStorage.setItem("umur", age);
        await AsyncStorage.setItem("avatar", avatar);
      } else {
        Alert.alert("Error", "Failed to update user data");
      }
    } catch (error) {
      console.error("Error updating user data", error);
      Alert.alert("Error", "Error updating user data");
    } finally {
      setLoading(false);
    }
  };

  const cancelEdit = () => {
    navigation.navigate("profile");
  };

  return (
    <AlertNotificationRoot>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.scrollViewContent}
      >
        {loading && (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        {!loading && (
          <>
            <View style={styles.headerContainer}>
              {previewAvatar ? (
                <>
                  <Image
                    source={{ uri: previewAvatar }}
                    style={styles.profilePicture}
                  />
                  <Text style={styles.previewText}>(image preview)</Text>
                </>
              ) : avatar ? (
                <Image source={{ uri: avatar }} style={styles.profilePicture} />
              ) : (
                <Image
                  source={require("../../assets/user.png")}
                  style={styles.profilePicture}
                />
              )}
              <TouchableOpacity onPress={handleChooseAvatar}>
                <Text style={styles.headerText}>Ganti Avatar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <View style={styles.singleInput}>
                <Text style={styles.inputLabel}>Nama Pengguna</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="black"
                  />
                </View>
              </View>
              <View style={styles.singleInput}>
                <Text style={styles.inputLabel}>Email</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor="black"
                  />
                </View>
              </View>
              <View style={styles.singleInput}>
                <Text style={styles.inputLabel}>Umur</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={setAge}
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
                    style={{
                      height: 50,
                      width: "100%",
                      transform: [{ translateY: -7 }],
                    }}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="-- Pilih domisili --" value="" />
                    {provinces.map((province) => (
                      <Picker.Item
                        key={province.id}
                        label={province.name}
                        value={province.name}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
              <View
                style={{
                  marginTop: 20,
                  paddingHorizontal: 100,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  columnGap: 20,
                }}
              >
                <DangerButton title="Batalkan" onPress={cancelEdit} />
                <PrimaryButton title="Simpan" onPress={saveUserData} />
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </AlertNotificationRoot>
  );
};

export default ProfileEditScreen;
