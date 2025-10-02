import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const API_URL = process.env.EXPO_PUBLIC_API_URL;
const BEARER = process.env.EXPO_PUBLIC_BEARER;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: BEARER
  },
};

export interface SearchFilters {
  year?: number;
  genre?: string;
  rating?: number;
  sort_by?: 'popularity.desc' | 'popularity.asc' | 'vote_average.desc' | 'vote_average.asc' | 'release_date.desc' | 'release_date.asc';
  include_adult?: boolean;
}

export interface SearchResult {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  adult: boolean;
  popularity: number;
}

export interface SearchResponse {
  page: number;
  results: SearchResult[];
  total_pages: number;
  total_results: number;
}

export const searchMovies = async (
  query: string,
  page: number = 1,
  filters?: SearchFilters
): Promise<SearchResponse> => {
  try {
    if (!query.trim()) {
      const response = await axios.get(
        `${API_URL}movie/popular?language=en-US&page=${page}`,
        options
      );
      return response.data;
    }

    let searchUrl = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}`;

    if (filters?.year) {
      searchUrl += `&year=${filters.year}`;
    }

    if (filters?.include_adult !== undefined) {
      searchUrl += `&include_adult=${filters.include_adult}`;
    }

    const response = await axios.get(searchUrl);
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getPopularMovies = async (page: number = 1): Promise<SearchResponse> => {
  try {
    const response = await axios.get(
      `${API_URL}movie/popular?language=en-US&page=${page}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export const getTrendingMovies = async (timeWindow: 'day' | 'week' = 'day'): Promise<SearchResponse> => {
  try {
    const response = await axios.get(
      `${API_URL}trending/movie/${timeWindow}?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const discoverMovies = async (
  page: number = 1,
  filters?: SearchFilters
): Promise<SearchResponse> => {
  try {
    let discoverUrl = `${API_URL}discover/movie?language=en-US&page=${page}&sort_by=popularity.desc`;

    if (filters?.year) {
      discoverUrl += `&primary_release_year=${filters.year}`;
    }
    if (filters?.genre) {
      discoverUrl += `&with_genres=${filters.genre}`;
    }
    if (filters?.rating) {
      discoverUrl += `&vote_average.gte=${filters.rating}`;
    }
    if (filters?.sort_by) {
      discoverUrl += `&sort_by=${filters.sort_by}`;
    }
    if (filters?.include_adult !== undefined) {
      discoverUrl += `&include_adult=${filters.include_adult}`;
    }

    const response = await axios.get(discoverUrl, options);
    return response.data;
  } catch (error) {
    console.error('Error discovering movies:', error);
    throw error;
  }
};

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

export const getGenres = async () => {
  try {
    const response = await axios.get(
      `${API_URL}genre/movie/list?language=en-US`,
      options
    );
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    // Fallback to your existing genre mapping
    return Object.entries(genreId).map(([name, id]) => ({ id, name }));
  }
};

export const getSearchSuggestions = async (query: string): Promise<string[]> => {
  try {
    const response = await searchMovies(query, 1);
    return response.results
      .slice(0, 5)
      .map(movie => movie.title)
      .filter(title => title.toLowerCase().includes(query.toLowerCase()));
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return [];
  }
};
