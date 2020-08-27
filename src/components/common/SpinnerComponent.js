import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

const SpinnerComponent = (props) => {
  return props.showProgress ?
    <View style={styles.containerViewStyle}>
      <Progress.CircleSnail color={['red', 'green', 'blue']} />
    </View>
    : null;
}

const styles = StyleSheet.create({
  containerViewStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.5,
    backgroundColor: 'grey',
    zIndex: 1000
  }
});

export default SpinnerComponent;