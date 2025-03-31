
import api from "../../utils/api";
import ActionTypes from "../actionTypes";


// kullanıcı id'si
const account_id = import.meta.env.VITE_ACCOUNT_ID;


// asenkron thunk aksiyonu
export const getWatchList = () => async (dispatch) => {
    dispatch({ type: ActionTypes.LIST_LOADING  })

  await api
   .get(`/account/${account_id}/watchlist/movies`)
   .then((res) => dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results }))
   .catch((err) => dispatch({
    type: ActionTypes.LIST_ERROR, payload: err.message
   }))
};

// film listede varsa kaldıran yoksa ekleyen asenkron fonksiyon 

export const toggleMovieList = (movie, isAdd) => async(dispatch) => {
 const body = {
  media_type:"movie",
  media_id: movie.id,
  watchlist: isAdd,
 };

 api.post(`account/${account_id}/watchlist`, body)
 .then(() => {
  // eklenme/cıkartma durumuna göre reducer a ahber ver 
  isAdd ? dispatch({type: ActionTypes.ADD_TO_LIST, payload: movie})
  : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie})
 })
 .catch((err) => console.log(err))
}