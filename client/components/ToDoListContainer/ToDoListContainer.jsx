const React = require('react');
const ListItemContainer = require('../ListItemContainer/ListItemContainer');
const UserForm = require('../UserForm/UserForm');
require('./to-do-list-container.less');

// _____________________________________________
//
// var ToDoListContainer = React.createClass({
//     // getInitialState: function() {
//     //     return {itemList: []}
//     // },
//
//     // _addItem: function(value) {
//     //     this.setState({
//     //         itemList: this.state.itemList.concat({
//     //             name: value,
//     //             completed: false,
//     //             changed: false
//     //         })
//     //     });
//     // },
//
//     _markComplete: function(index) {
//         let {itemList} = this.state;
//         itemList[index].completed = true;
//         this.setState({
//             itemList: itemList
//         })
//     },
//
//     _deleteItem: function(index) {
//         let {itemList} = this.state;
//         itemList.splice(index, 1);
//         this.setState({
//             itemList: itemList
//         });
//     },
//
//
//     render: function() {
//         return <ToDoList items={this.state.itemList} addItem={this._addItem} deleteItem={this._deleteItem} clearList={this._clearList} markComplete={this._markComplete}/>
//     }
// });

var ToDoList = React.createClass({
    render: function () {
        return (
            <div>
                <UserForm
                    onFormSubmit={this.props.addItem} clearList={this.props.clearList}/>

                <ListItemContainer
                    items={this.props.items}
                    deleteItem={this.props.deleteItem} markComplete={this.props.markComplete} />
            </div>
        )
    }
});

// _____________________________________________

module.exports = ToDoList;
