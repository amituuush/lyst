const redux = require('redux');
const {createStore, compose} = redux;
// var createStore = redux.createStore;
// import { createStore } from 'redux';
const {appReducer} = require('./reducers');
// _____________________________________________

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(appReducer);

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

// _____________________________________________

module.exports = {store};

// _____________________________________________


// Redux is an attempt to consolidate the “inputs” to that function in one place (the store), so that you can guarantee what the app’s view should look like (the output) at any time, given the state (the input) and the react components (the function)
