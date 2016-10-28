const React = require('react');
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


        var currentList = this.props.lists.lists.find(
            (list) => {
                return list._id === this.props.currentList;
            })
        console.log(currentList);
        var listItems = currentList ?
            currentList.items.map(function(item) {
                return <ListItem
                            key={item._id}
                            item={item}
                            completeItem={this.props.completeItem}
                            deleteItem={this.props.deleteItem}
                            currentList={this.props.currentList} />
            }, this)
        :   <li>No list found</li>



        // if (this.props.lists.length) {
        //     switch(this.props.filter) {
        //       case 'all':
        //           var items = this.props.items.map(
        //               function(arrayItem) {
        //                   return <ListItem
        //                       deleteItem={this.props.deleteItem}
        //                       key={arrayItem._id}
        //                       item={arrayItem}
        //                       markComplete={this.props.markComplete} />
        //               }, this);
        //           break;
        //
        //       case 'active':
        //           var filteredItems = this.props.items.filter(
        //               function(item) {
        //                 return item.completed === false;
        //               }
        //           )
        //           var items = filteredItems.map(
        //               function(arrayItem) {
        //                   return <ListItem
        //                       deleteItem={this.props.deleteItem}
        //                       key={arrayItem._id}
        //                       item={arrayItem}
        //                       markComplete={this.props.markComplete} />
        //               }, this);
        //           break;
        //
        //       case 'completed':
        //           var filteredItems = this.props.items.filter(
        //               function(item) {
        //                 return item.completed === true;
        //               }
        //           )
        //           var items = filteredItems.map(
        //               function(arrayItem) {
        //                   return <ListItem
        //                       deleteItem={this.props.deleteItem}
        //                       key={arrayItem._id}
        //                       item={arrayItem}
        //                       markComplete={this.props.markComplete} />
        //               }, this);
        //           break;
        //     }
        // } else {
        //     var items = <div className="inbox-container"><i className="fa fa-inbox fa-5x" aria-hidden="true"></i><div className="inbox-greeting">Woohoo! Time to relax!</div></div>;
        // }

        return (
            <ul className="list-ul">
                {listItems}
            </ul>
        )
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
