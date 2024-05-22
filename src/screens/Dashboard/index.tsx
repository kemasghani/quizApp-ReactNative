import React from "react";
import Avatar from "../../assets/avatar.svg";
import { useEffect, useState } from "react";
import { FlatList, View, Text, Button } from "react-native"; // Added Button for testing
import { Trophy } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { MateriCard } from "../../components/MateriCard";
import { styles } from "./styles";
import { allMateri } from "../../data/materi";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Dashboard() {
  const [quizzes, setQuizzes] = useState(allMateri);
  const navigation = useNavigation();

  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };
  useEffect(() => {
    const checkLoggedIn = async () => {
      const loggedIn = await AsyncStorage.getItem("loggedIn");
      if (!loggedIn) {
        navigation.navigate("login");
      }
    };

    checkLoggedIn();
  }, []);
  return (
    <View style={styles.container}>
      <Header
        icon1={Avatar}
        icon2={null}
        title="Selamat Pagi, Kemas!"
        subtitle="Selamat belajar!"
        onPress={() => handleNavigate("history")}
      />
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
            onPress={() => handleNavigate("home")}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cards}
      />
    </View>
  );
}
