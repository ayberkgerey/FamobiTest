import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GameDetailContainer, MainContainer} from '../containers';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainContainer} />
      <Stack.Screen name="Detail" component={GameDetailContainer} />
    </Stack.Navigator>
  );
}
