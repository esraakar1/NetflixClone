import { SplideSlide, Splide } from '@splidejs/react-splide';
import React from 'react'
import { baseImgUrl } from '../../utils/constants';

const Actors = ({cast}) => {

  const isRender = cast && cast.length > 0;

  const getPicture = (actor) => {
    return actor.profile_path ? baseImgUrl + actor.profile_path : actor.gender === 1 ? "/woman.jpg"
    : actor.gender === 0 ? "/man.jpg" : "/default.webp";
  }

  return isRender ? (
    <div className='mb-10'>
<h2 className='font-semibold text-lg md:text-xl my-5'>Oyuncular</h2>

     <Splide options={{ autoWidth: true, gap: "20px", pagination: false }} >
      {cast.map((actor) => (
        <SplideSlide key={actor.id}>
          <div className='w-[160px] flex flex-col h-full'>
          <img className='h-full object-cover rounded' src={getPicture(actor)} alt="" />
          <h2 className='text-center font-semibold mt-2 line-clamp-1'>{actor.name} </h2>
          </div>
        </SplideSlide>
      ))}
     </Splide>
    </div>
  ) :
  (
    <div className='mb-10 text-center text-zinc-500'>oyuncu bilgisi alınamadı</div>
  )
}

export default Actors