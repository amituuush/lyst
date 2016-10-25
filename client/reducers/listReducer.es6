import lodash from 'lodash'
import { FETCH_LISTS, ADD_LIST, DELETE_LIST, ADD_ITEM_TO_LIST, CLEAR_LIST, COMPLETE_ITEM, DELETE_ITEM } from '../actions/lists'

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
            var newState = state.map(
                function(list) {
                    if (list._id === action.listId) {
                        return Object.assign({}, list, {items: []});
                    } else {
                        return list;
                    }
                }, this
            );
            console.log(newState);
            return newState;
        case 'COMPLETE_ITEM':

            var newState = _.map(state, function(list) {
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
            return newState;


            // var newState = state.map(
            //     function(list) {
            //         if (list._id === action.listId) {
            //             console.log(list);
            //             list.items.map(
            //                 function(item) {
            //                     if (item._id === action.itemId) {
            //                         item.completed = !item.completed
            //                     } else {return item}
            //                 })
            //         } else {return list}
            //     }
            // )
            // return newState;
        case 'DELETE_ITEM':

            return state;
        default:
            return state;
    }
}

module.exports = { listReducer };
