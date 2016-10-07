import React from 'react';
import PageProfile from '../components/PageProfile';
import { connect } from 'react-redux'
import { updateAuthUser, fetchLogout } from '../actions/authUser'
import { addTagAsync } from '../actions/tags'

export default connect(
    (state) => {
        return {
            router: state.router,
            authUser: state.authUser,
            tags: state.tags,
        };
    },
    (dispatch) => {
        return {
            onClickLogout: () => { 
                dispatch(fetchLogout());
            },
            onUserChange: (userData, success, fail) => { 
                dispatch(updateAuthUser(userData, success, fail));
            },
            addTag: (tagData, success, fail) => { 
                dispatch(addTagAsync(tagData, success, fail));
            },
        }
    }
)(PageProfile); 
