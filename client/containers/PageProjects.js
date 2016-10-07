import PageProjects from "../components/PageProjects";
import { connect } from "react-redux";

export default connect(
    (state) => {
        return {
            router: state.router,
            authUser: state.authUser,
            projects: [
                {name: "test1"},
                {name: "test2"}
            ]
        };
    },
    () => {
        return {
        };
    }
)(PageProjects);
