
import axios from "axios";
import {

      GET_ARTISANS,
      SET_LOADING,
      GET_ERRORS    
      
  } from "../const/actionType";



 //get all artisan
 export const getartisan = () =>async(dispatch)=> {
    //dispatch(setProfileLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      
    const res = await axios.get("/api/auth/allartisan",options)
    dispatch({
      type: GET_ARTISANS,
      payload: res.data, 
    });
  }catch (error) {
    dispatch({
      type: GET_ERRORS,
    });
   };
   };
//ban an artisan

export const banartisan = id =>async(dispatch)=> {
    //dispatch(setProfileLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const banned=true
    const res = await axios.put(`/api/auth/ban/${id}`,banned,options)
    dispatch(getartisan());
  }catch (error) {
    dispatch({
      type: GET_ERRORS,
    });
   };
   };

  //unban an artisan 
  export const unbanartisan = id =>async(dispatch)=> {
    //dispatch(setProfileLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const banned=false
    const res = await axios.put(`/api/auth/unban/${id}`,banned,options)
    dispatch(getartisan());
  }catch (error) {
    dispatch({
      type: GET_ERRORS,
    });
   };
   };