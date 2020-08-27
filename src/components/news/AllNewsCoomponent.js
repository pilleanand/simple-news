import React from 'react';
import { View } from 'react-native';
import NewsComponent from './NewsComponent';

const AllNewsCoomponent = ({ navigation }) => {
  return (
    <View >
      <NewsComponent newsType={'allNews'} navigation={navigation} />
    </View>
  );
}

export default AllNewsCoomponent;