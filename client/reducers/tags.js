import * as types from '../constants/ActionTypes'
import tag from './tag';

const initialState = [];

export default function(state = initialState, action = { type: '', payload: {} }) {
    switch (action.type) {
        case types.POPULATE_TAGS:
            return action.payload;

        case types.ADD_TAG:
            return [
                ...state,
                tag(undefined, action),
            ];

        case types.REMOVE_TAG:
            return state.filter(x =>
                x.id !== action.payload
            );

        default: 
            return state;
    }   
};

