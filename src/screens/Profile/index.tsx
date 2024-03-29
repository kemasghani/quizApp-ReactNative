import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./style";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import PrimaryButton from '../../components/PrimaryButton';


const ProfileScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Profil</Text>
        <View style={styles.profileContainer}>
          <View style={styles.profilePicture}></View>
          <View style={styles.profileInfo}>
            <Text style={styles.nameText}>John Doe</Text>
            <Text style={styles.emailText}>johndoe@example.com</Text>
          </View>
        </View>
        <View style={styles.loginCard}>
          <Text style={styles.inputLabel}>Nama</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
          </View>
          <Text style={styles.inputLabel}>Nama Pengguna</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
          </View>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
          </View>
          <Text style={styles.inputLabel}>Kata Sandi</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
          </View>
          <View style={{ alignContent: 'center', alignItems: 'center' }}>
            <PrimaryButton title="Simpan" onPress={() => { }} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


export default ProfileScreen;