import React from 'react'
import List from './list'
import millify from 'millify'

const Content = ({movie}) => {
  return (
    <div className='my-10 grid md:grid-cols-2 gap-5 md:gap-10'>
      <div>
        <List title="Kategoriler" arr={movie.genres} />

        <List title="Konuşulan Diller" arr={movie.spoken_languages} />

        <List title="Yapımcı Şirketler" arr={movie.production_companies} />

        <List title="Yapımcı Ülkeler" arr={movie.production_countries} />

      </div>


      <div>
        <p>{movie.overview} </p>
        <p>
          <span>Bütçe: </span>
          <span className='text-green-500 font-semibold'>{movie.budget === 0 ? "Bilinmiyor" : "$" + millify(movie.budget)} </span>
        </p>
        <p>
          <span>Hasılat: </span>
          <span className='text-green-500 font-semibold'>{movie.revenue === 0 ? "Bilinmiyor" : "$" + millify(movie.revenue)} 

          </span>
        </p>
      </div>
    </div>
  )
}

export default Content