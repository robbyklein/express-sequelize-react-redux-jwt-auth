import axios from './axios'
import { push } from 'connected-react-router'

import { setErrors } from './errors'
import decodeToken from '../helpers/decode-token'
import {
    LOGIN,
    LOGOUT,
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD,
    SET_SIGNUP_EMAIL,
    SET_SIGNUP_PASSWORD,
    SET_SIGNUP_NAME,
    SET_FORGOT_EMAIL,
    SET_RESET_PASSWORD,
} from './types'

export const loginUser = (email, password) => {
    return async function(dispatch) {
        try {
            const res = await axios.post('/login', { email, password })
            const { auth_token } = res.data

            localStorage.setItem('auth_token', auth_token)
            axios.defaults.headers['auth_token'] = auth_token

            dispatch({ type: LOGIN, payload: decodeToken(auth_token) })
            dispatch(push('/dashboard'))
        } catch (e) {
            dispatch(setErrors(['Invalid credentials.']))
        }
    }
}

export const signupUser = (name, email, password) => {
    return async function(dispatch) {
        try {
            const res = await axios.post('/signup', { email, password, name })
            const { auth_token } = res.data

            localStorage.setItem('auth_token', auth_token)
            axios.defaults.headers['auth_token'] = auth_token

            dispatch({ type: LOGIN, payload: decodeToken(auth_token) })
            dispatch(push('/confirm'))
        } catch (e) {
            dispatch(setErrors(e.response.data.errors))
        }
    }
}

export const logoutUser = () => {
    return async function(dispatch) {
        localStorage.removeItem('auth_token')
        axios.defaults.headers['auth_token'] = null

        dispatch({ type: LOGOUT })
        dispatch(push('/login'))
    }
}

export const activateUser = confirmToken => {
    return async function(dispatch) {
        const res = await axios.get(`/activate/${confirmToken}`)
        const { auth_token } = res.data

        if (auth_token) {
            localStorage.setItem('auth_token', auth_token)
            axios.defaults.headers['auth_token'] = auth_token

            dispatch({ type: LOGIN, payload: decodeToken(auth_token) })
            dispatch(push('/dashboard'))
        } else {
            dispatch(push('/invalid-confirm'))
        }
    }
}

export const forgotPassword = email => {
    return async function(dispatch) {
        try {
            await axios.post('/forgot', { email })
            dispatch(push('/forgot-success'))
        } catch (e) {
            dispatch(setErrors(e.response.data.errors))
        }
    }
}

export const resetPassword = (password, passwordToken) => {
    return async function(dispatch) {
        try {
            const res = await axios.post(`/reset`, { password, passwordToken })
            const { auth_token } = res.data

            localStorage.setItem('auth_token', auth_token)
            axios.defaults.headers['auth_token'] = auth_token

            dispatch({ type: LOGIN, payload: decodeToken(auth_token) })
            dispatch(push('/dashboard'))
        } catch (e) {
            dispatch(setErrors(e.response.data.errors))
        }
    }
}

export const setLoginEmail = payload => {
    return { type: SET_LOGIN_EMAIL, payload }
}

export const setLoginPassword = payload => {
    return { type: SET_LOGIN_PASSWORD, payload }
}

export const setSignupName = payload => {
    return { type: SET_SIGNUP_NAME, payload }
}

export const setSignupEmail = payload => {
    return { type: SET_SIGNUP_EMAIL, payload }
}

export const setSignupPassword = payload => {
    return { type: SET_SIGNUP_PASSWORD, payload }
}

export const setForgotEmail = payload => {
    return { type: SET_FORGOT_EMAIL, payload }
}

export const setResetPassword = payload => {
    return { type: SET_RESET_PASSWORD, payload }
}
