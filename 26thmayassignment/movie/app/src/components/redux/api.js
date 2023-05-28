const apikey = ' b60d74a9'; 

export const fetchMovies = async () => {
  try{
    const url = `http://www.omdbapi.com/?apikey=${apikey}&s=movie`;
    const response = await fetch(url);
    if(! response.ok){
      throw new Error('Failed to fetch movies')
    }
    const data = await response.json()
    return data.Search

  } catch(error){
    throw new Error(error.message)
    
  }
};
