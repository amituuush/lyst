const redux = require('redux')
import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
// var createStore = redux.createStore;
import { appReducer } from './reducers'
import createLogger from 'redux-logger'
import promise from 'redux-promise-middleware'


const logger = createLogger();

// const middleware = applyMiddleware(promise(), thunkMiddleware, logger);

const middleware = applyMiddleware(promise(), thunkMiddleware);


const store = createStore(
  appReducer,
  compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
);

let unsubscribe = store.subscribe(function() {
    // console.log('store has been updated. Latest store state:', store.getState())
})


module.exports = {store};
