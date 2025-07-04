import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import { apiKey, apiBaseUrl } from "./endpoints";

// Define the MoviesResponse type based on expected API response structure
export interface MoviesResponse {
  page: number;
  results: Array<any>; // Replace 'any' with a proper Movie type if available
  total_pages: number;
  total_results: number;
}

// Optionally, define types for movie data if available
// interface Movie { ... }
// interface MovieDetails { ... }

export const movieApi: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  params: {
    api_key: apiKey,
  },
});

export function getMovieDetails(
  movieId: number | string
): Promise<AxiosResponse<unknown>> {
  console.log("Movie ID from params:", movieId);

  return movieApi.get(`/movie/${movieId}`);
}

export function getPopularMovies(page: number = 1): Promise<AxiosResponse<MoviesResponse>> {
  return movieApi.get("/movie/popular", {
    params: {
      
      page,
    },
  });
}


export function getTopRatedMovies(): Promise<AxiosResponse<unknown>> {
  return movieApi.get(`/movie/top_rated`);
}

export function searchMovies(query: string): Promise<AxiosResponse<unknown>> {
  return movieApi.get(`/search/movie`, { params: { query } });
}

export function getUpcomingMovies(): Promise<AxiosResponse<unknown>> {
  return movieApi.get(`/movie/upcoming`);
}

export function getMovieByGenre(
  genreId: number | string
): Promise<AxiosResponse<unknown>> {
  return movieApi.get(`/discover/movie`, { params: { with_genres: genreId } });
}
