export const INCREMENT_COUNT = 'INCREMENT_COUNT'

export const incrementCounter = () => (dispatch, getState) => {
    console.log("incrementCounter called")
    dispatch({
        type: INCREMENT_COUNT
    })
}

const initialState = {
    count: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_COUNT:
            console.log("incrementing counter...")
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state;
    }
}