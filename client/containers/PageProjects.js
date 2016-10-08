import PageProjects from "../components/PageProjects";
import { connect } from "react-redux";

export default connect(
    (state) => {
        return {
            router: state.router,
            authUser: state.authUser,
            projects: [
                {name: "test1", id: 1},
                {name: "test2", id: 2}
            ]
        };
    },
    () => {
        return {
        };
    }
)(PageProjects);
