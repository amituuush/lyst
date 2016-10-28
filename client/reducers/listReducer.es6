import lodash from 'lodash'
import { FETCH_LISTS, ADD_LIST, DELETE_LIST, ADD_ITEM_TO_LIST, CLEAR_LIST, COMPLETE_ITEM, DELETE_ITEM, DELETE_COMPLETED_ITEMS } from '../actions/lists'

const initialState = {
    fetching: false,
    fetched: false,
    lists: [],
    error: null
};

var listReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'FETCH_LISTS_PENDING':
            return {...state, fetching: true}
            break;
        case 'FETCH_LISTS_REJECTED':
            return {...state, fetching: false, error: action.payload}
            break;
        case 'FETCH_LISTS_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                lists: action.payload.data
            }
            break;
        case 'ADD_LIST':
            return {
                ...state,
                lists: [...state.lists, action.newList]
            }
        case 'DELETE_LIST':
            var newState = state.lists.filter(
                function(list) {
                    return list._id !== action.list._id;
                }
            )
            return {
                ...state,
                lists: newState
            }
        case 'ADD_ITEM_TO_LIST':
            var newState = state.lists.map(
                function(list) {
                    if (list._id === action.listId) {
                        return Object.assign({}, list, {
                            items: list.items.concat(action.newItem)
                        });
                    } else {
                        return list;
                    }
                }, this
            );
            return {
                ...state,
                lists: newState
            }
        case 'CLEAR_LIST':
            var newState = state.lists.map(
                function(list) {
                    if (list._id === action.listId) {
                        return Object.assign({}, list, {items: []});
                    } else {
                        return list;
                    }
                }, this
            );
            return {
                ...state,
                lists: newState
            }
        case 'COMPLETE_ITEM':
            var newState =  _.map(state.lists, function(list) {
                if (list._id === action.listId) {
                    var updatedItems = _.forEach(list.items, function(item) {
                        if (item._id === action.itemId) {
                            item.completed = !item.completed;
                        }
                    })
                    return Object.assign({}, list, {items: updatedItems})

                } else {
                    return list;
                }
            });
            return {
                ...state,
                lists: newState
            }
        case 'DELETE_ITEM':
            var newState = _.map(state.lists, function(list) {
                if (list._id === action.listId) {
                    var updatedItems = _.filter(list.items, function(item) {
                        return item._id !== action.itemId;
                    });
                    return Object.assign({}, list, {items: updatedItems});

                } else {
                    return list;
                }
            });
            return {
                ...state,
                lists: newState
            }
        case 'DELETE_COMPLETED_ITEMS':
            var newState = _.map(state.lists, function(list) {
                if (list._id === action.listId) {
                    var removedCompletedItems = _.filter (list.items, function(item) {
                        return item.completed === false;
                    });
                    return Object.assign({}, list, {items: removedCompletedItems});
                } else {
                    return list;
                }
            });
            return {
                ...state,
                lists: newState
            }
        default:
            return state;
    }
}

module.exports = { listReducer };
