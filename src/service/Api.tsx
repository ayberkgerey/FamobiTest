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

const API_URL = 'https://www.freetogame.com/api/games';

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
