import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Image
} from 'react-native';
import colors from '../constants/colors';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
       <Image
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode='cover'
        /> 
      </View>
      <BodyText>Number chosen was: {props.userNumber}</BodyText>
      <BodyText>Number of rounds: {props.numberOfRounds}</BodyText>
      <Button
        title='NEW GAME'
        color={colors.accent}
        onPress={props.onRestart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary,
    overflow: 'hidden',
    marginVertical: 30
  },

  image: {
    width: '100%',
    height: '100%'
  }
});

export default GameOverScreen;