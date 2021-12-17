import * as api from '../../api';

export const SIGNED_IN_CHANGE = 'SIGNED_IN'

export const signIn = (user, token) => (dispatch, getState) => {
    console.log("signIn called", user)
    api.signIn(token, "GOOGLE")
        .then(res => {
            dispatch({
                type: SIGNED_IN_CHANGE,
                payload: {
                    userInfo: res.userInfo,
                    isSignedIn: true
                },
            })
        })
        .catch(error => {
            console.error("error signining in", error)
            dispatch({
                type: SIGNED_IN_CHANGE,
                payload: {
                    userInfo: null,
                    isSignedIn: false
                },
            })
        })
}

export const signOut = () => (dispatch, getState) => {
    console.log("signOut called")
    api.signOut()
        .then(res => {
            dispatch({
                type: SIGNED_IN_CHANGE,
                payload: {
                    userInfo: null,
                    isSignedIn: false
                },
            })
        })
        .catch(error => {
            console.error("error signingout in", error)
            dispatch({
                type: SIGNED_IN_CHANGE,
                payload: {
                    userInfo: null,
                    isSignedIn: false
                },
            })
        })
}

export const createAccount = (payload, provider) => (dispatch, getState) => {
    console.log("createAccount called")
    api.createAccount()
        .then(res => {
            api.signIn(payload, provider)
            .then(res => {
                dispatch({
                    type: SIGNED_IN_CHANGE,
                    payload: {
                        userInfo: null,
                        isSignedIn: false
                    },
                })
            })   
        })
        .catch(error => {
            console.error("error creating account in", error)
            dispatch({
                type: SIGNED_IN_CHANGE,
                payload: {
                    userInfo: null,
                    isSignedIn: false
                },
            })
        })
}

export default (state = {
    isSignedIn: false,
    userInfo: null
}, action) => {
    switch (action.type) {
        case SIGNED_IN_CHANGE:
            console.log("SIGN IN CHANGE...", action)
            return action.payload
        default:
            return state;
    }
}