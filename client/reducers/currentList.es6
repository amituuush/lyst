import { SET_CURRENT_LIST } from '../actions/currentList'

var initialState = {
    id: '',
    name: 'Lyst'
}

var currentListReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_CURRENT_LIST:
            return {
                id: action.listId,
                name: action.listName
            }
        default:
            return state;
    }
}

module.exports = { currentListReducer };
