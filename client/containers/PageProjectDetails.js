import PageProjectDetails from "../components/PageProjectDetails";
import { fetchLogout } from "../actions/authUser";
import { connect } from "react-redux";

export default connect(
    (state) => {
        return {
            router: state.router,
            authUser: state.authUser,
            projectId: 1
        };
    },
    (dispatch) => {
        return {
            onClickLogout: () => {
                dispatch(fetchLogout());
            },
            onProjectUpdate: () => {
                console.log("updating project");
            },
            getProject: () => {
                return {
                    name: "test project",
                    description: "most awesome project ever",
                    url: "www.crazyproject.com"
                };
            }
        };
    }
)(PageProjectDetails);
