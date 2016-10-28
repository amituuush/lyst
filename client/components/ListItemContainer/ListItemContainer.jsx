const React = require('react');
const _ = require('lodash');
const ListItem = require('../ListItem/ListItem')
require('./list-item-container.less');

var ListItemContainer = React.createClass({

    propTypes: {
        lists: React.PropTypes.object,
        currentList: React.PropTypes.string,
        deleteItem: React.PropTypes.func,
        completeItem: React.PropTypes.func,
        filter: React.PropTypes.string
      },

    render: function() {

        if (this.props.currentList) {
            var currentList = this.props.lists.lists.filter(function(list) {
                return list._id === this.props.currentList;
            }, this);

            // var items = currentList[0].items.map(
            //               function(item) {
            //                   return <ListItem
            //                               key={item._id}
            //                               item={item}
            //                               completeItem={this.props.completeItem}
            //                               deleteItem={this.props.deleteItem}
            //                               currentList={this.props.currentList} />
            //               }, this);
            // console.log(currentList);
            // if (currentList.items.length) {
            // }
        // else

        switch(this.props.filter) {
          case 'all':
              var items = currentList[0].items.map(
                  function(item) {
                      return <ListItem
                                  key={item._id}
                                  item={item}
                                  completeItem={this.props.completeItem}
                                  deleteItem={this.props.deleteItem}
                                  currentList={this.props.currentList} />
                  }, this);
              break;

          case 'active':
              var filteredItems = currentList[0].items.filter(
                  function(item) {
                    return item.completed === false;
                  }
              )
              var items = filteredItems.map(
                  function(item) {
                      return <ListItem
                                  key={item._id}
                                  item={item}
                                  completeItem={this.props.completeItem}
                                  deleteItem={this.props.deleteItem}
                                  currentList={this.props.currentList} />
                  }, this);
              break;

          case 'completed':
              var filteredItems = currentList[0].items.filter(
                  function(item) {
                    return item.completed === true;
                  }
              )
              var items = filteredItems.map(
                  function(item) {
                      return <ListItem
                                  key={item._id}
                                  item={item}
                                  completeItem={this.props.completeItem}
                                  deleteItem={this.props.deleteItem}
                                  currentList={this.props.currentList} />
                  }, this);
              break;
        }


            return (
                <div>{items}</div>
            );
        } else if (this.props.currentList === '') {
            var items = <div className="inbox-container"><i className="fa fa-inbox fa-5x" aria-hidden="true"></i><div className="inbox-greeting">Woohoo! Time to relax!</div></div>;

            return items;
        }



        // return (
        //     <ul className="list-ul">
        //         {items}
        //     </ul>
        // )
    }
});

module.exports = ListItemContainer;




// const reqList = () => {
//     // return dispatch => {
//     //     axio.get(url)
//     //         .then(res => dispatch(recList(res)))
//     //         .catch(err => dispatch(recListError))
//     // }
//     return dispatch => {
//         const promise = new Promise(resolve, reject) => {
//             request().end(resolve(data))
//         }
//
//         dispatch({
//             type: igniwngi,
//             promise
//         })
//     }
//
// }
//
// const recList = res => ({
//     type: RECEIVED_LIST,
//     payload: res.body
// })
