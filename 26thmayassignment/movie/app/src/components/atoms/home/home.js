
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAsync } from '../../redux/movieActions';
import { addFavorite } from '../../redux/movieSlice';


const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, error, movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, [dispatch]);

  const handleAddFavorite = (movie) => {
    dispatch(addFavorite(movie));
  };

  return (
    <div>
      
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h1>Home Page</h1>
          {movies.map((movie) => (
            <div key={movie.imdbID}>
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
              <button onClick={() => handleAddFavorite(movie)}>Add to Favorites</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
