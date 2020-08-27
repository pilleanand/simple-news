import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import NavigationStacks from './src/navigation';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView />
      <NavigationStacks />
    </>
  );
};

export default App;
