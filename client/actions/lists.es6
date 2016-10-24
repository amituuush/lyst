var Promise = require('promise');
var request = require('superagent-promise')(require('superagent'), Promise);

const FETCH_LISTS = 'FETCH_LISTS';
const ADD_LIST = 'ADD_LIST';
const DELETE_LIST = 'DELETE_LIST';
const CLEAR_LIST = 'CLEAR_LIST';

const fetchLists = () => {
    return function(dispatch) {
        request('GET', '/api/lists')
          .end()
          .then(function onResult(res) {
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
};

const deleteList = (listId) => {
    return function(dispatch) {
        request('DELETE', '/api/lists/' + listId)
          .end((err, res) => {
              dispatch({
                type: DELETE_LIST,
                list: res.body
              })
          });
    }
};

const clearList = (listId) => {
    console.log('clear list function calling');
    return function(dispatch) {
        request('PUT', 'api/lists/' + listId)
            .end((err, res) => {
                dispatch({
                    type: CLEAR_LIST,
                    listId: listId
                })
            })
    }
};

module.exports = {fetchLists, FETCH_LISTS, addList, ADD_LIST, deleteList, DELETE_LIST, clearList, CLEAR_LIST};
