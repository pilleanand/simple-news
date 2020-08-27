import React from 'react';
import { View } from 'react-native';
import NewsComponent from './NewsComponent';

const TopNewsCoomponent = () => {
  return (
    <View >
      <NewsComponent newsType={'topNews'} />
    </View>
  );
}

export default TopNewsCoomponent;