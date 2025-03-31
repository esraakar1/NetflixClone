import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../utils/api';
import Error from '../../components/error';
import Loader from '../../components/loader';
import Buttons from './buttons';
import Banner from './banner';
import Content from './content';
import Actors from './actors';
import Trailers from './trailers';

const Detail = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const {id} = useParams();

  useEffect(() => {
     const params = {
      append_to_response: "credits,videos",
     };

    api
    .get(`/movie/${id}`, {params})
    .then((res) => setMovie(res.data))
    .catch((err) => setError(err.message));
  }, []);

  if(error) return <Error info={error} />
  if(!movie) return <Loader/> 

  return (
    <div>
      <Buttons movie={movie} />

      <Banner  movie={movie}/>

      <Content  movie={movie}/>

      <Actors  cast={movie.credits.cast}/>

      <Trailers  videos={movie.videos.results}/>
    </div>
  )
}

export default Detail