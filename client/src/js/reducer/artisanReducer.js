import {

    GET_ARTISANS,
    BAN_ARTISANS,
    SET_LOADING,
} from "../const/actionType";


  const initialState = {

    artisans: [],
    isLoading: false
  }
  export default function (state = initialState , { type, payload }) {
    switch (type) {
      case SET_LOADING:
        return { ...state, isLoading: true };
        case GET_ARTISANS:
          return {...state,artisans: payload,isloading: false}
              default:
                return state;
            }
          }

  