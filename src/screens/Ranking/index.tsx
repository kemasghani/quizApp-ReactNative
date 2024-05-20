// Ranking.js

import React from "react";
import { ScrollView, Image, View } from "react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";
import Close from "../../assets/close.svg";
import { RankingList } from "../../components/RankingList";

const data = [
  {
    id: 1,
    imageUri: 'https://via.placeholder.com/150',
    user: 'Lorem Ipsum',
    nilai: '2078',
  },
  {
    id: 2,
    imageUri: 'https://via.placeholder.com/150',
    user: 'Emma',
    nilai: '2039',
  },
  {
    id: 3,
    imageUri: 'https://via.placeholder.com/150',
    user: 'Sam',
    nilai: '2003',
  },
  {
    id: 4,
    imageUri: 'https://via.placeholder.com/150',
    user: 'Sam',
    nilai: '2003',
  },
  {
    id: 5,
    imageUri: 'https://via.placeholder.com/150',
    user: 'Sam',
    nilai: '2003',
  },
  {
    id: 6,
    imageUri: 'https://via.placeholder.com/150',
    user: 'Sam',
    nilai: '2003',
  },
  {
    id: 7,
    imageUri: 'https://via.placeholder.com/150',
    user: 'Sam',
    nilai: '2003',
  },
];

function Ranking() {
  return (
    <View style={styles.container}>
      <Header title="Peringkat" icon1={Close} />
      <View style={{ alignItems: "center", marginTop: 15, marginBottom: 45 }}>
        <Image
          source={require("../../assets/trophy.png")}
          style={{ height: 115, width: 99 }}
        />
      </View>
      <RankingList data={data} />
    </View>
  );
}

export { Ranking };
