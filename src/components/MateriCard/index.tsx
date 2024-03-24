import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from "react-native";

import { styles } from "./styles";
import { THEME } from "../../styles/theme";

import { allMateri } from "../../data/materi";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

type Props = TouchableOpacityProps & {
  index: number;
  data: (typeof allMateri)[0];
};

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

export function MateriCard({ index, data, ...rest }: Props) {
  const Icon = data.svg;

  return (
    <TouchableOpacityAnimated
      entering={FadeInUp.delay(index * 100)}
      exiting={FadeOutUp}
      style={styles.container}
      {...rest}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>{Icon && <Icon />}</View>
      </View>
      <Text style={styles.title}>{data.title}</Text>
    </TouchableOpacityAnimated>
  );
}
