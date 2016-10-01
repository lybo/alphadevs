import React from 'react';
import PageProfile from '../components/PageProfile';
import { connect } from 'react-redux'
import { fetchLogout } from '../actions/authUser'

export default connect(
    (state) => {
        return {
            router: state.router,
            authUser: state.authUser,
        };
    },
    (dispatch) => {
        return {
            onClickLogout: () => { 
                dispatch(fetchLogout());
            }
        }
    }
)(PageProfile); 
