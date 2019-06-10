import { SET_GAME_STARTED, EXPAND_INSTRUCTIONS, SET_PLAYER_CHOICE, CARD } from '../actions/types';

const DEFAULT_SETTINGS = {  
    gameStarted: false,
    instructionsExpanded: false
};

const settingsReducer = (state = DEFAULT_SETTINGS, action) => {
    const {type, payload} = action;
    switch(type) { 
        case SET_GAME_STARTED:  
                return { ...state, gameStarted: payload.gameStarted }
        case EXPAND_INSTRUCTIONS:
            return { ...state, instructionsExpanded: payload.instructionsExpanded }
        default:
            return state
    }
} 

export default settingsReducer;
