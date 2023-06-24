import React, {useEffect, useContext} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import MainHeader from '../components/MainHeader';
import GameCard from '../components/GameCard';
import {fetchGames, fetchRelorPop} from '../service/Api';
import {GameContext} from '../context/GameContext';

export default function MainContainer() {
  const {addGames, showedGames, setRelevanceSorted, setPopularitySorted} =
    useContext(GameContext);

  useEffect(() => {
    const fetchData = async () => {
      const list = await fetchGames();
      addGames([{key: 'left-spacer'}, ...list, {key: 'right-spacer'}]);
    };

    const fetchRelAndPop = async () => {
      const relevance = await fetchRelorPop('relevance');
      setRelevanceSorted([
        {key: 'left-spacer'},
        ...relevance,
        {key: 'right-spacer'},
      ]);

      const popularity = await fetchRelorPop('popularity');
      console.log(JSON.stringify(popularity));
      setPopularitySorted([
        {key: 'left-spacer'},
        ...popularity,
        {key: 'right-spacer'},
      ]);
    };

    if (showedGames.length === 0) {
      fetchData();
      fetchRelAndPop();
    }
  }, [showedGames]);

  return (
    <View style={styles.container}>
      <MainHeader />
      <FlatList
        data={showedGames}
        renderItem={({item}) => (
          <GameCard
            id={item.id}
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
