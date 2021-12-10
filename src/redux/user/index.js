export const SIGNED_IN_CHANGE = 'SIGNED_IN'

export const signIn = (user) => (dispatch, getState) => {
    console.log("signIn called", user)
    dispatch({
        type: SIGNED_IN_CHANGE,
        payload: user
    })
}

export const signOut = () => (dispatch, getState) => {
    console.log("signOut called")
    dispatch({
        type: SIGNED_IN_CHANGE,
        payload: {}
    })
}

const initialState = {
    user: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SIGNED_IN_CHANGE:
            console.log("SIGN IN CHANGE...", action)
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}