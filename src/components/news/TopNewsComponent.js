import React from 'react';
import { View } from 'react-native';
import NewsComponent from './NewsComponent';

const TopNewsComponent = ({ navigation }) => {
  return (
    <View >
      <NewsComponent newsType={'topNews'} navigation={navigation} />
    </View>
  );
}

export default TopNewsComponent;