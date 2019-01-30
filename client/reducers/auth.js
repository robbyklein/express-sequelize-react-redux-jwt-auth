import { LOCATION_CHANGE } from 'connected-react-router'

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
} from '../actions/types'

const defaultState = {
    loginEmail: '',
    loginPassword: '',
    signupName: '',
    signupEmail: '',
    signupPassword: '',
    forgotEmail: '',
    resetPassword: '',
}

export default function(state = defaultState, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            return {
                ...state,
                ...defaultState
            }
        case LOGIN:
            return {
                ...state,
                auth_token: action.payload.auth_token,
                role: action.payload.role,
                name: action.payload.name,
                email: action.payload.email,
                confirmed: action.payload.confirmed,
            }
        case LOGOUT:
            return defaultState
        case SET_LOGIN_EMAIL:
            return {
                ...state,
                loginEmail: action.payload,
            }
        case SET_LOGIN_PASSWORD:
            return {
                ...state,
                loginPassword: action.payload,
            }
        case SET_SIGNUP_NAME:
            return {
                ...state,
                signupName: action.payload,
            }
        case SET_SIGNUP_EMAIL:
            return {
                ...state,
                signupEmail: action.payload,
            }
        case SET_SIGNUP_PASSWORD:
            return {
                ...state,
                signupPassword: action.payload,
            }
        case SET_FORGOT_EMAIL:
            return {
                ...state,
                forgotEmail: action.payload,
            }
        case SET_RESET_PASSWORD:
            return {
                ...state,
                resetPassword: action.payload,
            }
        default:
            return state
    }
}
