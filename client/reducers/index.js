import { combineReducers } from 'redux'
import router from 'redux-router-director'
import user from './user'

export default combineReducers({
    router: router.reducer,
    user
});
