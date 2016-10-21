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
        lists: React.PropTypes.array,
        currentList: React.PropTypes.string,
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
        //
        //
        //
        // if (!this.props.lists) {
        //     return <h1>Loading...</h1>;
        // }
        // const listItems = this.props.currentList.map(
        //     function(list) {
        //         return list[0].items;
        //     }
        // );

        // var currentList = this.props.lists.filter(
        //    function(list) {
        //        return list._id == this.props.currentList
        //    }
        // );
        var currentList = this.props.lists.find(
            function(list) {
                return list._id === this.props.currentlist;
            })

        // console.log('lists', this.props.lists);
        console.log('currentList', currentList);

        return (
            <ul className="list-ul">
                {/* <li>{listItems.name}</li> */}
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
