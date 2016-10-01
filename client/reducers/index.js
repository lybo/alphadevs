import { combineReducers } from 'redux'
import router from 'redux-router-director'
import authUser from './authUser'

export default combineReducers({
    router: router.reducer,
    authUser
});
