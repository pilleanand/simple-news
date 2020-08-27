import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainComponent from '../components/MainComponent';
import { tabBarScreenOptions } from './CommonNavigationProperties';

const Tab = createBottomTabNavigator();
// const SubjectContext 

function TabNavigation(props) {
  return (
    <Tab.Navigator screenOptions={tabBarScreenOptions} initialRouteName="tab1">
      <Tab.Screen name="tab1" component={MainComponent} />
      <Tab.Screen name="tab2" component={MainComponent} />
      {/* <SubjectContext.Provider value={route.params}> */}
      <Tab.Screen name="tab3" component={MainComponent} />
      {/* </SubjectContext.Provider> */}
    </Tab.Navigator>
  );
}

export default TabNavigation;