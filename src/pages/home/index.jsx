import React, { useEffect, useState } from 'react'
import Hero from './hero'
import api from '../../utils/api';
import Error from '../../components/error';
import Loader from '../../components/loader';
import MovieList from './movie-list';

const Home = () => {

  const [genres, setGenres] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
     api
     .get('/genre/movie/list?language=tr')
     .then((res) => setGenres(res.data.genres))
     .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <Hero />
      <div>
        {error ? ( <Error />) : !genres ? ( <Loader /> ) : <div>
         {genres.map((genre) => (<MovieList key={genre.id} genre={genre} />
        ))}
          </div> 
          }
      </div>
      
    </div>
  )
}

export default Home