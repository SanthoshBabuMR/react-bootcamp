export const setMessage = ({ message }) => {
    return {
        type: 'SUBSCRIBE_MESSAGES',
        payload: {
            message
        }
    }
}