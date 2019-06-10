import {combineReducers} from 'redux';
import settingsReducer from './settings';
import deckReducer from './deck';
import cardReducer from './card';
import gameReducer from './game';

export default combineReducers({
    settings: settingsReducer,
    deck: deckReducer,
    card: cardReducer,
    game: gameReducer
});