const { combineReducers } = require('redux');
const { listReducer } = require('./listReducer');
const { filterReducer } = require('./filterReducer');
const { currentListReducer } = require('./currentList');

const appReducer = combineReducers({
    lists: listReducer,
    filter: filterReducer,
    currentList: currentListReducer
})

module.exports = {appReducer};
