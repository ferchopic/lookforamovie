import axios, { AxiosResponse } from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = async (page: number = 1): Promise<any> => {
  const response: AxiosResponse<any> = await api.get('/movie/popular', { params: { page } });
  return response.data;
};

export const searchMovies = async (query: string, page: number = 1): Promise<any> => {
  const response: AxiosResponse<any> = await api.get('/search/movie', { params: { query, page } });
  return response.data;
};

export const getMovieDetails = async (movieId: number): Promise<any> => {
  const response: AxiosResponse<any> = await api.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieTrailers = async (movieId: number): Promise<any> => {
  const response: AxiosResponse<any> = await api.get(`/movie/${movieId}/videos`);
  return response.data;
};

export const getMovieVideos = async (movieId: number): Promise<any[]> => {
  const response: AxiosResponse<any> = await api.get(`/movie/${movieId}/videos`);
  return response.data.results;
};
