import { Text, View } from 'react-native';

import { LevelBars } from '../LevelBars';

import { styles } from './styles';

export type HistoryProps = {
  id: string;
  title: string;
  points: number;
  questions: number;
  level: number;
  correctAnswer: number;
  questionsCount: number;
}

type Props = {
  data: HistoryProps;
}

export function HistoryCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {data.title}
        </Text>

        <Text style={styles.subtitle}>
          Total benar {data.correctAnswer} dari {data.questionsCount} soal
        </Text>
      </View>

      <LevelBars level={data.level} />
    </View>
  );
}