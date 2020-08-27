import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopNewsCoomponent from '../components/TopNewsCoomponent';
import { tabBarScreenOptions } from './CommonNavigationProperties';
import AllNewsCoomponent from '../components/AllNewsCoomponent';

const Tab = createMaterialTopTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={tabBarScreenOptions}>
      <Tab.Screen name="Top News" component={TopNewsCoomponent} />
      <Tab.Screen name="All News" component={AllNewsCoomponent} />
    </Tab.Navigator>
  );
}

export default TabNavigation;