import React, { useEffect } from "react";
import { View, StyleSheet, Animated, Image, Easing } from "react-native";

const SplashScreen = () => {
  const scaleAnim = new Animated.Value(0); // Initialize scaleAnim as an Animated.Value

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 3000, // Adjust duration as needed
      easing: Easing.out(Easing.quad), // Apply easing for smoother animation
      useNativeDriver: true,
    }).start(); // Start the animation when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.imageContainer, { transform: [{ scale: scaleAnim }] }]}
      >
        <Image
          style={styles.image}
          source={require("../../assets/smarta-icon.png")} // Replace 'smarta-icon.png' with your actual image path
          resizeMode="contain" // Adjust resizeMode as needed
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202024", // Set your splash screen background color
  },
  imageContainer: {
    width: 400, // Adjust width and height as needed
    height: 400,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default SplashScreen;
