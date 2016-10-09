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
// add user auth
// toggle complete
// add due date feature
// add priority feature
// ability to sort by priority or due date
// add PropTypes to components
// add "experience points"
// send email before due date
