import { SET_CURRENT_LIST } from '../actions/currentList'

var currentListReducer = (state = '', action) => {

    switch(action.type) {
        case SET_CURRENT_LIST:
            return action.listId;
        default:
            return state;
    }
}

module.exports = { currentListReducer };
