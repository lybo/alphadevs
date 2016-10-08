import React from "react";
import PageLayout from "../PageLayout";
import ListItem from "../ListItem";
import { redirect } from "redux-router-director";
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
        const goToDetailPage = (id) => {
            redirect(`projects/${id}`);
        };
        const projectTemplates = this.state.projects.map( (project, index) => {
            return <ListItem key={index} name={project.name} onClickEvent={() => goToDetailPage(project.id)} onDelete={() => this.props.onDelete(project.id)}/>;
        });

        return (
            <PageLayout onClickLogout={onClickLogout} authUser={authUser} >
                <div className="container list-wrapper">
                    <div className="row">
                        <div className="col-md-10">
                            <ul>
                                {projectTemplates}
                            </ul>
                            <button onClick={() => redirect("projects/new")}> Create new Project </button>
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}

export default PageProjects;

