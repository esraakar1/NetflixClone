import React from 'react'
import { FaBookmark } from 'react-icons/fa'
import { GoBookmarkSlashFill } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux'
import { toggleMovieList } from '../../redux/actions/listActions';


const selectList = (state) => state.list;

const Button = ({ movie }) => {
  const dispatch = useDispatch();

const list = useSelector(selectList);

//  ekrana basılan film izleme listesinde var mı 
const isAdded = list.find((item) => item.id === movie.id);

const handleClick = () => {
  dispatch(toggleMovieList(movie, !isAdded));
};

  return (
    <button onClick={handleClick} className=' bg-blue-600  hover:bg-blue-700 hero-btn'> { isAdded ?
    (  <> <GoBookmarkSlashFill />
      Listeden Kaldır
      </>) :
     ( <>
      <FaBookmark /> Listeye Ekle </>)
    } 
  </button> 
  )
}

export default Button