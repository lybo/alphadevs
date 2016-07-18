import React, { Component, PropTypes } from 'react'
import Link from './Link'
// import Spinner from './Spinner'
import { redirect } from 'redux-router-director'

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.email.focus();
    }

    render() {
        const { request, onSubmit } = this.props;
        this.email = '';
        let password = '';
        const _onSubmit = (evt) => {
            evt.preventDefault();

            onSubmit(
                this.email.value, 
                password.value,
                () => {
                    redirect(window.urlAttempt || '/dashboard');
                });
            this.email.value = '';
            password.value = '';
        }
      
        return !request.status ? (
            <div className="page-wrapper">
                <div className="center-wrapper">
                    <div className="start-header"></div>
                    <div className="form-divider">
                        <span>Login</span>
                    </div>
                    <form className="start-form login-form" onSubmit={_onSubmit}>
                        <div className="form-group">
                            <label htmlFor="input-email">{'Email address'}</label>
                            <input ref="email" type="email" className="form-control input-email" id="input-email" ref={(ref) => this.email = ref}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-password">{'Password'}</label>
                            <input ref="password" type="password" className="form-control input-password" id="input-password" ref={(ref) => password = ref}/>
                        </div>

                        {request.error !== '' ? (
                            <div className="bg-danger">
                                { request.error }
                            </div>
                        ) : ( '' )}

                        <div className="start-bottom">
                            <div className="start-info">
                                <div className="start-bottom-items">
                                    <i className="fa fa-user-plus"></i>
                                    <Link url="/register" className="start-info-items">
                                        {'Create new account'}
                                    </Link>
                                </div>
                                <div className="start-bottom-items">
                                    <i className="fa fa-unlock-alt"></i>
                                    <Link url="/reset-password" className="start-info-items">
                                        {'Forgot password?'}
                                    </Link>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        ) : (
            <div className="page-wrapper">
                <Spinner />
            </div>
        );
    }
}

export default Login;

