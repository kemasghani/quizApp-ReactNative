import React, { useEffect, useState } from "react";
import { ScrollView, Image, View, ActivityIndicator } from "react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";
import Close from "../../assets/close.svg";
import { RankingList } from "../../components/RankingList";
import axios from 'axios';
import { LOCALHOST_URL } from "@env";

function Ranking() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${LOCALHOST_URL}/total-points`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
