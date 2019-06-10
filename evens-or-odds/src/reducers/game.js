import { SET_PLAYER_CHOICE, CARD, SET_GAME_STARTED } from '../actions/types';

const DEFAULT_GAME = {  
    player_choice: '',
    correct_guess: 0
};

const gameReducer = (state = DEFAULT_GAME, action) => {
    const {type, payload} = action;
    switch(type) { 
        case SET_PLAYER_CHOICE:
            return { ...state, player_choice: payload.player_choice }
        case SET_GAME_STARTED:
            return DEFAULT_GAME;
        case CARD.FETCH_RESULT:
            let correct_guess = state.correct_guess
            if (state.player_choice === payload.type) {
                correct_guess += 1;
            }
            return { ...state, correct_guess  }
        default:
            return state
    }
} 

export default gameReducer;