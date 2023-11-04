import axios from 'axios';
import {URL, API_KEY} from '../config/const';

export const genreId = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  'Science Fiction': 878,
  'TV Movie': 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};
export const getPopular = async () => {
  const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}`);
  return [...response.data.results];
};
export const getByGenre = async genre => {
  // console.log(genre, genreId[genre]);
  const response = await axios.get(
    `${URL}discover/movie?with_genres=${genreId[genre]}&api_key=${API_KEY}`,
  );
  return [...response.data.results];
};
export const getMovies = async search => {
  console.log('fetch', search);
  if (!search) {
    const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}`);
    return [...response.data.results];
  } else {
    console.log('in else');
    const response = await axios.get(
      `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}`,
    );
    return [...response.data.results];
  }
};

export const fetchCredits = async id => {
  const response = await axios.get(
    `${URL}movie/${id}/credits?api_key=${API_KEY}`,
  );
  const director = response.data.crew.find(
    dir => dir.known_for_department === 'Directing',
  );
  const producer = response.data.crew.find(
    dir => dir.known_for_department === 'Production',
  );
  const credits = response.data.cast.slice(0, 7);
  return {director: director, actors: credits, producer: producer};
};
