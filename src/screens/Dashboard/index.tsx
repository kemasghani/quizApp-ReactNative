import React, { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Avatar from "../../assets/avatar.svg";
import { Header } from "../../components/Header";
import { MateriCard } from "../../components/MateriCard";
import { styles } from "./styles";
import { allMateri } from "../../data/materi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Dashboard() {
  const [quizzes, setQuizzes] = useState(allMateri);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true); // Added loading state
  const navigation = useNavigation();

  const handleNavigate = (screenName, params) => {
    navigation.navigate(screenName, params);
  };

  useEffect(() => {
    const getUsername = async () => {
      try {
        const username = await AsyncStorage.getItem("username");
        setUsername(username);
        setLoading(false); // Set loading to false after username is retrieved
      } catch (error) {
        console.error("Error retrieving username:", error);
      }
    };
    getUsername();

    const checkLoggedIn = async () => {
      const loggedIn = await AsyncStorage.getItem("tokenEmail");
      await AsyncStorage.setItem("login", "false");
      console.log(
        `==========================================${loggedIn}============================================`
      );
      if (loggedIn == "false" || loggedIn == null) {
        navigation.navigate("login");
      }
    };

    checkLoggedIn();
  }, [navigation]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>...</Text> // Show loading indicator while fetching username
      ) : (
        <Header
          icon1={Avatar}
          icon2={null}
          title={`Selamat Datang, ${username} !`}
          subtitle="Selamat belajar!"
          onPress={() => handleNavigate("history")}
        />
      )}

      <View style={styles.infoDashboard}>
        <View style={styles.nilai}>
          <Text style={styles.numberNilai}>785</Text>
          <Text style={styles.textNilai}>Total Nilai</Text>
        </View>
        <View style={styles.peringkat}>
          <Text style={styles.numberPeringkat}>15</Text>
          <Text style={styles.textPeringkat}>Peringkat</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ marginTop: 20, width: "100%" }}
        onPress={() => handleNavigate("ranking")}
      >
        <Text style={styles.textLink}>Lihat Peringkat</Text>
      </TouchableOpacity>
      <FlatList
        data={quizzes}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <MateriCard
            index={index}
            data={item}
            onPress={async () => {
              try {
                await AsyncStorage.setItem("score", "0");
                handleNavigate("home", { id: item.id });
              } catch (error) {
                console.error("Failed to set score in AsyncStorage:", error);
              }
            }}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cards}
      />
    </View>
  );
}
