import React from "react";
import PageLayout from "../PageLayout";
import "!style!css!less!./style.less";

class PageProjectDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { authUser, onClickLogout } = this.props;

        return (
            <PageLayout onClickLogout={onClickLogout} authUser={authUser} >
                <h3>{this.props.projectId}</h3>
            </PageLayout>
        );
    }
}

export default PageProjectDetails;

