const {CLEAR_ITEMS} = require('../actions');

// _____________________________________________
let counter = 0;

const itemReducer = (state = [], action) => {
    console.log('itemReducer log');
    switch(action.type) {
        case 'ADD_ITEM':
            console.log('add item');
            return state.concat({
                name: action.newItem,
                completed: false,
                changed: false,
                id: counter++
            })
        case 'CLEAR_ITEMS':
            return [];
        case 'COMPLETE_ITEM':
            return
        default:
            return state;
    }
}

// _____________________________________________

module.exports = {itemReducer};


// create counter, use map and filter for remove and complete
