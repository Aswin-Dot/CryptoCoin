import { SET_TRADE_VISIBILITY } from "./type";

const initialState = {
  isTradeModalVisible: false,
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRADE_VISIBILITY:
      return { ...state, isTradeModalVisible: action.payload };
    default:
      return state;
  }
};

export default tabReducer;
