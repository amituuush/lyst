const CLEAR_ITEMS = 'CLEAR_ITEMS';
const ADD_ITEM = 'ADD_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// ________________________________________

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

const completeItem = (itemId) => {
    return {
        type: COMPLETE_ITEM,
        id: itemId
    }
}

var deleteItem = function(itemId) {
    return {
        type: DELETE_ITEM,
        id: itemId
    }
}

// _____________________________________________

module.exports = {CLEAR_ITEMS, clearItems, ADD_ITEM, addItem, COMPLETE_ITEM, completeItem, DELETE_ITEM, deleteItem};
