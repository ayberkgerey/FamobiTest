import React, {useEffect, useState} from 'react';
import {Image, View, Text, StyleSheet, ScrollView} from 'react-native';
import DetailHeader from '../components/DetailHeader';
import {fetchDetails} from '../service/Api';
import InfoBox from '../components/InfoBox';

export default function GameDetailContainer({route}) {
  const [details, setDetails] = useState<any>(null);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const {item} = route.params;

  useEffect(() => {
    const fetchData = async () => {
      const list = await fetchDetails(item);
      setDetails(list);
    };

    fetchData();
  }, [item]);

  useEffect(() => {
    // Timer
    const interval = setInterval(() => {
      setCurrentScreenshotIndex(prevIndex =>
        details?.screenshots?.length > 0
          ? (prevIndex + 1) % details.screenshots.length
          : 0,
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [details]);

  if (!details) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgb(17,17,26)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'aqua', fontWeight: '700', fontSize: 20}}>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DetailHeader title={details.title} />
      <Image
        style={styles.imageBox}
        source={{uri: details.screenshots[currentScreenshotIndex].image}}
      />
      <ScrollView style={{height: 50, marginTop: 7}} horizontal={true}>
        <InfoBox text={details.genre} backgroundColor={'rgb(96,196,101)'} />
        <InfoBox text={details.platform} backgroundColor={'orange'} />
        <InfoBox text={details.publisher} backgroundColor={'aqua'} />
        <InfoBox text={details.status} backgroundColor={'red'} />
      </ScrollView>
      <ScrollView style={{marginTop: 15, marginBottom: 50}}>
        <Text style={styles.text}>{details.description}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(17,17,26)',
  },
  imageBox: {
    width: '100%',
    height: '26.1%',
    resizeMode: 'contain',
    borderBottomWidth: 2,
    borderColor: 'aqua',
  },
  infoBox: {
    flexDirection: 'row',
  },
  text: {
    color: 'white',
  },
});
