import {FETCH_SPORTS_BEGIN,
  FETCH_SPORTS_SUCCESS,
  FETCH_SPORTS_FAILURE
} from '../actions';

const initialState = {
  sports: [],
  loading: false,
  error: null
};

export default function sportsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SPORTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_SPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        sports: action.payload
      };

    case FETCH_SPORTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        sports: []
      };

    default:      
      return state;
  }
}