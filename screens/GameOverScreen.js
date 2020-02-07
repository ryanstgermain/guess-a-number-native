import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.numberOfRounds}</Text>
      <Text>Number chosen was: {props.userNumber}</Text>
      <Button
        title='NEW GAME'
        color='black'
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