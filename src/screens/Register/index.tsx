import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { styles } from "./style";
import PrimaryButton from '../../components/PrimaryButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Register() {
  const { navigate } = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Image style={{ width: 300, height: 300 }} source={require('../../assets/smarta-icon.png')} />
        <View style={styles.loginCard}>
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
            <TextInput style={styles.input}
              secureTextEntry={true}
            />
          </View>
          <Text style={styles.inputLabel}>Konfirmasi Kata Sandi</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <View style={{ alignContent: 'center', alignItems: 'center' }}>
            <PrimaryButton title="Daftar" onPress={() => { }} />
            <View style={styles.footer}>
              <Text style={styles.footerText}>Sudah Memiliki Akun? </Text>
              <TouchableOpacity onPress={() => navigate('login')}>
                <Text style={styles.textLink}>Masuk Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
