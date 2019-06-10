import { DECK, CARD } from '../actions/types';
import { FETCH_STATES } from '../constant/index';

// const DECK_OF_CARDS = 'http://deck-of-cards-api-wrapper.appspot.com';
const DECK_OF_CARDS = 'https://deckofcardsapi.com/api';

export const fetchDeckResult = ({deck_id, remaining}) => {
    return { 
        type: DECK.FETCH_RESULT,
        payload: { deck_id, remaining, fetchState: FETCH_STATES.SUCCESS }
    };
};

export const fetchDeckError = ({ message }) => {
    return { 
        type: DECK.FETCH_ERROR,
        payload: { message, fetchState: FETCH_STATES.FAILURE }
    };
};

export const fetchNewDeck = () => dispatch => {
    return fetch(`${DECK_OF_CARDS}/deck/new/shuffle`)
        .then(resp => {
            if (resp.status !== 200) {
                throw new Error('Unsuccesful request to deckofcardsapi.com');
            }
            return resp.json()
        })
        .then(json => dispatch(fetchDeckResult(json)))
        .catch(error => dispatch(fetchDeckError(error)))
};
