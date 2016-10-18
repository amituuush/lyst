import { FETCH_LISTS, ADD_LIST } from '../actions/lists'

var listReducer = (state = [], action) => {

    switch(action.type) {
        case 'FETCH_LISTS':
            return action.lists;
        case 'ADD_LIST':
            return state.concat(action.newList);
        default:
            return state;
    }
}

module.exports = { listReducer };
