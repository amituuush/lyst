import {FETCH_ITEMS, CLEAR_ITEMS, ADD_ITEM, COMPLETE_ITEM, DELETE_ITEM} from '../actions/items'

var itemReducer = function(state = [], action) {

    switch(action.type) {
        case FETCH_ITEMS:
            return action.items;
        case ADD_ITEM:
            return state.concat(action.newItem);
        case CLEAR_ITEMS:
            return [];
        case COMPLETE_ITEM:
            var newState = state.map(function(item) {
                if (item._id === action.item._id) {
                    item.completed = true;
                }
                return item;
            });
            return newState;
        case DELETE_ITEM:
            var newState = state.filter(function(item) {
                return item._id !== action.item._id;
            })
            return newState;
        default:
            return state;
    }
}

module.exports = {itemReducer};
