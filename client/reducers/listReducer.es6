import lodash from 'lodash'
import { FETCH_LISTS, ADD_LIST, DELETE_LIST, ADD_ITEM_TO_LIST, CLEAR_LIST, COMPLETE_ITEM, DELETE_ITEM } from '../actions/lists'

var listReducer = (state = [], action) => {

    switch(action.type) {
        case 'FETCH_LISTS':
            return action.lists;
        case 'ADD_LIST':
            return state.concat(action.newList);
        case 'DELETE_LIST':
            return state.filter(
                function(list) {
                    return list._id !== action.list._id;
                }
            )
        case 'ADD_ITEM_TO_LIST':
            return state.map(
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
        case 'CLEAR_LIST':
            return state.map(
                function(list) {
                    if (list._id === action.listId) {
                        return Object.assign({}, list, {items: []});
                    } else {
                        return list;
                    }
                }, this
            );
        case 'COMPLETE_ITEM':
            return _.map(state, function(list) {
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
            })
        case 'DELETE_ITEM':
            return _.map(state, function(list) {
                if (list._id === action.listId) {
                    var updatedItems = _.filter(list.items, function(item) {
                        return item._id !== action.itemId;
                    })
                    return Object.assign({}, list, {items: updatedItems})

                } else {
                    return list;
                }
            })
        default:
            return state;
    }
}

module.exports = { listReducer };
