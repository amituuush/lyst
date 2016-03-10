const CLEAR_ITEMS = 'CLEAR_ITEMS';
const ADD_ITEM = 'ADD_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';

// _____________________________________________

const addItem = (newItem) => {
    return {
        type: ADD_ITEM,
        newItem: newItem,
    }
}

const clearItems = () => {
    return {
        type: CLEAR_ITEMS,
    }
}

const completeItem = () => {
    return {
        type: COMPLETE_ITEM
    }
}

// _____________________________________________

module.exports = {CLEAR_ITEMS, clearItems, ADD_ITEM, addItem};
