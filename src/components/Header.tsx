import React, {useContext} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import SortModal from './SortModal';
import FilterModal from './FilterModal';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <SortModal />
      <Text style={styles.title}>Famobi </Text>
      <FilterModal />
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
    borderColor: 'aqua',
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
  },
  text: {color: 'purple', fontWeight: '600'},
});
