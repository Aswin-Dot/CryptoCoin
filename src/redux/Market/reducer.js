import {
  GET_HOLDINGS_BEGIN,
  GET_HOLDINGS_SUCCESS,
  GET_HOLDINGS_FAILURE,
  GET_COIN_MARKET_BEGIN,
  GET_COIN_MARKET_SUCCESS,
  GET_COIN_MARKET_FAILURE,
} from "./type";

const initialState = {
  myHoldings: [],
  coins: [],
  loading: false,
  error: null 
};

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOLDINGS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_HOLDINGS_SUCCESS:
      return {
        ...state,
        myHoldings: action.payload,
        loading: false,
      };
    case GET_HOLDINGS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_COIN_MARKET_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_COIN_MARKET_SUCCESS:
      return {
        ...state,
        coins: action.payload,
        loading: false,
      };
    case GET_COIN_MARKET_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default marketReducer;
