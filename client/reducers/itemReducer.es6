const {CLEAR_ITEMS} = require('../actions');

// _____________________________________________


const itemReducer = (state = [], action) => {
    console.log('itemReducer log');
    switch(action.type) {
        case 'ADD_ITEM':
            console.log('add item');
            return state.concat({
                name: action.newItem,
                completed: false,
                changed: false
            })
        case 'CLEAR_ITEMS':
            return [];
        default:
            return state;
    }
}

// _____________________________________________

module.exports = {itemReducer};
