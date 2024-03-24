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
};

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

export function QuizCard({ index, data, ...rest }: Props) {
  const Icon = data.svg;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.paket}>Paket 1</Text>
        <LevelBars level={data.level} />
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.skorInfo}>
          <Text style={styles.text}>Skor</Text>
          <Text style={styles.number}>240</Text>
        </View>
        <View style={styles.correctInfo}>
          <Text style={styles.text}>Benar</Text>
          <Text style={styles.number}>3/5</Text>
        </View>
      </View>
      <TouchableOpacityAnimated
        entering={FadeInUp.delay(index * 100)}
        exiting={FadeOutUp}
        {...rest}
      >
        <View style={styles.retryContainer}>
          <Text style={styles.retry}>Coba lagi</Text>
        </View>
      </TouchableOpacityAnimated>
    </View>
  );
}
