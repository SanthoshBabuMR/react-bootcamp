import { CARD } from '../actions/types';
import { FETCH_STATES } from '../constant/index';

// const DECK_OF_CARDS = 'http://deck-of-cards-api-wrapper.appspot.com';
const DECK_OF_CARDS = 'https://deckofcardsapi.com/api';

export const fetchCardResult = ({cards, remaining, deck_id}) => {
    const {code, image, value } = cards[0];
    const type = window.parseInt(value, 10) % 2 === 0 ? 'even' : 'odd'
    return { 
        type: CARD.FETCH_RESULT,
        payload: { code, type, image, fetchStatus: FETCH_STATES.SUCCESS, value, remaining, deck_id }
    };
};

export const fetchCardError = ({ message }) => {
    return { 
        type: CARD.FETCH_ERROR,
        payload: { message, fetchStatus: FETCH_STATES.FAILURE }
    };
};

export const fetchNewCard = (deck_id) => dispatch => {
    return fetch(`${DECK_OF_CARDS}/deck/${deck_id}/draw/`)
        .then(resp => {
            if (resp.status !== 200) {
                throw new Error('Unsuccesful request to deckofcardsapi.com');
            }
            return resp.json()
        })
        .then(json => dispatch(fetchCardResult(json)))
        .catch(error => dispatch(fetchCardError(error)))
};