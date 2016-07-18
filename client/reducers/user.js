import * as types from '../constants/ActionTypes'

const initialState = {
    id: 0,
    email: '',
    url: '',
    skills: []
};

export default function(state = initialState, action = { type: '', payload: {} }) {
    switch (action.type) {
        case types.LOGIN:
            return {
                id: action.payload.id,
                email: action.payload.email,
                skills: action.payload.skills || [],
                url: action.payload.url || ''
            };
        case types.LOGOUT:
            return { ...initialState };
        case types.REGISTER:
            return {
                id: action.payload.id,
                email: action.payload.email,
                skills: action.payload.skills || [],
                url: action.payload.url || ''
            };
        case types.RESET_PASSWORD:
            return state;
        default: 
            return state;
    }   
};

