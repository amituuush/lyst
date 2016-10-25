import { FETCH_LISTS, ADD_LIST, DELETE_LIST, ADD_ITEM_TO_LIST, CLEAR_LIST } from '../actions/lists'

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
            let arrOfItemToChange = state.filter(list => list._id === action.listId);
            let itemListToChange = arrOfItemToChange[0].items.filter(item => item._id === action.itemId);
            // itemListToChange[0].completed = !itemListToChange[0].completed;
            // let newState = Object.assign({}, state, )
            return {
                ...state,
                [itemListToChange]: {
                    completed: true
                }
            }
            // let arrOfLists = state.map(
            //     function(list) {
            //         if (list._id === action.listId) {
            //             console.log(list);
            //             list.items.map(
            //                 function(item) {
            //                     if (item._id === action.itemId) {
            //                         console.log(item);
            //                         return Object.assign({}, item, {completed: true})
            //                     } else {return item}
            //                 })
            //         } else {return list}
            //     }
            // )
            // return arrOfLists;

            // const hofFilter = (arr, value, cb) => {
            //     const result = arr.filter(item => item._id === value);
            //     return cb(hofFilter(result, value2, null));
            // }
            //
            // console.log(hofFilter(state, action.listId, hofFilter(null, action.itemId)));

            // return [
            //     ...state,
            //     state[arrOfItemToChange].items.filter(item => {
            //         item._id === action.itemId;
            //         return {
            //             completed: true
            //         }
            //     })
            // ]

        // case 'COMPLETE_ITEM':
        //     var newState = state.map(
        //     function(list) {
        //         if (list._id === action.listId) {
        //             return list.items.map(
        //                 function(item) {
        //                     if (item._id === action.itemId) {
        //                         return Object.assign({}, item, {completed: true})
        //                     } else {
        //                         return item
        //                     }
        //                 })
        //         } else {
        //             return list
        //         }
        //     });
        //     return newState;
        default:
            return state;
    }
}

module.exports = { listReducer };
