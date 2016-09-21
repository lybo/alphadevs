import React, { Component, PropTypes } from 'react'
import PageLayout from '../PageLayout'
import Link from '../Link'
import { redirect } from 'redux-router-director'
import '!style!css!less!./style.less'

class PageDashboard extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { authUser, onClickLogout, fetchSkills, updateSkills  } = this.props;

        return (
            <PageLayout onClickLogout={onClickLogout} authUser={authUser} >
                <div className="container list-wrapper">
                    <div className="row">
                        <div className="col-md-10" onClick={fetchSkills}>
                            hello!
                        </div>
                        <div className="col-md-10" onClick={updateSkills}>
                            ADDSKILLS!
                        </div>
                    </div>
                </div>

            </PageLayout>
        );
    }
}

export default PageDashboard;
