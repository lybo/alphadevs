import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router } from 'redux-router-director';
import { auth } from '../middlewares/index';
import PageLogin from './PageLogin';
import PageDashboard from './PageDashboard';
import PageProfile from './PageProfile';
// import '!style!css!less!./main.less'

const Pages = ({
    router
}) => {
    return (
        <div>
            <Router pattern="/login" middlewares={[auth]}>
                <PageLogin />
            </Router>
            <Router pattern="" middlewares={[auth]}>
                <PageLogin />
            </Router>
            <Router pattern="/dashboard" middlewares={[auth]}>
                <PageDashboard />
            </Router>
            <Router pattern="/profile" middlewares={[auth]}>
                <PageProfile />
            </Router>
        </div>
    );
};

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
