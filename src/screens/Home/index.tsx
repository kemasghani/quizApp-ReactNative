import React, { useEffect, useState, useCallback } from "react";
import { FlatList, View } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import Back from "../../assets/back.svg";

import { Level } from '../../components/Level';
import { Header } from '../../components/Header';
import { QuizCard } from '../../components/QuizCard';

import { styles } from './styles';
import { QUIZZES } from '../../data/quizzes';
import { allMateri } from "../../data/materi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from '@env';

export function Home() {
  const [quizzes, setQuizzes] = useState(QUIZZES);
  const [levels, setLevels] = useState([1, 2, 3]);
  const [grades, setGrades] = useState([]);
  const route = useRoute();
  const { id } = route.params;
  console.log("id:", id);

  const [selectedMateri, setSelectedMateri] = useState(() => allMateri.find(materi => materi.id === id));

  const { navigate } = useNavigation();

  function handleLevelFilter(level: number) {
    const levelAlreadySelected = levels.includes(level);

    if (levelAlreadySelected) {
      if (levels.length > 1) {
        setLevels(prevState => prevState.filter(item => item !== level));
      }
    } else {
      setLevels(prevState => [...prevState, level]);
    }
  }

  useEffect(() => {
    setSelectedMateri(allMateri.find(materi => materi.id === id));
  }, [id]);

  useEffect(() => {
    console.log("selectedMateri:", selectedMateri);

    setQuizzes(QUIZZES.filter(quiz => levels.includes(quiz.level) && quiz.title === selectedMateri?.title));
  }, [levels, selectedMateri]);

  // Get userId from AsyncStorage and fetch grades
  useEffect(() => {
    const fetchUserIdAndGrades = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        console.log('userId:Home', userId);

        if (userId) {
          console.log('userId:', userId);

          const response = await axios.get(`${API_URL}/grade/user/${userId}`);
          setGrades(response.data);
          console.log('grades:', response.data);
        }
      } catch (error) {
        console.error('Error fetching user id or grades:', error.response.status);
      }
    };
    fetchUserIdAndGrades();
  }, [selectedMateri]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        route.params.id = null; // Reset the id parameter when unfocusing
        setSelectedMateri(null);
      };
    }, [route.params])
  );

  const checkAttempted = (quizId) => {
    const result = grades.some(grade => grade.quizId === quizId);

    return result;
  };

  return (
    <View style={styles.container}>
      <Header
        icon1={Back}
        icon2={null}
        title={selectedMateri?.title}
        subtitle="Treine seus conhecimento"
        onPress={() => navigate('history')}
      />

      <View style={styles.levels}>
        <Level title="Mudah" type="EASY" onPress={() => handleLevelFilter(1)} isChecked={levels.includes(1)} />
        <Level title="Sedang" type="MEDIUM" onPress={() => handleLevelFilter(2)} isChecked={levels.includes(2)} />
        <Level title="Sulit" type="HARD" onPress={() => handleLevelFilter(3)} isChecked={levels.includes(3)} />
      </View>

      <FlatList
        data={quizzes}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <QuizCard
            index={index}
            data={item}
            attempted={checkAttempted(item.id)}
            grades={grades} // Pass the grades data as a prop
            onPress={() => navigate('quiz', { id: item.id })}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cards}
      />
    </View>
  );
}
