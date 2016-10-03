import * as types from '../constants/ActionTypes'
import * as api from '../services/index'
import * as requests from './requests'

export function addTag(data) {
    return {
        type: types.ADD_TAG,
        payload: data
    }   
}

export function removeTag(data) {
    return {
        type: types.REMOVE_TAG,
        payload: data
    }   
}

export function subscribeTag() {
    return dispatch => {
        api.tags.on(
            (tag) => {
                dispatch(addTag(tag));
            },
            () => {
                dispatch(removeTag(tag));
            },
        )
    };
}

export function populateTags(data) {
    return {
        type: types.POPULATE_TAGS,
        payload: data
    }   
}

export function getTags(success, fail) {
    const requestName = 'tags';
    return dispatch => {
        dispatch(requests.newRequest(true, requestName));
        api.getTags()
            .then((data) => {
                dispatch(requests.newRequest(false, requestName));
                if (data.error) {
                    dispatch(requests.setErrorMessage(data.error, requestName));
                    fail && fail();
                } else {
                    dispatch(requests.setErrorMessage('', requestName));
                    dispatch(populateTags(data)); 

                    success && success();
                } 
            })
            .catch((error) => {
                console.error(error);
                fail && fail();
            });
    }
}

export function addTagAsync(tag, success, fail) {
    const requestName = 'tags';
    return dispatch => {
        dispatch(requests.newRequest(true, requestName));
        api.addTag(tag)
            .then((data) => {
                dispatch(requests.newRequest(false, requestName));
                if (data.error) {
                    dispatch(requests.setErrorMessage(data.error, requestName));
                    fail && fail();
                } else {
                    dispatch(requests.setErrorMessage('', requestName));

                    success && success();
                } 
            })
            .catch((error) => {
                console.error(error);
                fail && fail();
            });
    }
}
