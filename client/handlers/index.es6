const ReactRedux = require('react-redux');
const {clearItems, addItem, completeItem} = require('../actions');
const ToDoList = require('../components/ToDoListContainer/ToDoListContainer');
const {store} = require('../store');

// _____________________________________________

// In addition to reading the state, container components can dispatch actions.

//In a similar fashion, you can define a function called 'mapDispatchToProps' that receives the 'dispatch()' method and returns callback props that you want to inject into the presentational component

// callback props are being handed down to the presentational components, so when a user clicks or interacts with your application, it fires the callback prop, which is the dispatch method that fires the action off according to the user action

// `handlers` should comprise of all the user related events in my app? (clearList, addItem, removeItem) And all be passed to `mapDispatchToProps`, which eventually injects those handlers as props into `<ToDoList>`, which are then passed down to presentational components?

// then when the form is submitted or a delete item button is clicked, you just call the callback and let your reducers handle the changes

// after the changes happen, `App` will update with the new redux state, causing `ToDoList` to rerender. React will figure out what the new view is supposed to look like and make the required changes to the DOM

const handleClearItems = (dispatch) => {
    return () => {
        if (store.getState().items.length > 0) {
            if (confirm('Are you sure you want to completely delete this list?')) {
                dispatch(clearItems())
            }
        } else {
            alert('There are no items in your list to delete!');
        }
    }
}

const handleAddItem = (dispatch) => {
    return (newItem) => {
        dispatch(addItem(newItem))
    }
}

const handleComplete = (dispatch) => {
    return (itemId) => {
        dispatch(completeItem(itemId))
    }
}

// define prop name below to pass to ToDoList
const mapDispatchToProps = (dispatch) => {
    return {
        clearList: handleClearItems(dispatch),
        addItem: handleAddItem(dispatch),
        markComplete: handleComplete(dispatch)
    }
}

const mapStateToProps = (state) => {
    return state
}

// App component is created by the function returned from redux-react’s `connect`
// It holds the state from the store and passes those as `props` to the `ToDoList` component

const App = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)

// _____________________________________________

module.exports = {App}

// _____________________________________________

// store = {
//   dispatch: function(action) {
//     this.state = appReducer(this.state, action)
//   }
// }

 // takes return value from clearItems(), which is the action (object), and passes it to the dispatch method (redux method on store).

// the action that goes into dispatch function gets passed as the second argument to the reducer. See example below:
