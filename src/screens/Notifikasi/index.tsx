import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";
import Notification from "../../assets/notification.svg";
import Notif1 from "../../assets/notif1.svg";
import Notif2 from "../../assets/notif2.svg";
import Notif3 from "../../assets/notif3.svg";

const Notifikasi: React.FC = () => {
  return (
    <View>
      <Header
        title="Notifikasi"
        subtitle={`Notifikasi`}
        icon1={null}
        icon2={Notification}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.singleNotif}>
            <Notif1 />
            <Text style={styles.notifText}>
              Ada paket baru untuk latihan Penalaran umum di aplikasi SMARTA.
              &nbsp;
              <Text style={styles.link}>Ayo cek sekarang!</Text>
            </Text>
          </View>
          <View style={styles.singleNotif}>
            <Notif2 />
            <Text style={styles.notifText}>
              Jangan lupa untuk mengerjakan paket 3 Literasi Bahasa Indonesia
              hari ini. &nbsp;
              <Text style={styles.link}>Yuk, uji pengetahuanmu sekarang!</Text>
            </Text>
          </View>
          <View style={styles.singleNotif}>
            <Notif3 />
            <Text style={styles.notifText}>
              Paket 4 Penalaran Kuantitatif sudah siap untuk dikerjakan hari
              ini. &nbsp;
              <Text style={styles.link}>Ayo kerjakan sekarang!</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notifikasi;
