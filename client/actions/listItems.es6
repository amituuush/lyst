var request = require('superagent');

const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';

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
                  dispatch({
                    type: ADD_ITEM_TO_LIST,
                    newItem: res.body,
                    listId: listId
                  })
              });
        }
}

const completeItem = (itemId) => {
    return function(dispatch) {
        request.put('/')
    }
};

module.exports = { addItemToList, ADD_ITEM_TO_LIST };
