const React = require('react');
const ReactDOM = require('react-dom');
const less = require('./style.less');
const {Provider} = require('react-redux');
const {App} = require('./handlers/');
const {store} = require('./store');
// _____________________________________________


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);

// _____________________________________________

// add clear completed button
// fix db on heroku
// add user auth
// toggle complete

// FACEBOOK_CLIENT_ID AND FACEBOOK_CLIENT_SECRET env variables locally and on heroku
// logout (see Tom's message)
