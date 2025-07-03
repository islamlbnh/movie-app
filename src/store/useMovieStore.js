import { create } from "zustand";
const movieStore = create((set) => ({
  favourites: [],
  watchlist: [],
  addToFavourites: (movie) =>
    set((state) => ({
      favourites: [...state.favourites, movie],
    })),
  addToWatchlist: (movie) =>
    set((state) => ({
      watchlist: [...state.watchlist, movie],
    })),
}));

export default movieStore;
