import React from 'react';
import {View, Text} from 'react-native';

export default function InfoBox(props) {
  return (
    <View
      style={{
        backgroundColor: props.backgroundColor,
        height: 20,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
      }}>
      <Text style={{color: 'black'}}>{props.text}</Text>
    </View>
  );
}
