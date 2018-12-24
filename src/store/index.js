import { createStore } from 'redux';

const initialState = {
  matches: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MATCHES_SUCCESS': {
      return {
        ...state,
        matches: action.payload.matches,
        error: undefined
      };
    }

    case 'FETCH_MATCHES_ERROR': {
      return {
        ...state,
        error: action.payload.error
      };
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
