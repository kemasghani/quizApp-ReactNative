import React, { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { MateriCard } from "../../components/MateriCard";
import { styles } from "./styles";
import { allMateri } from "../../data/materi";
import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Dashboard() {
  const [quizzes, setQuizzes] = useState(allMateri);
  const [username, setUsername] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPoints, setTotalPoints] = useState(null);
  const [rank, setRank] = useState(null);
  const navigation = useNavigation();

  const handleNavigate = (screenName, params) => {
    navigation.navigate(screenName, params);
  };
  AsyncStorage.setItem("time", "0");
  useEffect(() => {
    const checkLoggedIn = async () => {
      const loggedIn = await AsyncStorage.getItem("tokenEmail");
      if (!loggedIn) {
        navigation.navigate("login");
        return;
      }
    };
    const fetchUserData = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const userResponse = await axios.get(`${API_URL}/user/${userId}`);
        const userData = userResponse.data[0];
        setUsername(userData.username);
        setAvatar(userData.avatar);

        const rankingResponse = await axios.get(`${API_URL}/total-points`);
        const rankings = rankingResponse.data;
        const userRankData = rankings.find((user) => user.userId === userId);

        setTotalPoints(userRankData?.totalPoints || 0);
        setRank(rankings.findIndex((user) => user.userId === userId) + 1);

        setLoading(false);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    checkLoggedIn();
    fetchUserData();
  }, [navigation]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Header
          icon1="https://res.cloudinary.com/dsezjy9ur/image/upload/v1717399791/avatars/rq8qnzgllbezas5ak6wr.jpg"
          icon2={null}
          title={`Selamat Belajar, loading ...`}
          subtitle="dashboard"
          onPress={() => handleNavigate("history")}
        />
      ) : (
        <Header
          icon1={avatar}
          icon2={null}
          title={`Selamat Belajar,  ${username} !`}
          subtitle="dashboard"
          onPress={() => handleNavigate("history")}
        />
      )}

      <View style={styles.infoDashboard}>
        <View style={styles.nilai}>
          <Text style={styles.numberNilai}>{totalPoints ?? "..."}</Text>
          <Text style={styles.textNilai}>Total Nilai</Text>
        </View>
        <View style={styles.peringkat}>
          <Text style={styles.numberPeringkat}>{rank ?? "..."}</Text>
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
