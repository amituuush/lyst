const redux = require('redux')
import {createStore, compose} from 'redux'
// var createStore = redux.createStore;
// import { createStore } from 'redux';
import {appReducer} from './reducers'
// _____________________________________________

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(appReducer);

let unsubscribe = store.subscribe(function() {
    console.log('store has been updated. Latest store state:', store.getState())
})

// _____________________________________________

module.exports = {store};

// _____________________________________________


// Redux is an attempt to consolidate the “inputs” to that function in one place (the store), so that you can guarantee what the app’s view should look like (the output) at any time, given the state (the input) and the react components (the function)
