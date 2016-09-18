import React, { Component, PropTypes } from 'react'
import { redirect } from 'redux-router-director'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="page-wrapper">
                <div className="page-title">Dashboard</div>
            </div>
        )
    }
}

export default Dashboard;
