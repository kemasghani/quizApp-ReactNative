import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";
import Back from "../../assets/back.svg";

export function Kebijakan() {
  return (
    <View style={styles.container}>
      <Header
        title="Kebijakan Privasi"
        subtitle={`profileBack`}
        icon1={Back}
        icon2={null}
      />
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>Kebijakan Privasi</Text>
              <Text style={styles.textContent}>
                Tanggal Efektif: 29 Mei 2024
              </Text>
            </View>
            <View>
              <Text style={styles.textContent}>
                SMARTA ("Aplikasi", "Kami", "Kami", atau "Milik Kami")
                berkomitmen untuk melindungi privasi pengguna aplikasinya
                ("Pengguna", "Anda", atau "Milik Anda"). Kebijakan Privasi ini
                ("Kebijakan") menjelaskan bagaimana Kami mengumpulkan,
                menggunakan, dan mengungkapkan informasi yang Anda berikan
                kepada Kami saat Anda menggunakan Aplikasi. Kebijakan ini juga
                menjelaskan pilihan yang Anda miliki terkait informasi Anda dan
                bagaimana Anda dapat menghubungi Kami.
              </Text>
            </View>
          </View>
          <View style={styles.contentPoint}>
            <View>
              <Text style={styles.subTittle}>
                Informasi yang Kami Kumpulkan
              </Text>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Informasi yang Anda berikan kepada Kami: Ini termasuk
                  informasi yang Anda masukkan secara langsung ke Aplikasi,
                  seperti nama, alamat email, dan nomor telepon Anda.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Informasi yang Kami kumpulkan secara otomatis: Ini termasuk
                  informasi yang dikumpulkan secara otomatis oleh Aplikasi saat
                  Anda menggunakannya, seperti alamat IP Anda, perangkat yang
                  Anda gunakan, dan sistem operasinya.
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.subTittle}>Penggunaan Informasi Anda</Text>
              <Text style={styles.textContent}>
                Kami menggunakan informasi yang Kami kumpulkan untuk:
              </Text>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Menyediakan dan mengoperasikan Aplikasi
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Meningkatkan dan mempersonalisasi pengalaman Anda dengan
                  Aplikasi
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Mengirimkan komunikasi kepada Anda, seperti pemberitahuan dan
                  buletin
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Melakukan riset pasar dan analisis
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Mencegah penipuan dan melindungi keamanan Aplikasi dan
                  Penggunanya
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Mematuhi hukum dan peraturan yang berlaku
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.subTittle}>Pengungkapan Informasi Anda</Text>
              <Text style={styles.textContent}>
                Kami tidak membagikan informasi pribadi Anda dengan pihak ketiga
                tanpa persetujuan Anda, kecuali dalam keadaan berikut:
              </Text>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Kami percaya bahwa pengungkapan diperlukan atau sesuai untuk
                  mencegah bahaya yang akan segera terjadi terhadap hak-hak
                  Anda, properti, atau keamanan orang lain.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Kami telah memberikan informasi kepada penyedia layanan pihak
                  ketiga yang membantu Kami mengoperasikan Aplikasi, seperti
                  penyedia hosting dan analisis data.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Kami diwajibkan untuk melakukannya oleh hukum atau proses
                  hukum.
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.subTittle}>Pilihan Anda</Text>
              <Text style={styles.textContent}>
                Anda memiliki pilihan berikut terkait informasi Anda:
              </Text>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Anda dapat mengakses dan memperbarui informasi pribadi Anda di
                  pengaturan akun Anda.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Anda dapat berhenti menerima komunikasi pemasaran dari Kami
                  dengan mengikuti tautan berhenti berlangganan di email yang
                  Kami kirimkan kepada Anda.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Anda dapat meminta Kami untuk menghapus informasi pribadi Anda
                  dengan menghubungi Kami di cs@smarta.com
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.subTittle}>Hubungi Kami</Text>
              <Text style={styles.textContent}>
                Jika Anda memiliki pertanyaan tentang Kebijakan ini atau praktik
                privasi Kami, silakan hubungi Kami:
              </Text>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Melalui email : cs@smarta.com
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.textContent}>
                  Melalui website : https://smarta.com/kontak
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
