const ReactRedux = require('react-redux');
const { fetchItems, clearItems, addItem, completeItem, deleteItem, deleteCompletedItems } = require('../actions/items');
const { allItemFilter, activeItemFilter, completedItemFilter } = require('../actions/filter')
const ToDoListContainer = require('../components/ToDoListContainer/ToDoListContainer');
const { store } = require('../store');

// __________________________________________

// In addition to reading the state, container components can dispatch actions.

//In a similar fashion, you can define a function called 'mapDispatchToProps' that receives the 'dispatch()' method and returns callback props that you want to inject into the presentational component

// callback props are being handed down to the presentational components, so when a user clicks or interacts with your application, it fires the callback prop, which is the dispatch method that fires the action off according to the user action

// `handlers` should comprise of all the user related events in my app? (clearList, addItem, removeItem) And all be passed to `mapDispatchToProps`, which eventually injects those handlers as props into `<ToDoList>`, which are then passed down to presentational components?

// then when the form is submitted or a delete item button is clicked, you just call the callback and let your reducers handle the changes

// after the changes happen, `App` will update with the new redux state, causing `ToDoList` to rerender. React will figure out what the new view is supposed to look like and make the required changes to the DOM

const handleFetchItems = (dispatch) => {
    return () => {
        dispatch(fetchItems())
    }
}

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

const handleCompleteItem = (dispatch) => {
    return (itemId) => {
        dispatch(completeItem(itemId))
    }
}

const handleDeleteItem = function(dispatch) {
    return (itemId) => {
        dispatch(deleteItem(itemId))
    }
}

var handleDeleteCompletedItems = function(dispatch) {
    return () => {
        dispatch(deleteCompletedItems())
    }
}

const handleAllItemFilter = (dispatch) => {
    return () => {
        dispatch(allItemFilter())
    }
}

const handleActiveItemFilter = (dispatch) => {
    return () => {
        dispatch(activeItemFilter())
    }
}

const handleCompletedItemFilter = (dispatch) => {
    return () => {
        dispatch(completedItemFilter())
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: handleFetchItems(dispatch),
        clearList: handleClearItems(dispatch),
        addItem: handleAddItem(dispatch),
        markComplete: handleCompleteItem(dispatch),
        deleteItem: handleDeleteItem(dispatch),
        allItemFilter: handleAllItemFilter(dispatch),
        activeItemFilter: handleActiveItemFilter(dispatch),
        completedItemFilter: handleCompletedItemFilter(dispatch),
        deleteCompletedItems: handleDeleteCompletedItems(dispatch)
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
)(ToDoListContainer)

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
