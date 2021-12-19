import axios from 'axios'

export const LOCATION_NOT_AVAILABLE = 'LOCATION_NOT_AVAILABLE'
export const LOADING_LOCATION = 'LOADING_LOCATION'
export const LOCATION_FETCHED = 'LOCATION_FETCHED'

const api_key = "AIzaSyBpqO3gRd2GxcGL16My2WeqNM9IGF8laEM"

export const getUserLocation = () => (dispatch, getState) => {
    console.log("getUserLocation called")
    dispatch({
        type: LOADING_LOCATION,
    })
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("user position", position)
            const {latitude, longitude} = position.coords
            console.log("lat,long", latitude, longitude)
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&latlng=${latitude},${longitude}&key=AIzaSyBpqO3gRd2GxcGL16My2WeqNM9IGF8laEM`)
            .then(res => {
                console.log("sucess with reversing coordinates", res)
            })
            .catch(err=>{
                console.error("unable to reverse geocode", err)
            })

            dispatch({
                type: LOCATION_FETCHED,
                payload: position
            })
        })
    }
    else {
        console.log("user location not available")
        dispatch({
            type: LOCATION_NOT_AVAILABLE
        })
    }
}


const initialState = {
    isLoading: false,
    position: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOCATION_NOT_AVAILABLE:
            console.log("location not available", action)
            return {
                ...state,
                isLoading: false,
                position: null
            }
        case LOADING_LOCATION:
            console.log("LOADING_LOCATION...", action)
            return {
                ...state,
                isLoading: true,
                position: null
            }
        case LOCATION_FETCHED:
            console.log("LOCATION_FETCHED...", action)
            return {
                ...state,
                isLoading: false,
                position: action.payload
            }
        default:
            return state;
    }
}