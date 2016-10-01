import { USER_ADD_SKILL } from '../constants/ActionTypes';
import * as types from '../constants/ActionTypes'

const initialState = {
    id: 0,
    name: ''
};

export default function(state = initialState, action = { type: '', payload: {} }) {
    switch (action.type) {
        case types.USER_ADD_SKILL:
            return Object.assign({}, state, action.payload);

        default: 
            return state;
    }   
};


