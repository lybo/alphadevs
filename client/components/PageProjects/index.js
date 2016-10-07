import React from "react";
import PageLayout from "../PageLayout";
import "!style!css!less!./style.less";

class PageProjects extends React.Component {
    constructor(props) {
        super(props);
        const { projects } = this.props;
        this.state = {
            projects: projects,
        };
    }

    projectTemplates() {
        return this.state.projects.map( (project) => {
            return <li>{project.name}</li>;
        });
    }

    render() {
        const { authUser, onClickLogout } = this.props;

        return (
            <PageLayout onClickLogout={onClickLogout} authUser={authUser} >
                <div className="container list-wrapper">
                    <div className="row">
                        <div className="col-md-10">
                            <ul>
                                {this.projectTemplates()}
                            </ul>
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}

export default PageProjects;

