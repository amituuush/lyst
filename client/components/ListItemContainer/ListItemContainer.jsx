const React = require('react');
const ListItem = require('../ListItem/ListItem')
require('./list-item-container.less');

// const ListItemContainer = ({ lists = [] }) => {
//     const listItems = lists.map(list => list.items);
//     console.log(listItems);
//     if (!listItems) {
//         return <h1>Loading</h1>
//     }
//     return (
//         <ul className="list-ul">
//             {listItems.map((item, i) => (
//                 <li key={i}>{item.name}</li>
//             ))}
//         </ul>
//     )
// }
//
// export default ListItemContainer;

var ListItemContainer = React.createClass({

    propTypes: {
        lists: React.PropTypes.array.isRequired,
        currentList: React.PropTypes.string.isRequired,
        items: React.PropTypes.array,
        deleteItem: React.PropTypes.func,
        markComplete: React.PropTypes.func,
        filter: React.PropTypes.string
      },

    render: function() {
//         //
//         // if (this.props.items.length) {
//         //     switch(this.props.filter) {
//         //       case 'all':
//         //           var items = this.props.items.map(
//         //               function(arrayItem) {
//         //                   return <ListItem
//         //                       deleteItem={this.props.deleteItem}
//         //                       key={arrayItem._id}
//         //                       item={arrayItem}
//         //                       markComplete={this.props.markComplete} />
//         //               }, this);
//         //           break;
//         //
//         //       case 'active':
//         //           var filteredItems = this.props.items.filter(
//         //               function(item) {
//         //                 return item.completed === false;
//         //               }
//         //           )
//         //           var items = filteredItems.map(
//         //               function(arrayItem) {
//         //                   return <ListItem
//         //                       deleteItem={this.props.deleteItem}
//         //                       key={arrayItem._id}
//         //                       item={arrayItem}
//         //                       markComplete={this.props.markComplete} />
//         //               }, this);
//         //           break;
//         //
//         //       case 'completed':
//         //           var filteredItems = this.props.items.filter(
//         //               function(item) {
//         //                 return item.completed === true;
//         //               }
//         //           )
//         //           var items = filteredItems.map(
//         //               function(arrayItem) {
//         //                   return <ListItem
//         //                       deleteItem={this.props.deleteItem}
//         //                       key={arrayItem._id}
//         //                       item={arrayItem}
//         //                       markComplete={this.props.markComplete} />
//         //               }, this);
//         //           break;
//         //     }
//         // } else {
//         //     var items = <div className="inbox-container"><i className="fa fa-inbox fa-5x" aria-hidden="true"></i><div className="inbox-greeting">Woohoo! Time to relax!</div></div>;
//         // }
//

        var currentList = this.props.lists.find(
            (list) => {
                return list._id === this.props.currentList;
            })

        var listItems = currentList ?
            currentList.items.map(function(item) {
                return <ListItem
                            key={item._id}
                            item={item} />
                // return <li>{item.name}</li>
            }, this)
        :   <li>No list found</li>

        console.log(currentList);

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
