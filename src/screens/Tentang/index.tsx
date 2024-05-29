import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";
import Back from "../../assets/back.svg";

export function Tentang() {
  return (
    <View style={styles.container}>
      <Header
        title="Tentang Kami"
        subtitle={`Back`}
        icon1={Back}
        icon2={null}
      />
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <Image
              style={{ width: 200, height: 200 }}
              source={require("../../assets/big-smarta.png")}
            />
          </View>
          <View style={styles.content}>
            <View>
              <Text style={styles.subTitle}>
                Aplikasi SMARTA adalah aplikasi mobile yang dirancang khusus
                untuk membantu siswa SMA atau calon mahasiswa dalam
                mempersiapkan diri menghadapi Seleksi Nasional Berdasarkan Tes
                (SNBT). SMARTA memberikan akses ke berbagai contoh latihan soal
                SNBT yang berkualitas dan terstruktur berdasarkan subtes materi
                ujian. Keseluruhan aplikasi ini SMARTA dikelola oleh Ghani One
                Corp. Terima kasih untuk seluruh tim SMARTA yang telah
                mendedikasikan waktu untuk menyediakan pengembangan akademik
                yang terjangkau dan mudah diakses oleh semua orang.
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          ></View>
        </ScrollView>
      </View>
    </View>
  );
}
