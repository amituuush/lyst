import {FETCH_ITEMS, CLEAR_ITEMS, ADD_ITEM, COMPLETE_ITEM, DELETE_ITEM} from '../actions/'

// _____________________________________________

var itemReducer = function(state = [], action) {
    console.log('itemReducer was called with state', state, 'and action', action);

    switch(action.type) {
        case FETCH_ITEMS:
            return action.items;
        case ADD_ITEM:
            return state.concat(action.newItem);
        case CLEAR_ITEMS:
            return [];
        case COMPLETE_ITEM:
            var newState = state.map(function(item) {
                if (item._id === action._id) {
                    item.completed = true;
                }
                return item;
            });
            return newState;
        case DELETE_ITEM:
            var newState = state.filter(function(item) {
                return item._id !== action._id;
            })
            return newState;
        default:
            return state;
    }
}

// const singleItemReducer = (state, action) => {
//   switch (action.type) {
//     case 'COMPLETE_ITEM':
//       if (state.id !== action.id) {
//         return state
//       }
//
//       return Object.assign({}, state, {
//         completed: !state.completed
//       })
//     default:
//       return state
//   }
// }

// _____________________________________________

module.exports = {itemReducer};


// create counter, use map and filter for remove and complete
