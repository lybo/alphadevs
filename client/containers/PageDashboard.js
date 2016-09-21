import PageDashboard from '../components/PageDashboard';
import { connect } from 'react-redux';
import { fetchLogout, fetchSkills } from '../actions/user';

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
            },
            fetchSkills: () => {
                dispatch(fetchSkills(`1ad55115c447d871`));
            }
        };
    }
)(PageDashboard);
