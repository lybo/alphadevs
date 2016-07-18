import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Router } from 'redux-router-director'
// import { auth } from '../middlewares/index'
import PageLogin from './PageLogin'
import PagePassive from './PagePassive'
// import '!style!css!less!./main.less'

const Pages = ({
    router
}) => {
    return (
        <div>
            <Router pattern="" >
                <PageLogin />
            </Router>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            router: state.router    
        };
    },
    (dispatch) => {
        return {};
    }
)(Pages);
