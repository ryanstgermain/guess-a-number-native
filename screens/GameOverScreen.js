import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import colors from '../constants/colors';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/success.png')}
            style={styles.image}
            resizeMode='cover'
          /> 
        </View>
        <BodyText style={styles.result}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.numberOfRounds}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
        <MainButton onPress={props.onRestart}>
          NEW GAME
        </MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },

  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 3,
    borderColor: colors.primary,
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 20
  },

  image: {
    width: '100%',
    height: '100%'
  },

  result: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    marginVertical: 30,
    paddingHorizontal: 10
  },

  highlight: {
    color: colors.accent,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;