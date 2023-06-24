import React, {createContext, useState} from 'react';

export const GameContext = createContext({});

const GameProvider = ({children}) => {
  const [pulledGames, setPulledGames] = useState([]);
  const [showedGames, setShowedGames] = useState([]);
  const [relevanceSorted, setRelevanceSorted] = useState([]);
  const [popularitySorted, setPopularitySorted] = useState([]);

  const addGames = list => {
    setPulledGames(list);
    setShowedGames(list);
  };

  const getAlphabeticallyOrdered = () => {
    const sorted = sortGamesAlphabetically(pulledGames);
    setShowedGames(sorted);
  };

  const getByDateOrdered = () => {
    const sorted = sortGamesByReleaseDate(pulledGames);
    console.log(sorted);
    setShowedGames(sorted);
  };

  const getRelevanceOrdered = () => {
    setShowedGames(relevanceSorted);
  };

  const getPopularityOrdered = () => {
    setShowedGames(popularitySorted);
  };

  const getByPlatform = platform => {
    const filteredGames = pulledGames.filter(
      game => game.platform === platform,
    );
    setShowedGames(filteredGames);
  };

  const getByCategory = genre => {
    const filteredGames = pulledGames.filter(game => game.genre === genre);
    setShowedGames(filteredGames);
  };

  const sortGamesAlphabetically = data => {
    const sortedGames = [...data];
    sortedGames.sort((a, b) => {
      const titleA = a.title?.toUpperCase() || '';
      const titleB = b.title?.toUpperCase() || '';
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
    return sortedGames;
  };

  const sortGamesByReleaseDate = games => {
    const sortedGames = [...games].sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return dateA - dateB;
    });
    return sortedGames;
  };

  return (
    <GameContext.Provider
      value={{
        showedGames,
        addGames,
        setRelevanceSorted,
        setPopularitySorted,
        getAlphabeticallyOrdered,
        getByDateOrdered,
        getByPlatform,
        getByCategory,
        getRelevanceOrdered,
        getPopularityOrdered,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
