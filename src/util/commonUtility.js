import { Dimensions, Platform, Linking } from 'react-native';
import qs from 'qs';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const platform = Platform.OS;

export const getDeviceWidth = () => {
  return deviceWidth;
}

export const getDeviceHeight = () => {
  return deviceHeight;
}

export const getPlatform = () => {
  return platform;
}

export const openupDialerpadUtility = (telephoneNumber) => {
  let number = '';
  if (Platform.OS === 'ios') {
    number = `telprompt:${telephoneNumber}`;
  }
  else {
    number = `tel:${telephoneNumber}`;
  }
  Linking.openURL(number);
}

export const sendEmailMessageUtility = (to, subject) => {
  let url = `mailto:${to}`;

  // Create email link query
  const query = qs.stringify({
    subject: subject,
    // body: body,
    // cc: cc,
    // bcc: bcc
  });

  if (query.length) {
    url += `?${query}`;
  }

  // check if we can use this link
  // const canOpen = Linking.canOpenURL(url);

  // if (!canOpen) {
  //   throw new Error('Provided URL can not be handled');
  // }

  Linking.openURL(url);
}