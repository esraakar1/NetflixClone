import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowLeft as Arrow } from "react-icons/md";
import Button from '../../components/button';

const Buttons = ({movie}) => {
  return (
    <div className='flex mb-5 justify-between'>
        <Link to={".."} 
        className='bg-gray-600 hero-btn min-w-0 px-5 hover:bg-gray-700'>
        <Arrow className='text-xl'/>
        Geri</Link>

      <Button movie={movie} />
    </div>
  )
}

export default Buttons