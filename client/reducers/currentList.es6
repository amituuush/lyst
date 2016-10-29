import { SET_CURRENT_LIST, CLEAR_CURRENT_LIST } from '../actions/currentList'

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
        case CLEAR_CURRENT_LIST:
            return {
                id: '',
                name: 'Lyst'
            }
        default:
            return state;
    }
}

module.exports = { currentListReducer };
