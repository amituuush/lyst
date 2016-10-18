import { FETCH_LISTS, ADD_LIST } from '../actions/lists'

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
        default:
            return state;
    }
}

module.exports = { listReducer };
