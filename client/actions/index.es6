import request from 'superagent'

const FETCH_ITEMS = 'FETCH_ITEMS';
const CLEAR_ITEMS = 'CLEAR_ITEMS';
const ADD_ITEM = 'ADD_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// ________________________________________

const fetchItems = (items) => {
  console.log('fetching!!');
    return function(dispatch) {
        request.get('/api/items')
          .end((err, res) => {
              dispatch({
                type: FETCH_ITEMS,
                items: res.body
              })
          });
    }
}

const addItem = (newItem) => {
  return function(dispatch) {
    request.post('/api/items')
      .set('Content-Type', 'application/json')
      .send({
          name: newItem
      })
      .end((err, res) => {
          dispatch({
            type: ADD_ITEM,
            newItem: newItem,
          })
      });
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

module.exports = {FETCH_ITEMS, fetchItems, CLEAR_ITEMS, clearItems, ADD_ITEM, addItem, COMPLETE_ITEM, completeItem, DELETE_ITEM, deleteItem};
