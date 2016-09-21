import React, { Component, PropTypes } from 'react';
import Link from './Link';
import { redirect } from 'redux-router-director';

class LoginGitHub extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onSubmit } = this.props;
      
        return (
            <div className="page-wrapper">
                <a href={'http://localhost:5000/auth/github?redirectURL=http://localhost:3000/#/dashboard'} className="btn btn-primary btn-lg">
                    <span className="fa fa-github"></span>
                    {' Login with GibHub'}
                </a>
            </div>
        );
    }
}

export default LoginGitHub;
