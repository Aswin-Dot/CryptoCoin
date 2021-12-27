import {setTradeModalVisibility} from "./actions";

const initialState = {
    isTradeModalVisible: false,
};

const tabReducer = (state = initialState, action ) => {
    switch (action.type) {
        case setTradeModalVisibility: 
            return {...state, isTradeModalVisible: action.payload}
        default:
            return state;
    }
};

export default tabReducer;