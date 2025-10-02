import axios from "axios";
import { MovieDetailsType } from "./types";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const API_URL = process.env.EXPO_PUBLIC_API_URL;
const BEARER = process.env.EXPO_PUBLIC_BEARER;

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
  "Science Fiction": 878,
  "TV Movie": 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: BEARER
  },
};

export const getPopular = async () => {
  try {
    const response = await axios.get(
      `${API_URL}movie/popular?language=en-US&page=1`,
      options,
    );
    console.log("Popular got", response.data.results);
    return response.data.results;
  } catch (err) {
    console.error("popular", err);
  }
};

export const getByGenre = async (genre: string) => {
  // console.log(genre, genreId[genre]);
  try {
    const response = await axios.get(
      `${API_URL}discover/movie?with_genres=${genreId[genre]}&sort_by=popularity.desc`,
      options,
    );
    console.log("genre got");
    return response.data.results;
  } catch (err) {
    console.error("genre", err);
  }
};

export const searchMovies = async (search: string) => {
  console.log("fetch", search);
  if (!search) {
    const response = await axios.get(
      `${API_URL}movie/popular?api_key=${API_KEY}`,
    );
    return [...response.data.results];
  } else {
    console.log("in else");
    const response = await axios.get(
      `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}`,
    );
    return [...response.data.results];
  }
};

export const getMovieDetails = async (id: number) => {
  try {
    const response = await axios.get(
      `${API_URL}movie/${id}?language=en-US`,
      options,
    );
    return response.data;
  } catch (err) {
    console.error("details", err);
  }
};

export const fetchCredits = async (id: number) => {
  const response = await axios.get(`${API_URL}movie/${id}/credits?`, options);
  const director = response.data.crew.find(
    (dir) => dir.known_for_department === "Directing",
  );
  const producer = response.data.crew.find(
    (dir) => dir.known_for_department === "Production",
  );
  const credits = response.data.cast.slice(0, 7);
  return { director: director, actors: credits, producer: producer };
};
