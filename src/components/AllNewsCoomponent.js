import React from 'react';
import { View } from 'react-native';
import NewsComponent from './NewsComponent';

const AllNewsCoomponent = () => {
  return (
    <View >
      <NewsComponent newsType={'allNews'} />
    </View>
  );
}

export default AllNewsCoomponent;