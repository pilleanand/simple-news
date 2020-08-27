import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { stackNavigationScreenOptions } from './CommonNavigationProperties';
import TabNavigation from './TabNavigation';
import NewsDetailsComponent from '../components/news/NewsDetailsComponent';

const MainStack = createStackNavigator();

export default MainStackNavigation = () => (
  <MainStack.Navigator initialRouteName='tabNavigation'
    screenOptions={stackNavigationScreenOptions}>
    <MainStack.Screen name="tabNavigation"
      options={{ title: 'e-News', headerTitleAlign: 'center' }}
      component={TabNavigation} />
    <MainStack.Screen name="NewsDetails"
      options={{ title: 'e-News', headerTitleAlign: 'center' }}
      component={NewsDetailsComponent} />
  </MainStack.Navigator>
);