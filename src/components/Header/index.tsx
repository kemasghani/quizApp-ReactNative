import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";
import { IconProps } from "phosphor-react-native";

type Props = {
  title: string;
  subtitle: string;
  onPress: () => void;
  icon1: React.FC<IconProps> | null; // Updated to accept null as a prop
  icon2: React.FC<IconProps> | null; // Updated to accept null as a prop
};

export function Header({
  title,
  subtitle,
  icon1: Icon1,
  icon2: Icon2,
  onPress,
}: Props) {
  const { navigate, goBack } = useNavigation();
  return (
    <View style={styles.container}>
      {Icon1 && (
        <View style={styles.history}>
          <TouchableOpacity
            onPress={() => {
              console.log(title); // Log the title to the console
              title === "Back" ? navigate("login") : navigate("dashboard");
            }}
          >
            <Icon1 size={28} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      )}
      {Icon2 && (
        <View style={styles.history2}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log(title); // Log the title to the console
              title === "Back" ? navigate("login") : navigate("dashboard");
            }}
          >
            <Icon2 size={10} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
