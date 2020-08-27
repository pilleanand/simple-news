import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import MainComponent from '../components/MainComponent';

const NavigationStacks = (props) => {

  return (
    <NavigationContainer>
      <MainComponent />
    </NavigationContainer>
  );
}

export default NavigationStacks;