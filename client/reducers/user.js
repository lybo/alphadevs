import * as types from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const initialState = {
    id: 0,
    username: ``,
    url: ``,
    skills: [],
    isFetching: false
};

function auth(state = initialState, action = { type: ``, payload: {} }) {
    switch (action.type) {
    case types.LOGIN:
        return {
            id: action.payload.id,
            username: action.payload.username,
            skills: action.payload.skills || [],
            url: action.payload.url || ``
        };
    case types.LOGOUT:
        return { ...initialState };
    case types.REGISTER:
        return {
            id: action.payload.id,
            username: action.payload.username,
            skills: action.payload.skills || [],
            url: action.payload.url || ``
        };
    case types.RESET_PASSWORD:
        return state;
    default:
        return state;
    }
}

function skills(state = initialState, action) {
    switch (action.type) {
    case types.REQUEST_SKILLS:
        return Object.assign({}, state, {
            isFetching: true,
        });
    case types.RECEIVE_SKILLS:
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            items: action.posts,
            lastUpdated: action.receivedAt
        });
    default:
        return state;
    }
}


const rootReducer = combineReducers({
    auth,
    skills
});

export default rootReducer;
