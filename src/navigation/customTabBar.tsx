import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { SvgXml } from "react-native-svg";

// Define your SVG code as a string
const customSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="63" height="75" viewBox="0 0 63 75" fill="none">
    <rect width="63" height="8" rx="4" fill="white"/>
    <path d="M5.69423 8H57.4269L63 75H0L5.69423 8Z" fill="url(#paint0_linear_140_852)"/>
    <defs>
      <linearGradient id="paint0_linear_140_852" x1="31.5" y1="-40.4021" x2="31.5" y2="75" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>
`;

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const currentRouteName = state.routes[state.index].name;

  if (currentRouteName === "home" || currentRouteName === "finish" || currentRouteName === "inputEmail" || currentRouteName === "inputOtp" || currentRouteName === "login" || currentRouteName === "register" || currentRouteName === "ranking" || currentRouteName === "quiz" || currentRouteName === "profiledit" || currentRouteName === "kebijakan" || currentRouteName === "tentang") {
    return null; // Don't render the tab bar on the 'home' screen
  }

  return (
    <View style={styles.tabContainer}>
      {state.routes.slice(0, 4).map((route, index) => {
        // Slice to only include first 4 routes
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.activeTabButton]}
          >
            {/* Custom SVG Background */}
            {isFocused && (
              <View style={styles.svgBackgroundContainer}>
                <SvgXml
                  xml={customSVG}
                  width="63"
                  height="75"
                  style={styles.svgBackground}
                />
              </View>
            )}
            {/* Your Icon Component */}
            {options.tabBarIcon({
              focused: isFocused,
              color: "white",
              size: 24,
            })}
            {/* Tab Label */}
            <Text style={[styles.tabLabel, isFocused && styles.activeTabLabel]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#8D8D99", // Background color of the tab bar
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    position: "relative", // Required for positioning SVG behind the icon
  },
  activeTabButton: {
    backgroundColor: "transparent", // Make sure active tab button background is transparent
  },
  svgBackgroundContainer: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -31.5 }], // Adjust translation based on SVG width
  },
  svgBackground: {
    // No need to set position, top, and left here
  },
  tabLabel: {
    color: "#ffffff",
    marginTop: 4,
    fontSize: 12,
  },
  activeTabLabel: {
    color: "#ffffff", // Adjust active tab label color if needed
    fontWeight: "bold", // Adjust active tab label style if needed
  },
});

export default CustomTabBar;
