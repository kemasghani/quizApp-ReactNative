import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";

import { LevelBars } from "../LevelBars";
import { QUIZZES } from "../../data/quizzes";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

type Props = TouchableOpacityProps & {
  index: number;
  data: (typeof QUIZZES)[0];
  attempted: boolean;
  grades: any[]; // Add grades prop

};

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

export function QuizCard({ index, data, attempted, grades, ...rest }: Props) {
  const Icon = data.svg;

  const getGradeData = (quizId) => {
    return grades.find((grade) => grade.quizId === quizId);
  };

  // Get the grade data for the current quizId
  const gradeData = getGradeData(data.id);
  // console.log("gradeData:", gradeData);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.paket}>Paket {data.paket}</Text>
        <LevelBars level={data.level} />
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.skorInfo}>
          <Text style={styles.text}>Skor</Text>
          <Text style={styles.number}>{gradeData != undefined ? gradeData?.points : "-"}</Text>
        </View>
        <View style={styles.correctInfo}>
          <Text style={styles.text}>Benar</Text>
          <Text style={styles.number}>{gradeData != undefined ? gradeData?.correctAnswer + '/' + gradeData?.questionsCount : "-"}</Text>
        </View>
      </View>
      <TouchableOpacityAnimated
        entering={FadeInUp.delay(index * 100)}
        exiting={FadeOutUp}
        {...rest}
      >
        <View style={styles.retryContainer}>
          {attempted ? (
            <Text style={styles.retry}>Coba lagi</Text>
          ) : (
            <Text style={styles.retry}>Mulai</Text>
          )}
        </View>
      </TouchableOpacityAnimated>
    </View>
  );
}
