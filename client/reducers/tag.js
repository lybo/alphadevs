import * as types from '../constants/ActionTypes'

const initialState = {
    id: 0,
    name: ''
};

export default function(state = initialState, action = { type: '', payload: {} }) {
    switch (action.type) {
        case types.ADD_TAG:
            return Object.assign({}, state, action.payload);

        default: 
            return state;
    }   
};


