import React, {useEffect, useContext} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Header from '../components/Header';
import GameCard from '../components/GameCard';
import {fetchGames} from '../service/Api';
import {GameContext} from '../context/GameContext';

export default function MainContainer() {
  const {addGames, showedGames} = useContext(GameContext);

  useEffect(() => {
    const fetchData = async () => {
      const list = await fetchGames();
      addGames([{key: 'left-spacer'}, ...list, {key: 'right-spacer'}]);
    };

    if (showedGames.length === 0) {
      fetchData();
    }
  }, [showedGames]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={showedGames}
        renderItem={({item}) => (
          <GameCard
            thumbnail={item.thumbnail}
            title={item.title}
            publisher={item.publisher}
            genre={item.genre}
            platform={item.platform}
            date={item.release_date}
            bounces={false}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgb(17,17,26)'},
});
