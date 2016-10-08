import PageProjectDetails from "../components/PageProjectDetails";
import { fetchLogout } from "../actions/authUser";
import { connect } from "react-redux";

export default connect(
    (state) => {
        return {
            router: state.router,
            authUser: state.authUser,
            //TODO: we need to get the id of the project that will be edited or if a new one will be created
            projectId: 1
            //projectId: "new"
        };
    },
    (dispatch) => {
        return {
            onClickLogout: () => {
                dispatch(fetchLogout());
            },
            onProjectUpdate: (project) => {
                console.log("updating project");
                console.log(project);
            },
            getProject: (projectId) => {
                if (projectId === "new"){
                    return {};
                } else {
                    return {
                        name: "test project",
                        description: "most awesome project ever",
                        url: "www.crazyproject.com"
                    };
                }
            }
        };
    }
)(PageProjectDetails);
