import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Alert, Text } from "react-native";
import { Trash } from "phosphor-react-native";
import HistoryIcon from '../../assets/history-icon.svg';
import Animated, {
  Layout,
  SlideInRight,
  SlideOutRight,
} from "react-native-reanimated";
import { Swipeable } from "react-native-gesture-handler";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Header } from "../../components/Header";
import { HistoryCard, HistoryProps } from "../../components/HistoryCard";
import { styles } from "./styles";
import { Loading } from "../../components/Loading";
import { THEME } from "../../styles/theme";

export function History() {
  const [isLoading, setIsLoading] = useState(true);
  const [history, setHistory] = useState<HistoryProps[]>([]);
  const swipeableRefs = useRef<Swipeable[]>([]);
  const { goBack } = useNavigation();

  async function fetchHistory() {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        const response = await axios.get(`http://192.168.137.1:3000/grade/user/${userId}`);
        setHistory(response.data);
      } else {
        Alert.alert("Error", "User ID not found in storage");
      }
    } catch (error) {
      console.error("Failed to fetch history", error);
      Alert.alert("Error", "Failed to fetch history");
    } finally {
      setIsLoading(false);
    }
  }

  async function remove(id: string) {
    try {
      await axios.delete(`http://192.168.137.1:3000/grade/${id}`);
      fetchHistory();
    } catch (error) {
      console.error("Failed to remove history item", error);
      Alert.alert("Error", "Failed to remove history item");
    }
  }

  function handleRemove(id: string, index: number) {
    swipeableRefs.current?.[index].close();
    Alert.alert("Hapus", "Apakah anda ingin menghapus riwayat ?", [
      {
        text: "Iya",
        onPress: () => remove(id),
      },
      { text: "Tidak", style: "cancel" },
    ]);
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Header
        title="Riwayat"
        subtitle={`Sejarah Pendidikan Anda${"\n"}telah dilakukan`}
        icon1={null}
        icon2={HistoryIcon}
        onPress={goBack}
      />

      {history.length === 0 ? (
        <Text style={styles.noHistoryText}>
          Tidak ada Riwayat yang bisa ditampilkan. Coba untuk kerjakan paket terlebih dahulu!
        </Text>
      ) : (
        <ScrollView
          contentContainerStyle={styles.history}
          showsVerticalScrollIndicator={false}
        >
          {history.map((item, index) => (
            <Animated.View
              key={item._id}
              entering={SlideInRight}
              exiting={SlideOutRight}
              layout={Layout.springify()}
            >
              <Swipeable
                ref={(ref) => {
                  if (ref) {
                    swipeableRefs.current.push(ref);
                  }
                }}
                containerStyle={styles.swipeContainer}
                renderLeftActions={() => (
                  <View style={styles.swipeRemove}>
                    <Trash size={32} color={THEME.COLORS.GREY_100} />
                  </View>
                )}
                renderRightActions={() => null}
                overshootLeft={false}
                leftThreshold={10}
                onSwipeableOpen={() => handleRemove(item._id, index)}
              >
                <HistoryCard data={item} />
              </Swipeable>
            </Animated.View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

