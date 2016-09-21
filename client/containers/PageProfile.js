import PageProfile from '../components/PageProfile';
import { connect } from 'react-redux';
import { fetchLogout, fetchSkills, updateSkills } from '../actions/user';

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
            },
            updateSkills: () => {
                dispatch(updateSkills(`1ad55115c447d871`, [`javascript`, `html`]));
            }
        };
    }
)(PageProfile);
