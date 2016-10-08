import React from "react";
import PageLayout from "../PageLayout";
import "!style!css!less!./style.less";

class PageProjectDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: this.props.getProject()
        };
    }


    render() {
        const { authUser, onClickLogout } = this.props;

        return (
            <PageLayout onClickLogout={onClickLogout} authUser={authUser} >
                <h3 className="projectName">{this.state.project.name}</h3>
                <p className="projectDesc">{this.state.project.description}</p>
                <a className="projectUrl" href={this.state.project.url}>{this.state.project.url}</a>
            </PageLayout>
        );
    }
}

export default PageProjectDetails;

