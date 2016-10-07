import { combineReducers } from 'redux'
import router from 'redux-router-director'
import authUser from './authUser'
import tags from './tags'

export default combineReducers({
    router: router.reducer,
    authUser,
    tags
});
