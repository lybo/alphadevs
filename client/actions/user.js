/**
 * Actions for user.
 * @module actions/user
 */

import * as types from '../constants/ActionTypes'
import * as api from '../services/index'
import * as requests from './requests'

/**
 * Action logout for user. 
 * @function
 * @return {Object} a property "type""
 */
export function logout() {
    return {
        type: types.LOGOUT
    }   
}

//-----------LOGIN
export function receiveLogin(data) {
    return {
        type: types.LOGIN,
        payload: data
    }   
}

export function fetchLogin(email, password, success, fail) {
    const requestName = 'login';
    return dispatch => {
        dispatch(requests.newRequest(true, requestName));
        api.login(email, password)
            .then((data) => {
                dispatch(requests.newRequest(false, requestName));
                if (data.error) {
                    dispatch(requests.setErrorMessage(data.error, requestName));
                    fail && fail();
                } else {
                    dispatch(requests.setErrorMessage('', requestName));
                    dispatch(receiveLogin(data)); 

                    success && success();
                } 
            })
            .catch((error) => {
                console.error(error);
                fail && fail();
            });
    }
}
