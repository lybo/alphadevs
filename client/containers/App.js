import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Router } from 'redux-router-director'
// import { auth } from '../middlewares/index'
import PageLogin from './PageLogin'
import PagePassive from './PagePassive'
import PageDashboard from './PageDashboard'
// import '!style!css!less!./main.less'

const Pages = ({
    router
}) => {
    return (
        <div>
            <Router pattern="" >
                <PageLogin />
            </Router>
            <Router pattern="/login" >
                <PageLogin />
            </Router>
            <Router pattern="/dashboard" >
                <PageDashboard />
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
