export default (state = { messages: ['Simple Message'] }, action) => {
    const payload = {action};
    switch(action.type) {
        case 'SUBSCRIBE_MESSAGES': 
            const messages = state.messages.slice();
            messages.push(payload.message);
            return {
                ...state,
                messages
            }
        default:
            return state;
    }
};
