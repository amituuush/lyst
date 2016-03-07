const redux = require('redux');
const {createStore} = redux;
const {appReducer} = require('../reducers');
const {increment} = require('../actions')

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

let store = createStore(appReducer); // use let or const? won't store be changed so better to use let?

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)


store.dispatch(increment()); // takes return value from increment(), which is the action (object), and passes it to the dispatch method (redux method on store).

// the action that goes into dispatch function gets passed as the second argument to the reducer. See example below:

// store.dispatch = (action) => {
//   return appReducer(store.state, action)
// }


module.exports = {store};


// is dispatch kind of like setState?
