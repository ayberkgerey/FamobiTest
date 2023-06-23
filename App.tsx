import React from 'react';
import MainContainer from './src/containers/MainContainer';
import GameProvider from './src/context/GameContext';

export default function App() {
  return (
    <GameProvider>
      <MainContainer />
    </GameProvider>
  );
}
