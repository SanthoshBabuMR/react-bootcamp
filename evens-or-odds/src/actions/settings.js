import { SET_GAME_STARTED, EXPAND_INSTRUCTIONS } from '../actions/types';

export const startGame = () => {
    return {
        type: SET_GAME_STARTED,
        payload: {
            gameStarted: true
        }
    }
}

export const endGame = () => {
    return {
        type: SET_GAME_STARTED,
        payload: {
            gameStarted: false
        }
    }
}

export const expandInstructions = () => {
    return {
        type: EXPAND_INSTRUCTIONS,
        payload: {
            instructionsExpanded: true
        }
    }
}

export const collapseInstructions = () => {
    return {
        type: EXPAND_INSTRUCTIONS,
        payload: {
            instructionsExpanded: false
        }
    }
}