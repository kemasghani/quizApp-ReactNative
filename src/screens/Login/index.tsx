import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, } from 'react-native';
import { styles } from "./style";
import PrimaryButton from '../../components/PrimaryButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Login() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={{ width: 300, height: 300 }} source={require('../../assets/smarta-icon.png')} />
      <View style={styles.loginCard}>
        <Text style={styles.inputLabel}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
        </View>
        <Text style={styles.inputLabel}>Kata Sandi</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 13 }} onPress={() => navigate('register')}>
          <Text style={styles.textLink}>Lupa Kata Sandi?</Text>
        </TouchableOpacity>
        <View style={{ alignContent: 'center', alignItems: 'center' }}>
          <PrimaryButton title="Login" onPress={() => { }} />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Belum Memiliki Akun? </Text>
            <TouchableOpacity onPress={() => navigate('register')}>
              <Text style={styles.textLink}>Daftar Sekarang</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </View>
  );
}

