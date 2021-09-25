const initialState = {
    remember: true,
    username : ''
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'remember' :
            return {
                ...state,
                    remember: !state.remember
            }
        case 'username' :
            return {
                ...state,
                username: action.payload
            }
        default:
            return state
    }
}
export default reducer;