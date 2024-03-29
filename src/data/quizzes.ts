import { CloudArrowUp, CodeSimple, ToggleLeft, PaintBucket, DeviceMobile, GitFork } from 'phosphor-react-native';

export const QUIZZES = [
  {
    id: '1',
    title: 'Penalaran Umum',
    level: 1,
    svg: ToggleLeft,
  },
  {
    id: '2',
    title: 'Pengetahuan dan Pemahaman Umum',
    level: 2,
    svg: CodeSimple,
  },
  {
    id: '3',
    title: 'Pemahaman Bacaan dan Menulis',
    level: 2,
    svg: GitFork,
  },
  {
    id: '4',
    title: 'Pengetahuan Kuantitatif',
    level: 3,
    svg: PaintBucket,
  },
  {
    id: '5',
    title: 'Literasi',
    level: 2,
    svg: CloudArrowUp,
  },
  {
    id: '6',
    title: 'Penalaran Matematika',
    level: 1,
    svg: DeviceMobile,
  },
];