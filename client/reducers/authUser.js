import { LOGIN, LOGOUT } from '../constants/ActionTypes';
import * as types from '../constants/ActionTypes'

const initialState = {
    id: 0,
    name: '',
    avatar: '',
    role: ''
};

export default function(state = initialState, action = { type: '', payload: {} }) {
    switch (action.type) {
        case types.REMEMBER_ME:
            return {
                id: action.payload.id,
                name: action.payload.name,
                avatar: action.payload.avatar,
                role: action.payload.role
            };
        case types.LOGIN:
            return {
                id: action.payload.id,
                name: action.payload.name,
                avatar: action.payload.avatar,
                role: action.payload.role
            };
        case types.LOGOUT:
            return {
                id: 0,
                name: '',
                avatar: '',
                role: ''
            };
        case types.RESET_PASSWORD:
            return state;
        default: 
            return state;
    }   
};

