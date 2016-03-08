const ReactRedux = require('react-redux');
const ReactRedux = require('react-redux');
const {clearItems} = require('./actions');

// _____________________________________________




const handleClearItems = (dispatch) => {
    return () => {
        if (confirm('Are you sure you want to completely delete this list?')) {
            dispatch(clearItems())
        }
    }
}

// if (store.getState().items.length ... confirm(...)) { .. }

const mapDispatchToProps = (dispatch) => {
    return {
        clearList: handleClearItems(dispatch)
    }
}

const mapStateToProps = (state) => {
    return state
}


const App = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)
