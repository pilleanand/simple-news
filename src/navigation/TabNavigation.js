import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllNewsCoomponent from '../components/news/AllNewsCoomponent';
import TopNewsComponent from '../components/news/TopNewsComponent';
import { tabBarScreenOptions } from './CommonNavigationProperties';

const Tab = createMaterialTopTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={tabBarScreenOptions}>
      <Tab.Screen name="Top News" component={TopNewsComponent} />
      <Tab.Screen name="Technology" component={AllNewsCoomponent} />
    </Tab.Navigator>
  );
}

export default TabNavigation;