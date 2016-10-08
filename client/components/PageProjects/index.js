import React from "react";
import PageLayout from "../PageLayout";
import ListItem from "../ListItem";
import "!style!css!less!./style.less";

class PageProjects extends React.Component {
    constructor(props) {
        super(props);
        const { projects } = this.props;
        this.state = {
            projects: projects,
        };
    }

    render() {
        const { authUser, onClickLogout } = this.props;
        const projectTemplates = this.state.projects.map( (project) => {
            return <ListItem name={project.name} />;
        });

        return (
            <PageLayout onClickLogout={onClickLogout} authUser={authUser} >
                <div className="container list-wrapper">
                    <div className="row">
                        <div className="col-md-10">
                            <ul>
                                {projectTemplates}
                            </ul>
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}

export default PageProjects;

