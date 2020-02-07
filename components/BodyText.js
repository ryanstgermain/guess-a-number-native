import React from 'react';
import { StyleSheet, Text } from 'react-native';
// import colors from '../constants/colors';

const BodyText = (props) => {
  return (
    <Text style={styles.body}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans'
  }
});

export default BodyText;