export const BASE_API_URL = process.env.NODE_ENV == 'development' ? 
"http://localhost:8081/api" : "https://api.deal-application.com/api"
export const API_UPLOAD_PATH = `${BASE_API_URL}/uploadReel`
export const API_GET_ALL_REELS_PATH = `${BASE_API_URL}/getAllReels`
export const ALL_MEETUPS = `${BASE_API_URL}/allMeetups`
export const ADD_MEETUP = `${BASE_API_URL}/addNewMeetup`
export const SIGNIN_PATH = `${BASE_API_URL}/login`
export const SIGNOUT_PATH = `${BASE_API_URL}/logout`
export const CREATE_ACCOUNT_PATH = `${BASE_API_URL}/createAccount`