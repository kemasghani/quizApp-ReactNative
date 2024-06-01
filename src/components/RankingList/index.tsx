import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { styles } from './style';
import Avatar from "../../assets/avatar.svg";


const RankingList = ({ data }) => {
  const getRankImage = (index) => {
    switch (index) {
      case 0:
        return require('../../assets/rank-1.svg');
      case 1:
        return require('../../assets/rank-2.svg');
      case 2:
        return require('../../assets/rank-3.svg');
      default:
        return require('../../assets/edit-icon.svg'); // Provide a default image or handle other ranks as needed
    }
  };

  const renderItem = ({ item, index }) => (
    <View key={item.userId}>
      <View style={styles.rankingContainer}>
        <Image
          source={getRankImage(index)} // Use the getRankImage function to get the appropriate image source
          style={styles.rankIcon}
        />
        <Text style={styles.rank}>{`Rank ${index + 1}`}</Text>
      </View>
      <View style={styles.row}>
        {item.avatar ?
          <Image
            source={{ uri: `${item?.avatar}` }} // Placeholder image URI
            style={styles.image}
          /> :
          <Image
            source={require('../../assets/user.png')}
            style={styles.image}
          />
        }
        <View style={styles.textContainer}>
          <Text style={styles.user}>{item.username}</Text>
          <Text style={styles.nilai}>Total Nilai : {item.totalPoints}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.userId.toString()}
    />
  );
};

export { RankingList };
