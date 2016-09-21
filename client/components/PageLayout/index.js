import React, { Component, PropTypes } from 'react'
import Link from '../Link'
import Header from '../Header'
import { redirect } from 'redux-router-director'
import '!style!css!less!./style.less'

class PageLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { authUser, onClickLogout, children } = this.props;

        return (
            <div>
                <Header onClickLogout={onClickLogout} authUser={authUser} />
                <div className="container-fluid main-container">
                    <div className="col-md-10 content">

                        {children}

                    </div>
                    <footer className="pull-left footer">
                        <div className="col-md-12">
                            <hr className="divider" /> {'Copyright © 2015 '}
                            <Link url={ 'http://www.alphadevs.org'}>Alphadevs</Link>
                        </div>
                    </footer>
                </div>
            </div>        
         );
    }
}

export default PageLayout;

