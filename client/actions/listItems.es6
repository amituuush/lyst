var request = require('superagent');

const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';
const COMPLETE_ITEM = 'COMPLETE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

const addItemToList = (listId, itemName, priority, dueDate) => {
        return function(dispatch) {
            request.post('/api/lists/' + listId + '/items')
                .set('Content-Type', 'application/json')
                .send({
                  name: itemName,
                  priority: priority,
                  dueDate: dueDate
                })
                .end((err, res) => {
                  err ? res.send(err) : res.json(res);
                  dispatch({
                    type: ADD_ITEM_TO_LIST,
                    newItem: res.body,
                    listId: listId
                  })
                });
        }
}

const completeItem = (listId, itemId) => {
    return function(dispatch) {
        request.put('/api/lists/' + listId + '/items/' + itemId)
            .set('Content-Type', 'application/json')
            .end((err, res) => {
                dispatch({
                  type: COMPLETE_ITEM,
                  listId: listId,
                  itemId: itemId
                })
            });
    }
};

const deleteItem = (listId, itemId) => {
    return function(dispatch) {
        request.delete('/api/lists/' + listId + '/items/' + itemId)
            .set('Content-Type', 'application/json')
            .end((err, res) => {
                dispatch({
                    type: DELETE_ITEM,
                    listId: listId,
                    itemId: itemId
                })
            });
    }
};

module.exports = { addItemToList, ADD_ITEM_TO_LIST, completeItem, COMPLETE_ITEM, deleteItem, DELETE_ITEM };
