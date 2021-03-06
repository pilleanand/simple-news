import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './MainStackNavigation';

const NavigationStacks = (props) => {

  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
}

export default NavigationStacks;