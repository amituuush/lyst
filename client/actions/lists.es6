var Promise = require('promise');
var request = require('superagent-promise')(require('superagent'), Promise);
// this.Promise || 

const FETCH_LISTS = 'FETCH_LISTS';
const ADD_LIST = 'ADD_LIST';
const DELETE_LIST = 'DELETE_LIST';

const fetchLists = () => {
    return function(dispatch) {
        request('GET', '/api/lists')
          .end()
          .then(function onResult(res) {
              console.log(res);
              dispatch({
                type: FETCH_LISTS,
                lists: res.body
              })
          }, function onError(err) {
              console.log(err);
          });
    }
}

const addList = (listName) => {
    return function(dispatch) {
        request.post('/api/lists')
          .set('Content-Type', 'application/json')
          .send({
              name: listName
          })
          .end((err, res) => {
              dispatch({
                type: ADD_LIST,
                newList: res.body
              })
          });
    }
}

const deleteList = (listId) => {
    return function(dispatch) {
        request.delete('/api/lists/' + listId)
          .end((err, res) => {
              dispatch({
                type: DELETE_LIST,
                list: res.body
              })
          });
    }
}

module.exports = {fetchLists, FETCH_LISTS, addList, ADD_LIST, deleteList, DELETE_LIST};
