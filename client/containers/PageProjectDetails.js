import PageProjectDetails from "../components/PageProjectDetails";
import { connect } from "react-redux";

export default connect(
    (state) => {
        return {
            router: state.router,
            authUser: state.authUser,
            projectId: 1
        };
    },
    () => {
        return {
        };
    }
)(PageProjectDetails);
