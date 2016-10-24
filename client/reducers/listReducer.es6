import { FETCH_LISTS, ADD_LIST, DELETE_LIST, ADD_ITEM_TO_LIST } from '../actions/lists'

var listReducer = (state = [], action) => {

    switch(action.type) {
        case 'FETCH_LISTS':
            return action.lists;
        case 'ADD_LIST':
            return state.concat(action.newList);
        case 'DELETE_LIST':
            var newState = state.filter(
                function(list) {
                    return list._id !== action.list._id;
                }
            )
            return newState;
        case 'ADD_ITEM_TO_LIST':
            var newState = state.map(
                function(list) {
                    if (list._id === action.listId) {
                        console.log(list);
                        return list.items.concat(action.newItem);
                    }
                }, this
            )
            return newState;
        default:
            return state;
    }
}

module.exports = { listReducer };
