import { SET_CURRENT_LIST } from '../actions/currentList'

var currentListReducer = (state = '5806b7be2fdcc4044f563785', action) => {

    switch(action.type) {
        case SET_CURRENT_LIST:
            return action.listId;
        default:
            return state;
    }
}

module.exports = { currentListReducer };
