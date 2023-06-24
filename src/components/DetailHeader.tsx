import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {SvgUri} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

export default function DetailHeader(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <SvgUri
          width="40"
          height="40"
          uri="https://www.svgrepo.com/show/256924/left-arrow-back.svg"
          style={{marginLeft: 10}}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
      <View style={{width: 40}} />
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
