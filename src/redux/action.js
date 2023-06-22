import * as types from "./actionType";
import axios from "axios"; 

// get cart-
export const getFun = (searchTerm="", pagination=2, limit=20) => (dispatch) => {
    console.log(searchTerm, 6)
    dispatch({type: types.GET_REQUEST})
    return axios.get(`https://heliverse-backend.vercel.app/data?q=${searchTerm}&_page=${pagination}&_limit=${limit}`)
            .then((res)=>{
                console.log(res.data)
                dispatch({type: types.GET_SUCCESS, payload: res.data})
            })
            .catch((err)=>{
                dispatch({type: types.GET_ERROR, payload: err.response.data})
            })
}
