const redux = require('redux');
const {createStore} = redux;
const {appReducer} = require('../reducers');
const {increment} = require('../actions')

const store = createStore(appReducer);
console.log(store.getState());
store.dispatch(increment()); // takes return value from increment(), which is the action (object), and passes it to the dispatch method (redux method on store).

// the action that goes into dispatch function gets passed as the second argument to the reducer. See example below:

// store.dispatch = (action) => {
//   return appReducer(store.state, action)
// }
console.log(store.getState());

module.exports = {store};
