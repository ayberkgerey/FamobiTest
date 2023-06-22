import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Button</Text>
      <Text style={styles.title}>Famobi </Text>
      <Text style={styles.text}>Button</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(20,20,37)',
    borderBottomWidth: 1,
    borderColor: 'rgb(225,244,120)',
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
  },
  text: {color: 'purple', fontWeight: '600'},
});
