import React from "react";
import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Stars } from "../../components/Stars";

import { styles } from "./styles";

interface Params {
  total: string;
  points: string;
}

export function Finish() {
  const route = useRoute();
  const { points, total } = route.params as Params;

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Stars />

      <View style={styles.message}>
        <Text style={styles.title}>Selamat !</Text>

        <Text style={styles.subtitle}>
          Anda memiliki total benar {points} dari {total} soal
        </Text>
      </View>

      <Button title="Back to home" onPress={() => navigate("home")} />
    </View>
  );
}
