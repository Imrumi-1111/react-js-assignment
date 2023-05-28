import { useDispatch, useSelector } from 'react-redux';
import { removeFavourite } from '../../redux/movieSlice';

const Favourites = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.movies);

  const handleRemoveFavorite = (movieId) => {
    dispatch(removeFavourite(movieId));
  };

  return (
    <div>
      <h1>Favourites Page</h1>
      {favourites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        favourites.map((movie) => (
          <div key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <button onClick={() => handleRemoveFavorite(movie.imdbID)}>Remove from Favorites</button>
          </div>
        ))
      )}
    </div>
  );
}
export default Favourites;
