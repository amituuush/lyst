const {combineReducers} = require('redux');
const {firstReducer} = require('./firstReducer');
const {itemReducer} = require('./itemReducer');

// _____________________________________________

const appReducer = combineReducers({
    items: itemReducer
})

// _____________________________________________

module.exports = {appReducer};


// store = {
//   dispatch: function(action) {
//     this.state = appReducer(this.state, action)
//   }
// }

// This is a reducer, a pure function with (state, action) => state signature.
// It describes how an action transforms the state into the next state.
//
// The shape of the state is up to you: it can be a primitive, an array, an object,
// or even an Immutable.js data structure. The only important part is that you should
// not mutate the state object, but return a new object if the state changes.


// making sure bundle is actually being included when deploying to bundle

// dont commit bundle on local version, but have it on heroku, let CI server create bundle and push to heroku
// dont push bundle to heroku, let CI server do that, just push to github
