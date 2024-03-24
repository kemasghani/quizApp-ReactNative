import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";
import { IconProps } from "phosphor-react-native";

type Props = {
  title: string;
  subtitle: string;
  onPress: () => void;
  icon: React.FC<IconProps>;
};

export function Header({ title, subtitle, icon: Icon, onPress }: Props) {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.history}
        onPress={() => navigate("dashboard")}
      >
        <Icon size={28} color={THEME.COLORS.GREY_100} />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
