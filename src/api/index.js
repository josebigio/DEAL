import axios from 'axios'
import { SIGNIN_PATH, SIGNOUT_PATH, CREATE_ACCOUNT_PATH } from '../constants'

const axiosInstance = process.env.NODE_ENV == 'development' ? axios.create({
    withCredentials: true,
    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
}) : axios.create()

console.log("axiosInstance: ", axiosInstance)

export const signIn = (token, provider) => {
    console.log("API SIGNIN", token, provider)
    return axiosInstance.post(SIGNIN_PATH, {
        "payload": token,
        "provider": provider
    })
        .then(res => {
            console.log("api success on signin", res)
            return res.data
        })
        .catch(error => {
            console.error("api error on signout", error)
        })
}

export const createAccount = (payload, provider) => {
    console.log("API SIGNIN", payload, provider)
    return axiosInstance.post(CREATE_ACCOUNT_PATH, {
        "payload": payload,
        "provider": provider
    })
        .then(res => {
            console.log("api success on creating account", res)
            return res.data
        })
        .catch(error => {
            console.error("api error on creating account", error)
        })
}

export const signOut = () => {
    return axiosInstance.get(SIGNOUT_PATH)
        .then(res => {
            return res.data
        })
}