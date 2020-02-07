import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import colors from '../constants/colors';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <BodyText>Number of rounds: {props.numberOfRounds}</BodyText>
      <BodyText>Number chosen was: {props.userNumber}</BodyText>
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
  }
});

export default GameOverScreen;