// RankingList.js

import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './style';
import rank1 from '../../assets/rank-1.svg';
import rank2 from '../../assets/rank-2.svg';
import rank3 from '../../assets/rank-3.svg';

const RankingList = () => {
  const data = [
    {
      id: 1,
      imageUri: 'https://via.placeholder.com/150',
      user: 'Lorem Ipsum',
      nilai: '2078',
    },
    {
      id: 2,
      imageUri: 'https://via.placeholder.com/150',
      user: 'Emma',
      nilai: '2039',
    },
    {
      id: 3,
      imageUri: 'https://via.placeholder.com/150',
      user: 'Sam',
      nilai: '2003',
    },
    {
      id: 4,
      imageUri: 'https://via.placeholder.com/150',
      user: 'Sam',
      nilai: '2003',
    },
    {
      id: 5,
      imageUri: 'https://via.placeholder.com/150',
      user: 'Sam',
      nilai: '2003',
    },
    {
      id: 6,
      imageUri: 'https://via.placeholder.com/150',
      user: 'Sam',
      nilai: '2003',
    },
    {
      id: 7,
      imageUri: 'https://via.placeholder.com/150',
      user: 'Sam',
      nilai: '2003',
    },
  ];

  const renderRankIcon = (index) => {
    if (index === 0) {
      return <Image source={require('../../assets/rank-1.svg')} style={styles.rankIcon} />;
    } else if (index === 1) {
      return <Image source={require('../../assets/rank-2.svg')} style={styles.rankIcon} />;
    } else if (index === 2) {
      return <Image source={require('../../assets/rank-3.svg')} style={styles.rankIcon} />;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={item.id}>
          <View style={styles.rankingContainer}>
            {/* {renderRankIcon(index)} */}
            <Text key={item.id} style={styles.rank}>{`Rank ${index + 1}`}</Text>
          </View>
          <View key={item.id} style={styles.row}>
            <Image
              source={{ uri: item.imageUri }}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.user}>{item.user}</Text>
              <Text style={styles.nilai}>Total Nilai : {item.nilai}</Text>
            </View>

          </View>
        </View>
      ))}
    </View>
  );
};

export { RankingList };
