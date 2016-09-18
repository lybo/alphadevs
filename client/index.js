import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import router from 'redux-router-director'
import DevTools from './containers/DevTools'
import { rememberMe } from './actions/user';

const store = configureStore()
router.setStore(store)


const init = function init () {
    render(
        <Provider store={store}>
            <div>
                <App />
                {__DEV_TOOLS__ ? <DevTools /> : ''}
            </div>
        </Provider>,
        document.getElementById('root'),
        function() {
            console.log('init');
            store.dispatch(rememberMe(router.init, router.init));
        }
    )
}

init();
