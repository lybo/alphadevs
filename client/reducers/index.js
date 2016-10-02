import { combineReducers } from 'redux';
import router from 'redux-router-director';
import authUser from './auth_user';
import user from './user';

export default combineReducers({
    router: router.reducer,
    authUser,
    user
});
