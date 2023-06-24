import React from 'react';
import GameProvider from './src/context/GameContext';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </GameProvider>
  );
}
