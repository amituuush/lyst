const redux = require('redux');
const {createStore} = redux;
const {appReducer} = require('./reducers');
const React = require('react');
const ReactDOM = require('react-dom');
const less = require('./style.less');
const {Provider} = require('react-redux');
const {App} = require('./handlers');
// _____________________________________________


const store = createStore(appReducer);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('content')
);

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

// store = {
//   dispatch: function(action) {
//     this.state = appReducer(this.state, action)
//   }
// }

 // takes return value from increment(), which is the action (object), and passes it to the dispatch method (redux method on store).

// the action that goes into dispatch function gets passed as the second argument to the reducer. See example below:

// store.dispatch = (action) => {
//   return appReducer(store.state, action)
// }


module.exports = {store};


// is dispatch kind of like setState?
