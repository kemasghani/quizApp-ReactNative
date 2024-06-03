import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { IconProps } from "phosphor-react-native";

type Props = {
  title: string;
  subtitle: string;
  onPress: () => void;
  icon1: React.FC<IconProps> | string | null; // Updated to accept string (URL) or null as a prop
  icon2: React.FC<IconProps> | string | null; // Updated to accept string (URL) or null as a prop
};

export function Header({
  title,
  subtitle,
  icon1: Icon1,
  icon2: Icon2,
  onPress,
}: Props) {
  const { navigate } = useNavigation();

  const handleNavigation = () => {
    if (title === "Back") {
      navigate("login");
    } else {
      navigate("dashboard");
    }
  };

  const renderIcon = (
    icon: React.FC<IconProps> | string | null,
    size: number
  ) => {
    if (typeof icon === "string") {
      return (
        <Image
          source={{ uri: icon }}
          style={{ width: size, height: size, borderRadius: size / 2 }}
        />
      );
    }
    if (icon) {
      return <icon size={size} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {subtitle === "dashboard" && (
        <View style={styles.history}>
          <TouchableOpacity onPress={handleNavigation}>
            {renderIcon(Icon1, 54) || (
              <Image
                source={require("../../assets/user.png")}
                style={{ width: 54, height: 54, borderRadius: 50 }}
              />
            )}
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      )}
      {Icon1 && subtitle != "dashboard" && (
        <View style={styles.history}>
          <TouchableOpacity onPress={handleNavigation}>
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
          <TouchableOpacity onPress={handleNavigation}>
            <Icon2 size={10} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
