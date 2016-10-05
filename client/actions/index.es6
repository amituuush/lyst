import request from 'superagent'

const FETCH_ITEMS = 'FETCH_ITEMS';
const CLEAR_ITEMS = 'CLEAR_ITEMS';
const ADD_ITEM = 'ADD_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// ________________________________________

const fetchItems = () => {
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

const addItem = (newItemName) => {
  return function(dispatch) {
    request.post('/api/items')
      .set('Content-Type', 'application/json')
      .send({
          name: newItemName
      })
      .end((err, res) => {
          dispatch({
            type: ADD_ITEM,
            newItem: res.body,
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
  return function(dispatch) {
    request.post('/api/items/' + itemId)
      .set('Content-Type', 'application/json')
      .send({
          name: newItemName
      })
      .end((err, res) => {
          dispatch({
            type: ADD_ITEM,
            newItem: res.body,
          })
      });
  }

    return {
        type: COMPLETE_ITEM,
        _id: itemId
    }
}

var deleteItem = function(itemId) {
    return {
        type: DELETE_ITEM,
        _id: itemId
    }
}

// _____________________________________________

module.exports = {FETCH_ITEMS, fetchItems, CLEAR_ITEMS, clearItems, ADD_ITEM, addItem, COMPLETE_ITEM, completeItem, DELETE_ITEM, deleteItem};
