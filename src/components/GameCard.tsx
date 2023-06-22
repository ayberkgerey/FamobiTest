import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, Image} from 'react-native';

export default function GameCard(props) {
  if (!props.title || !props.thumbnail) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: props.thumbnail}} style={styles.imageBox} />
      <View style={{marginLeft: 12, alignSelf: 'center'}}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.publisher}</Text>
        <View style={styles.genreBox}>
          <Text style={styles.genreText}>{props.genre}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 100,
    borderRadius: 22,
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(28,30,55)',
  },
  imageBox: {
    backgroundColor: 'white',
    height: 80,
    width: 80,
    borderRadius: 22,
    marginLeft: 10,
  },
  genreBox: {
    backgroundColor: 'rgb(154,138,241)',
    borderRadius: 12,
    padding: 5,
    alignSelf: 'flex-start',
  },
  genreText: {
    fontWeight: '500',
    fontSize: 12,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
  text: {
    color: 'darkgray',
  },
});