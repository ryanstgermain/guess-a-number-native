import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import colors from '../constants/colors';

import TitleText from '../components/TitleText';

const Header = (props) => {
  return (
    <View 
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}
    >
      <TitleText style={styles.headerTitle}>
        {props.title}
      </TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },

  headerAndroid: {
    backgroundColor: colors.primary,
    //borderBottomColor: 'transparent',
    //borderBottomWidth: 0
  },

  headerTitle: {
    color: Platform.OS === 'android' ? 'white' : colors.accent
  }
});

export default Header;
