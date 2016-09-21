/**
 * Actions for user.
 * @module actions/user
 */

import * as types from '../constants/ActionTypes';
import * as api from '../services/index';
import * as requests from './requests';

/**
 * Action logout for user.
 * @function
 * @return {Object} a property "type""
 */
export function logout() {
    return {
        type: types.LOGOUT
    };
}

//-----------REMEMBER_ME
export function doRememberMe(data) {
    console.log(data);
    return {
        type: types.REMEMBER_ME,
        payload: data
    };
}

export function rememberMe(success, fail) {

    return dispatch => {
        api.getAuthUser()
            .then((data) => {
                if (data.error) {
                    fail && fail();
                } else {
                    dispatch(doRememberMe(data));
                    success && success();
                }
            })
            .catch((error) => {
                console.error(error);
                fail && fail();
            });
    };
}

//-----------LOGIN
export function receiveLogin(data) {
    return {
        type: types.LOGIN,
        payload: data
    };
}

export function fetchLogin(email, password, success, fail) {
    const requestName = `user`;
    return dispatch => {
        dispatch(requests.newRequest(true, requestName));
        api.login(email, password)
            .then((data) => {
                dispatch(requests.newRequest(false, requestName));
                if (data.error) {
                    dispatch(requests.setErrorMessage(data.error, requestName));
                    fail && fail();
                } else {
                    dispatch(requests.setErrorMessage(``, requestName));
                    dispatch(receiveLogin(data));

                    success && success();
                }
            })
            .catch((error) => {
                console.error(error);
                fail && fail();
            });
    };
}

//-----------LOGOUT
export function receiveLogout(data) {
    return {
        type: types.LOGOUT,
        payload: data
    };
}

export function fetchLogout(success, fail) {
    const requestName = `user`;
    return dispatch => {
        dispatch(requests.newRequest(true, requestName));
        api.logout()
            .then((data) => {
                dispatch(requests.newRequest(false, requestName));
                if (data.error) {
                    dispatch(requests.setErrorMessage(data.error, requestName));
                    fail && fail();
                } else {
                    dispatch(requests.setErrorMessage(``, requestName));
                    dispatch(receiveLogout(data));

                    success && success();
                }
            })
            .catch((error) => {
                console.error(error);
                fail && fail();
            });
    };
}

//-----------Get Skills
export function requestSkills(userId) {
    return {
        type: types.REQUEST_SKILLS,
        payload: userId
    };
}

export function receiveSkills(userId, json) {
    return {
        type: types.RECEIVE_SKILLS,
        payload: userId,
        skills: json.skills
    };
}

export function fetchSkills(userId) {

    return dispatch => {
        dispatch(requestSkills(userId));
        api.getSkills(userId)
          .then(json =>
            dispatch(receiveSkills(userId, json))
        );
    };
}


//-----------Add Skills
export function requestAddSkills() {
    return {
        type: types.REQUEST_UPDATE_SKILLS,
    };
}

export function confirmAddSkills(skills) {
    return {
        type: types.CONFIRM_UPDATE_SKILLS,
        payload: skills
    };
}
export function updateSkills(userId, skills) {
    return dispatch => {
        dispatch(requestAddSkills());
        api.updateSkills(userId, skills)
            .catch((err) => {
                console.log(err);
            })
            .then(() =>{
                dispatch(confirmAddSkills(skills));
                console.log(`Skills added successfully`);
            }
        );
    };
}
