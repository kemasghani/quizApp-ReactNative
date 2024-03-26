// BottomNavigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../../screens/Home';
import { History } from '../../screens/History';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={History} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
