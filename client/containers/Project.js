import Project from "../components/Project";
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
)(Project);
