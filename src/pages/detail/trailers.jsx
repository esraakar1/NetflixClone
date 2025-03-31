import { SplideSlide, Splide } from '@splidejs/react-splide';
import React from 'react'
import ReactPlayer from 'react-player';

const Trailers = ({videos}) => {
  const isRender = videos && videos.length > 0;

  return isRender &&  
    <div className='mb-10'>
      <h2 className='font-semibold text-lg md:text-xl my-5'>Fragmanlar</h2>

      <Splide options={{ pagination: false }} >
        {videos.map((video) => <SplideSlide key={video.id}>
          <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${video.key}`}
          width={"100%"}
          height="400px"
          controls/>
        </SplideSlide>)}
      </Splide>
    </div>;
  
}

export default Trailers;