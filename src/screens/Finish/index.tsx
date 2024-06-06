import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import {
  useNavigation,
  useRoute,
  CommonActions,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../components/Button";
import { Stars } from "../../components/Stars";
import { styles } from "./styles";
import { API_URL } from "@env";
import { QUIZ } from "../../data/quiz";

interface Params {
  total: string;
  points: string;
  quizId: number;
}
type QuizProps = (typeof QUIZ)[0];
export function Finish() {
  const [finalScore, setFinalScore] = useState<string | null>(null);
  const [finalTime, setFinalTime] = useState<string | null>(null);
  const [finalLevel, setFinalLevel] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<QuizProps>({} as QuizProps);
  const route = useRoute();
  const { points, total, quizId } = route.params as Params;

  useEffect(() => {
    async function fetchScore() {
      const score = await AsyncStorage.getItem("score");
      const time = await AsyncStorage.getItem("time");
      const level = await AsyncStorage.getItem("level");
      setFinalScore(score);
      setFinalTime(time);
      setFinalLevel(level);
      console.log(time);
    }

    fetchScore();
  }, []);

  const navigation = useNavigation();

  const handleBackToDashboard = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");

      // Calculate the adjusted score based on the formula
      const score = Number(finalScore);
      const level = Number(finalLevel);
      const basePoints = score * level * 20;
      const penalty = score * 10;
      const maxPenalty = basePoints / 2;
      const adjustedScore = basePoints - Math.min(penalty, maxPenalty);

      console.log(quizId);
      await fetch(`${API_URL}/grade/user/${userId}/${quizId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          points: Math.floor(adjustedScore),
          correctAnswer: finalScore,
          completedAt: new Date().toISOString(),
        }),
      });

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "dashboard" }],
        })
      );
    } catch (error) {
      console.error("Failed to save grade:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Stars />

      <View style={styles.message}>
        <Text style={styles.title}>Selamat!</Text>
        <Text style={styles.subtitle}>
          Anda memiliki total benar {finalScore} dari {total} soal
        </Text>
      </View>

      <Button title="Back to Dashboard" onPress={handleBackToDashboard} />
    </View>
  );
}
