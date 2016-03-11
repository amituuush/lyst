const {CLEAR_ITEMS, ADD_ITEM, COMPLETE_ITEM} = require('../actions');

// _____________________________________________

const itemReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return state.concat({
                name: action.newItem,
                completed: false,
                changed: false,
                id: action.id
            })
        case 'CLEAR_ITEMS':
            return [];
        case 'COMPLETE_ITEM':
            return [];
        default:
            return state;
    }
}
//
// const singleItemReducer = (state, action) => {
//   switch (action.type) {
//     case 'COMPLETE_ITEM':
//       if (state.items.id !== action.id)
//     default:
//       return state
//   }
// }

// _____________________________________________

module.exports = {itemReducer};


// create counter, use map and filter for remove and complete
