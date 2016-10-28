var Promise = require('promise');
var request = require('superagent-promise')(require('superagent'), Promise);
// var request = require('superagent');
var axios = require('axios');

const FETCH_LISTS = 'FETCH_LISTS';
const ADD_LIST = 'ADD_LIST';
const DELETE_LIST = 'DELETE_LIST';
const CLEAR_LIST = 'CLEAR_LIST';

const fetchLists = () => {
    return function(dispatch) {
        dispatch({
            type: FETCH_LISTS,
            payload: axios.get('/api/lists')
        })
    }
}


// const fetchLists = () => {
//     return function(dispatch) {
//         request('GET', '/api/lists')
//           .end()
//           .then(function onResult(res) {
//               dispatch({
//                 type: FETCH_LISTS,
//                 lists: res.body
//               })
//           }, function onError(err) {
//               console.log(err);
//           });
//     }
// }

// const fetchLists = () => {
//   const promise = new Promise((resolve, reject) => {
//     request
//       .get('/api/lists')
//       .end((err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res.body);
//         }
//       });
//   });
//
//   return {
//     type:    FETCH_LISTS,
//     payload: promise
//   };
//
// };

// const getPost = id => ({
//   type: 'GET_POST',
//   payload: new Promise(resolve => {
//     setTimeout(() => fetch(`/api/posts/${id}`).then(response => {
//       resolve(response.json());
//     }), 1000);
//   })
// });





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
