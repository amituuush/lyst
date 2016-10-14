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
// move trash can to name of lyst, change wording of clear list
// toggle complete

// if no date is entered on second item submit, due date gets set to nothing
// add clear completed button, component doesn't render, but it works on refresh
// make it mobile friendly
// edit item name

// add "experience points"
// send email an hour before task is due, 1 day before task is due, etc
// create multiple lists
// share list on facebook

// toggle complete

// FACEBOOK_CLIENT_ID AND FACEBOOK_CLIENT_SECRET env variables locally and on heroku
