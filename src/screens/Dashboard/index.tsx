import React from "react";
import Avatar from "../../assets/avatar.svg";
import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { Trophy } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { MateriCard } from "../../components/MateriCard";
import { styles } from "./styles";
import { allMateri } from "../../data/materi";

export function Dashboard() {
  const [quizzes, setQuizzes] = useState(allMateri);

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        icon={Avatar}
        title="Selamat Pagi, Janice!"
        subtitle="selamat belajar !"
        onPress={() => navigate("history")}
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
      <FlatList
        data={quizzes}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <MateriCard
            index={index}
            data={item}
            onPress={() => navigate('history')}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cards}
      />
    </View>
  );
}
