import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { styles } from "./style";
import PrimaryButton from '../../components/PrimaryButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';
import Close from "../../assets/close.svg";
import { RankingList } from '../../components/RankingList';


function Ranking() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.scrollViewContent}>

      <Header
        title="Peringkat"
        subtitle={`Peringkat`}
        // icon1={null}
        icon1={Close}
      />
      <View style={{ alignItems: 'center', marginTop: 15, marginBottom: 45 }}>
        <Image source={require('../../assets/trophy.png')} />
      </View>
      <RankingList />
    </ScrollView>
  );
}


export { Ranking };