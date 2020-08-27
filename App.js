import React from 'react';
import { SafeAreaView } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import NavigationStacks from './src/navigation';
import { showToastMessage } from './src/util/ToastUtility';

const App: () => React$Node = () => {

  React.useEffect(() => {
    checkNetworkStatus();
  }, []);

  const checkNetworkStatus = () => {
    NetInfo.addEventListener(connectionInfo => {
      connectionInfo.isConnected ?
        showToastMessage('Connected to Internet')
        : showToastMessage('No Internet');
    });
  }
  return (
    <>
      <SafeAreaView />
      <NavigationStacks />
    </>
  );
};

export default App;
