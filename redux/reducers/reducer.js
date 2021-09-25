const initialState = {
    remember: true
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'remember' :
            return {
                ...state,
                    remember: !state.remember
            }
        default:
            return state
    }
}
export default reducer;