import { DECK, CARD } from '../actions/types';

const DEFAULT_DECK = {  
    deck_id: null,
    remaining: 0,
    message: '',
    fetchStatus: ''
};

const deckReducer = (state = DEFAULT_DECK, action) => {
    const {type, payload} = action;
    switch(type) { 
        case DECK.FETCH_RESULT:
            return { ...state, deck_id: payload.deck_id, remaining: payload.remaining, fetchStatus: payload.fetchState }
        case DECK.FETCH_ERROR:
            return { ...state, message: payload.message, fetchStatus: payload.fetchState }
        case CARD.FETCH_RESULT:
            debugger
            return { ...state, remaining: payload.remaining}
        default:
            return state
    }
} 

export default deckReducer;