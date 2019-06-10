import { CARD, SET_GAME_STARTED } from '../actions/types';

const DEFAULT_CARD = { 
    code: '',
    image: '',
    type: '',
    fetchStatus: ''
};

const cardReducer = (state = DEFAULT_CARD, action) => {
    const {type, payload} = action;
    switch(type) {
        case SET_GAME_STARTED:
            return DEFAULT_CARD; 
        case CARD.FETCH_RESULT:
            return { ...state, code: payload.code, image: payload.image, type: payload.type, fetchStatus: payload.fetchStatus }
        case CARD.FETCH_ERROR:
            return { ...state, fetchStatus: payload.fetchStatus }
        default:
            return state;
    }
} 

export default cardReducer;