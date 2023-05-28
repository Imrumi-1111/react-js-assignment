
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    loading: false,
    error: null,
    movies: [],
    favourites: [],
  },
  reducers: {
    fetchMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addFavorite: (state, action) => {
      const movie = action.payload;
      if (!state.favourites.some((fav) => fav.imdbID === movie.imdbID)) {
        state.favourites.push(movie);
      }
    },
    removeFavorite: (state, action) => {
      const movieId = action.payload;
      state.favourites = state.favourites.filter((fav) => fav.imdbID !== movieId);
    },
  },
});

export const {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  addFavorite,
  removeFavourite,
} = moviesSlice.actions;

export default moviesSlice.reducer;