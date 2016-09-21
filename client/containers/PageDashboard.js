import PageDashboard from '../components/PageDashboard';
import { connect } from 'react-redux';
import { fetchLogout} from '../actions/user';

export default connect(
    (state) => {
        return {
            router: state.router,
            authUser: state.authUser,
        };
    },
    (dispatch) => {
        return {
            onClickLogout: () => {
                dispatch(fetchLogout());
            }
        };
    }
)(PageDashboard);
