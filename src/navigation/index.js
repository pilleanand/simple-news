import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';

const NavigationStacks = (props) => {

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

export default NavigationStacks;