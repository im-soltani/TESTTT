import { GET_CURRENT_PROFILE,GET_PROFILES,SET_LOADING,GET_PROFILE_ID,
  PROFILE_REVIEW_SAVE_SUCCESS,
  PROFILE_REVIEW_SAVE_REQUEST,
  PROFILE_REVIEW_SAVE_FAIL,
  PROFILE_REVIEW_SAVE_RESET,
} from '../const/actionType';
  const initialState = {
   profile:{},
    profiles: [],
    isLoading: false
  }
  export default function (state = initialState , { type, payload }) {
    switch (type) {
      case SET_LOADING:
        return { ...state, isLoading: true };
        case GET_CURRENT_PROFILE:
      return {
        ...state,profile:payload};
        case GET_PROFILES:
          return {...state,profiles: payload,loading: false}
          case GET_PROFILE_ID:
            return {...state,isloading: false, profile: payload };
            case PROFILE_REVIEW_SAVE_REQUEST:
      return { isloading: true };
    case PROFILE_REVIEW_SAVE_SUCCESS:
      return { isloading: false, review: payload, success: true };
    case PROFILE_REVIEW_SAVE_FAIL:
      return { isloading: false, errror: payload };
    case PROFILE_REVIEW_SAVE_RESET:
      return {};
              default:
                return state;
            }
          }

  