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

//-----------LOGIN
export function receiveLogin(data) {
    return {
        type: types.LOGIN,
        payload: data
    };
}

export function fetchLogin(email, password, success, fail) {
    const requestName = `login`;
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
        skills: json.data.skills
    };
}

export function fetchSkills(userId) {

    return dispatch => {
        dispatch(requestSkills(userId));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

        api.getSkills(userId)
          .then(json =>
            dispatch(receiveSkills(userId, json))
        );
    };
}

// //-----------ADD_PAGE
// export function receiveAddSkill(skill) {
//     return {
//         type: types.ADD_PAGE,
//         payload: skill
//     };
// }
// export function addSkill(skill, success, fail) {
//     const requestName = `addSkill`;
//     return dispatch => {
//         dispatch(requests.newRequest(true, requestName));
//         api.addPage(skill)
//             .then((data) => {
//                 dispatch(requests.newRequest(false, requestName));
//                 if (data.error) {
//                     dispatch(requests.setErrorMessage(data.error, requestName));
//                     fail && fail();
//                 } else {
//                     dispatch(requests.setErrorMessage(``, requestName));
//                     dispatch(receiveAddSkill(data));
//                     success && success();
//                 }
//             })
//             .catch((error) => {
//                 dispatch(requests.newRequest(false, requestName));
//                 dispatch(requests.setErrorMessage(error.message, requestName));
//                 fail && fail();
//             });
//     };
// }
// //-----------POPULATE_PAGES
// export function receivePopulatePages(data) {
//     return {
//         type: types.POPULATE_PAGES,
//         payload: data
//     };
// }
// export function fetchPopulatePages(success, fail) {
//     const requestName = `login`;
//     return dispatch => {
//         dispatch(requests.newRequest(true, requestName));
//         api.getPages()
//             .then((data) => {
//                 dispatch(requests.newRequest(false, requestName));
//                 if (data.error) {
//                     dispatch(requests.setErrorMessage(data.error, requestName));
//                     fail && fail();
//                 } else {
//                     dispatch(requests.setErrorMessage(``, requestName));
//                     dispatch(receivePopulatePages(data));
//                     success && success();
//                 }
//             })
//             .catch((error) => {
//                 dispatch(requests.newRequest(false, requestName));
//                 dispatch(requests.setErrorMessage(error.message, requestName));
//                 fail && fail();
//             });
//     };
// }
// //-----------EDIT_PAGE
// export function receiveUpdatePage(data) {
//     return {
//         type: types.EDIT_PAGE,
//         payload: data
//     };
// }
// export function fetchUpdatePage(page, success, fail) {
//     const requestName = `page`;
//     return dispatch => {
//         dispatch(requests.newRequest(true, requestName));
//         api.updatePage(page)
//             .then((data) => {
//                 dispatch(requests.newRequest(false, requestName));
//                 if (data.error) {
//                     dispatch(requests.setErrorMessage(data.error, requestName));
//                     fail && fail();
//                 } else {
//                     dispatch(requests.setErrorMessage(``, requestName));
//                     dispatch(receiveUpdatePage(data));
//                     success && success();
//                 }
//             })
//             .catch((error) => {
//                 dispatch(requests.newRequest(false, requestName));
//                 dispatch(requests.setErrorMessage(error.errors, requestName));
//                 fail && fail();
//             });
//     };
// }
// //-----------DELETE_PAGE
// export function receiveDeletePage(data) {
//     return {
//         type: types.DELETE_PAGE,
//         payload: data
//     };
// }
// export function fetchDeletePage(pageId, success, fail) {
//     const requestName = `page`;
//     return dispatch => {
//         dispatch(requests.newRequest(true, requestName));
//         api.deletePage(pageId)
//             .then((data) => {
//                 dispatch(requests.newRequest(false, requestName));
//                 if (data.error) {
//                     dispatch(requests.setErrorMessage(data.error, requestName));
//                     fail && fail();
//                 } else {
//                     dispatch(requests.setErrorMessage(``, requestName));
//                     dispatch(receiveDeletePage(pageId));
//                     success && success();
//                 }
//             })
//             .catch((error) => {
//                 dispatch(requests.newRequest(false, requestName));
//                 dispatch(requests.setErrorMessage(error.errors, requestName));
//                 fail && fail();
//             });
//     };
// }
