import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Header from '../components/Header';
import GameCard from '../components/GameCard';
import {fetchGames, Game} from '../service/Api';

export default function MainContainer() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = await fetchGames();
      setGames([{key: 'left-spacer'}, ...list, {key: 'right-spacer'}]);
      console.log(games);
    };

    if (games.length === 0) {
      fetchData();
    }
  }, [games]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={games}
        renderItem={({item}) => (
          <GameCard
            thumbnail={item.thumbnail}
            title={item.title}
            publisher={item.publisher}
            genre={item.genre}
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
