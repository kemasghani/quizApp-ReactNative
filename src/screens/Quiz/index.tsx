import React from "react";
import { useEffect, useState } from "react";
import { Alert, BackHandler, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
  interpolate,
  Easing,
  useAnimatedScrollHandler,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";

import { styles } from "./styles";
import { THEME } from "../../styles/theme";

import { QUIZ } from "../../data/quiz";
import { historyAdd } from "../../storage/quizHistoryStorage";

import { Loading } from "../../components/Loading";
import { Question } from "../../components/Question";
import { QuizHeader } from "../../components/QuizHeader";
import { ConfirmButton } from "../../components/ConfirmButton";
import { OutlineButton } from "../../components/OutlineButton";
import { ProgressBar } from "../../components/ProgressBar";
import { OverlayFeedback } from "../../components/OverlayFeedback";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";
import { API_URL } from "@env";

type QuizProps = (typeof QUIZ)[0];

const CARD_INCLINATION = 10;
const CARD_SKIP_AREA = -200;

export function Quiz() {
  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quiz, setQuiz] = useState<QuizProps>({} as QuizProps);
  const [alternativeSelected, setAlternativeSelected] = useState<null | number>(
    null
  );
  const [statusReply, setStatusReply] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState<number | null>(
    null
  );
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [cumulativeElapsedTime, setCumulativeElapsedTime] = useState<number>(0);

  const shake = useSharedValue(0);
  const scrollY = useSharedValue(0);
  const cardPosition = useSharedValue(0);

  const { navigate } = useNavigation();
  const navigation = useNavigation();

  const route = useRoute();
  const { id } = route.params as Params;

  async function playSound(isCorrect: boolean) {
    const file = isCorrect
      ? require("../../assets/correct.mp3")
      : require("../../assets/wrong.mp3");

    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true });

    await sound.setPositionAsync(0);
    await sound.playAsync();
  }

  function handleSkipConfirm() {
    Alert.alert(
      "Dilewati",
      "Apakah Anda benar-benar ingin melewati pertanyaan ini ?",
      [
        { text: "Iya", onPress: () => handleNextQuestion() },
        { text: "Tidak", onPress: () => {} },
      ]
    );
  }

  async function handleFinished() {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const response = await fetch(
        `${API_URL}/grade/user/${userId}/${quiz.id}`
      );

      if (!response.ok) {
        await fetch(`${API_URL}/grade`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            quizId: quiz.id,
            title: quiz.title,
            level: quiz.level,
            points,
            questionsCount: quiz.questions.length,
            correctAnswer: points,
            completedAt: new Date().toISOString(),
          }),
        });
      }
      navigate("finish", {
        points: String(points),
        total: String(quiz.questions.length),
        quizId: quiz.id,
      });
    } catch (error) {
      console.error("Error saving quiz progress:", error);
      Alert.alert(
        "Error",
        "Failed to save quiz progress. Please try again later."
      );
    }
  }

  function handleNextQuestion() {
    if (currentQuestion < quiz.questions.length - 1) {
      const elapsed = (Date.now() - (questionStartTime ?? Date.now())) / 1000;
      setElapsedTime(elapsed);
      setCumulativeElapsedTime((prevState) => prevState + elapsed); // Update cumulative time
      setCurrentQuestion((prevState) => prevState + 1);
    } else {
      handleFinished();
    }
  }

  async function handleConfirm() {
    if (alternativeSelected === null) {
      return handleSkipConfirm();
    }

    if (quiz.questions[currentQuestion].correct === alternativeSelected) {
      setPoints((prevState) => prevState + 1);

      await playSound(true);

      setStatusReply(1);
      handleNextQuestion();
    } else {
      await playSound(false);

      setStatusReply(2);
      shakeAnimation();
    }

    setAlternativeSelected(null);
  }

  function handleStop() {
    Alert.alert("Batalkan", "Apakah Anda ingin berhenti sekarang ?", [
      {
        text: "Tidak",
        style: "cancel",
      },
      {
        text: "Iya",
        style: "destructive",
        onPress: () => {
          // Reset the navigation stack and navigate to the dashboard
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "dashboard" }],
            })
          );
        },
      },
    ]);

    return true;
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleStop
    );

    return () => backHandler.remove();
  }, []);

  async function shakeAnimation() {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);

    shake.value = withSequence(
      withTiming(3, { duration: 400, easing: Easing.bounce }),
      withTiming(0, undefined, (finished) => {
        "worklet";

        if (finished) {
          runOnJS(handleNextQuestion)();
        }
      })
    );
  }

  const shakeStyleAnimated = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          shake.value,
          [0, 0.5, 1, 1.5, 2, 2.5, 3],
          [0, -15, 0, 15, 0, -15, 0]
        ),
      },
    ],
  }));

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const fixedProgressBarStyles = useAnimatedStyle(() => ({
    position: "absolute",
    zIndex: 1,
    paddingTop: 50,
    backgroundColor: THEME.COLORS.GREY_500,
    width: "110%",
    left: "-5%",
    opacity: interpolate(scrollY.value, [50, 90], [0, 1], Extrapolate.CLAMP),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [50, 100],
          [-40, 0],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  const headerStyles = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [60, 90], [1, 0], Extrapolate.CLAMP),
  }));

  const onPan = Gesture.Pan()
    .activateAfterLongPress(200)
    .onUpdate((event) => {
      const moveToLeft = event.translationX < 0;

      if (moveToLeft) {
        cardPosition.value = event.translationX;
      }
    })
    .onEnd((event) => {
      if (event.translationX < CARD_SKIP_AREA) {
        runOnJS(handleSkipConfirm)();
      }

      cardPosition.value = withTiming(0);
    });

  const dragStyles = useAnimatedStyle(() => {
    const rotateZ = cardPosition.value / CARD_INCLINATION;

    return {
      transform: [
        { translateX: cardPosition.value },
        { rotateZ: `${rotateZ}deg` },
      ],
    };
  });

  useEffect(() => {
    console.log("id:", id);

    const quizSelected = QUIZ.filter((item) => item.id === id)[0];
    console.log("===============");
    console.log(quizSelected.level);
    console.log("===============");
    AsyncStorage.setItem("level", `${quizSelected.level}`);
    setQuiz(quizSelected);
    setIsLoading(false);
    setQuestionStartTime(new Date());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <OverlayFeedback status={statusReply} elapsedTime={elapsedTime} />

      <Animated.View style={fixedProgressBarStyles}>
        <Text style={styles.title}>{quiz.title}</Text>
        <ProgressBar
          total={quiz.questions.length}
          current={currentQuestion + 1}
        />
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.question}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Animated.View style={[styles.header, headerStyles]}>
          <QuizHeader
            title={quiz.title}
            currentQuestion={currentQuestion + 1}
            totalOfQuestions={quiz.questions.length}
          />
        </Animated.View>

        <GestureDetector gesture={onPan}>
          <Animated.View style={[shakeStyleAnimated, dragStyles]}>
            <Question
              key={quiz.questions[currentQuestion].title}
              question={quiz.questions[currentQuestion]}
              alternativeSelected={alternativeSelected}
              setAlternativeSelected={setAlternativeSelected}
              onUnmount={() => setStatusReply(0)}
            />
          </Animated.View>
        </GestureDetector>

        <View style={styles.footer}>
          <OutlineButton title="Batalkan" onPress={handleStop} />
          <ConfirmButton onPress={handleConfirm} />
        </View>
      </Animated.ScrollView>
    </View>
  );
}
