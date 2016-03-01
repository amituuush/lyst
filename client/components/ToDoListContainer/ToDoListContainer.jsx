const React = require('react');
const ListItemContainer = require('../ListItemContainer/ListItemContainer');
const UserForm = require('../UserForm/UserForm');
require('./to-do-list-container.less');


var ToDoListContainer = React.createClass({
    getInitialState: function() {
        return {itemList: []}
    },

    _addItem: function(value) {
        this.setState({
            itemList: this.state.itemList.concat({
                name: value,
                completed: false,
                changed: false
            })
        });
    },

    _markComplete: function(index) {
        let {itemList} = this.state;
        itemList[index].completed = true;
        this.setState({
            itemList: itemList
        })
    },

    _deleteItem: function(index) {
        let {itemList} = this.state;
        itemList.splice(index, 1);
        this.setState({
            itemList: itemList
        });
    },

    _clearList: function() {
        if (this.state.itemList.length > 0) {
            var userAnswer = confirm('Are you sure you want to completely delete this list??');
            if (userAnswer) {
                this.setState({
                    itemList: []
                })
            }
        } else {
            alert('There are no items in your list to delete!');
        }
    },

    render: function() {
        return <ToDoList items={this.state.itemList} addItem={this._addItem} deleteItem={this._deleteItem} clearList={this._clearList} markComplete={this._markComplete}/>
    }
});

var ToDoList = React.createClass({
    render: function () {
        return (
            <div>
                <UserForm onFormSubmit={this.props.addItem} clearList={this.props.clearList}/>
                <ListItemContainer items={this.props.items} deleteItem={this.props.deleteItem} markComplete={this.props.markComplete} />
            </div>
        )
    }
});

module.exports = ToDoListContainer;
