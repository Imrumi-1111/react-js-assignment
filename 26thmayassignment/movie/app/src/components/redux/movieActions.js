
import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from './movieSlice';
import { fetchMovies } from './api';

export const fetchMoviesAsync = () => async (dispatch) => {
  try {
    dispatch(fetchMoviesStart());
    const movies = await fetchMovies();
    dispatch(fetchMoviesSuccess(movies));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
    console.log(fetchMovies)
  }
};