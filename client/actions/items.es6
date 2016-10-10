import request from 'superagent'

const FETCH_ITEMS = 'FETCH_ITEMS';
const CLEAR_ITEMS = 'CLEAR_ITEMS';
const ADD_ITEM = 'ADD_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const DELETE_COMPLETED_ITEMS = 'DELETE_COMPLETED_ITEMS';

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

const addItem = (itemName, itemPriority, dueDate) => {
    // console.log(itemName, itemPriority, dueDate);
  return function(dispatch) {
    request.post('/api/items')
      .set('Content-Type', 'application/json')
      .send({
          name: itemName,
          priority: itemPriority,
          dueDate: dueDate
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
  return function(dispatch) {
    request.delete('/api/items')
      .end((err, res) => {
          dispatch({
            type: CLEAR_ITEMS
          })
      });
  }
}

const completeItem = (itemId) => {
  return function(dispatch) {
    request.put('/api/items/' + itemId)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
          dispatch({
            type: COMPLETE_ITEM,
            item: res.body,
          })
      });
  }
}

var deleteItem = function(itemId) {
  return function(dispatch) {
    request.delete('/api/items/' + itemId)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
          dispatch({
            type: DELETE_ITEM,
            item: res.body,
          })
      });
  }
}

var deleteCompletedItems = function() {
  return function(dispatch) {
    request.delete('/api/items/completed')
    .end((err, res) => {
        dispatch({
          type: DELETE_COMPLETED_ITEMS,
          items: res.body
        })
    });
  }
}


// _____________________________________________

module.exports = {FETCH_ITEMS, fetchItems, CLEAR_ITEMS, clearItems, ADD_ITEM, addItem, COMPLETE_ITEM, completeItem, DELETE_ITEM, deleteItem, DELETE_COMPLETED_ITEMS, deleteCompletedItems};
