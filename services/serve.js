import axios from 'axios';
import {API_KEY, URL} from '../config/const';

export const getMovies = async search => {
  console.log('search', search);
  if (!search) {
    const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}`);
    console.log('response', response);
    return [...response.data.resullts];
  } else {
    const response = await axios.get(
      `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}`,
    );
    console.log('response', response);
    return [...response.data.results];
  }
};

export const getCredits = async id => {
  const response = await axios.get(
    `${URL}movie/${id}/credits?api_key=${API_KEY}`,
  );
  console.log('response', response.data);
  const director = response.data.crew.find(
    dir => dir.known_for_department === 'Directing',
  );
  const credits = response.data;
  return {director: director, credits: credits};
};
