export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

const BASE_API = 'https://www.freetogame.com/api/';
const API_URL = BASE_API + 'games';
const DETAIL_URL = BASE_API + 'game?id=';
//https://www.freetogame.com/api/games?sort-by=alphabetical

export const fetchGames = async (): Promise<Game[]> => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data as Game[];
  } catch (error) {
    console.error('Error fetching game data:', error);
    return [];
  }
};

export const fetchRelorPop = async (key): Promise<Game[]> => {
  try {
    const response = await fetch(API_URL + '?sort-by=' + key);
    const data = await response.json();
    return data as Game[];
  } catch (error) {
    console.error('Error fetching game data:', error);
    return [];
  }
};

export const fetchDetails = async (id): Promise<Game[]> => {
  try {
    const response = await fetch(DETAIL_URL + id);
    const data = await response.json();
    return data as Game[];
  } catch (error) {
    console.error('Error fetching game data:', error);
    return [];
  }
};
