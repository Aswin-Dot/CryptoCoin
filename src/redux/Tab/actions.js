import { SET_TRADE_VISIBILITY } from "./type";

export const setTradeModalVisibility = (isVisible) => (dispatch) => {
    dispatch({ type: SET_TRADE_VISIBILITY, payload: isVisible });
};