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


// ability to sort by priority or due date
// ability to star an item, see all starred items



// add clear completed button, component doesn't render, but it works on refresh
// add user auth


// add "experience points"
// send email an hour before task is due, 1 day before task is due, etc
// create multiple lists
// share list on facebook
