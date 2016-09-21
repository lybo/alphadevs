import { ADD_PAGE, EDIT_PAGE } from '../constants/ActionTypes';
import * as types from '../constants/ActionTypes'
const initialState = {
    id: 0,
    title: '',
    description: '',
    image: '',
    features: [],
    publicationStartDate: null,
    publicationEndDate: null,
    zone: ''
};
export default function(state = initialState, action = { type: '', payload: {} }) {
    switch (action.type) {
        case types.ADD_PAGE:
            return Object.assign({}, state, action.payload);
        case types.EDIT_PAGE:
            return Object.assign({}, state, action.payload);
        default: 
            return state;
    }   
};
