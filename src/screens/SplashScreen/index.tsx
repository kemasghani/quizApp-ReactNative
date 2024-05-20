import React, { useEffect } from "react";
import { View, StyleSheet, Animated, Image, Easing } from "react-native";
import { Audio } from "expo-av"; // Import Audio from expo-av for sound playback

const SplashScreen = () => {
  const scaleAnim = new Animated.Value(0); // Initialize scaleAnim as an Animated.Value

  useEffect(() => {
    const playSound = async () => {
      const soundObject = new Audio.Sound(); // Create a new Audio.Sound object
      try {
        await soundObject.loadAsync(require("../../assets/opening.mp3")); // Load your sound file (replace 'sound.mp3' with your actual sound file)
        await soundObject.playAsync(); // Play the loaded sound
      } catch (error) {
        console.log("Error loading sound:", error);
      }
    };

    playSound(); // Call the playSound function when the component mounts

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
