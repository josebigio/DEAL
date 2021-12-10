import axios from 'axios';
import { API_GET_ALL_REELS_PATH, API_UPLOAD_PATH } from '../../constants';

export const ALL_REELS_RESPONSE = 'ALL_REELS_RESPONSE'
export const LOADING_REELS = 'ALL_REELS_LOADING'
export const ALL_REELS_ERROR = 'ALL_REELS_ERROR'
export const UPLOADING_REEL_LOADING = 'UPLOADING_REEL_LOADING'
export const UPLOAD_REEL_ERROR = 'UPLOAD_REEL_ERROR'
export const UPLOAD_REEL_SUCCESS = 'UPLOAD_REEL_SUCCESS'


export const getAllReels = () => (dispatch, getState) => {
    console.log("getAllReels called")
    dispatch({
        type: LOADING_REELS
    })
    axios.get(API_GET_ALL_REELS_PATH)
        .then(response => response.data)
        .then(reels => {
            console.log("allReels: ", reels)
            dispatch({
                type: ALL_REELS_RESPONSE,
                payload: reels
            })
        })
        .catch(error => {
            console.error("erro getting reels", error)
            dispatch({
                type: ALL_REELS_ERROR
            })
        })

}

export const uploadReel = (file) => (dispatch, getState) => {
    console.log("uploadReel...", file, dispatch, getState)
    dispatch({
        type: UPLOADING_REEL_LOADING
    })
    const formData = new FormData();
    formData.append('file', file[0]);
    axios.post(API_UPLOAD_PATH, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
        .then(res => { // then print response status
            console.log(res)
            dispatch({
                type: UPLOAD_REEL_SUCCESS
            })
            dispatch(getAllReels())
            
        })
        .catch(error => {
            console.error(error)
            dispatch({
                type: UPLOAD_REEL_ERROR
            })
        })
}


const initialState = {
    isLoading: false,
    reels: null,
    error: false,
    isUploading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_REELS:
            console.log("LOADING_REELS...", action)
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case ALL_REELS_RESPONSE:
            console.log("ALL_REELS_RESPONSE...", action)
            return {
                ...state,
                isLoading: false,
                reels: action.payload,
                error: false
            }
        case ALL_REELS_ERROR:
            console.log("ALL_REELS_ERROR...", action)
            return {
                ...state,
                isLoading: false,
                error: true,
                reels: []
            }
        case UPLOADING_REEL_LOADING:
            return {
                ...state,
                isUploading: true
            }
        case UPLOAD_REEL_SUCCESS:
            console.log("UPLOAD_REEL_SUCCESS")
            return {
                ...state,
                isUploading: false
            }
        default:
            return state;
    }
}