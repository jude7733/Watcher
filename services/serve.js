import axios from 'axios';

import {URL, API_KEY} from '../config/const';

export const getPopular = async () => {
  console.log('Getting popular movies');
  const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}`);
  return [...response.data.results];
};
export const getByGenre = async genre => {
  console.log('Getting', genre);
  const response = await axios.get(
    `${URL}discover/movie?with_genres=${genre}&api_key=${API_KEY}`,
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
  console.log(response.data.crew);

  const director = response.data.crew.find(
    dir => dir.known_for_department === 'Directing',
  );
  const credits = response.data;
  return {director: director, credits: credits};
};
