import * as types from '../constants/ActionTypes'

const initialState = {
    id: 0,
    username: '',
    url: '',
    skills: []
};

export default function(state = initialState, action = { type: '', payload: {} }) {
    switch (action.type) {
        case types.LOGIN:
            return {
                id: action.payload.id,
                username: action.payload.username,
                skills: action.payload.skills || [],
                url: action.payload.url || ''
            };
        case types.LOGOUT:
            return { ...initialState };
        case types.REGISTER:
            return {
                id: action.payload.id,
                username: action.payload.username,
                skills: action.payload.skills || [],
                url: action.payload.url || ''
            };
        case types.RESET_PASSWORD:
            return state;
        default:
            return state;
    }
};
