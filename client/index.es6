const redux = require('redux');
const {createStore} = redux;
const {appReducer} = require('./reducers');
const {increment} = require('./actions')
const React = require('react');
const ReactDOM = require('react-dom');
const ToDoList = require('./components/ToDoListContainer/ToDoListContainer');
const less = require('./style.less');
const ReactRedux = require('react-redux');
const {Provider} = require('react-redux');
const {clearItems} = require('./actions')
// _____________________________________________


const store = createStore(appReducer);
const handleClearItems = (dispatch) => {
    return () => {
        if (confirm('Are you sure you want to completely delete this list?')) {
            dispatch(clearItems())
        }
    }
}

if (store.getState().items.length ... confirm(...)) { .. }

const mapDispatchToProps = (dispatch) => {
    return {
        clearList: handleClearItems(dispatch)
    }
}

const mapStateToProps = state => state

const App = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)


const contentEl = document.getElementById('content');

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    contentEl
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
