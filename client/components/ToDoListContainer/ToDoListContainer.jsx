const React = require('react');
const ListItemContainer = require('../ListItemContainer/ListItemContainer');
const UserForm = require('../UserForm/UserForm');
require('./to-do-list-container.less');

var ToDoList = React.createClass({

  componentWillMount: function() {
    this.props.fetchItems();
  },

  render: function () {
      return (
          <div id="container">
            <div id="content">
              <header>Lyst</header>
              <UserForm
                  addItem={this.props.addItem} clearList={this.props.clearList} />

              <ListItemContainer
                  items={this.props.items}
                  deleteItem={this.props.deleteItem} markComplete={this.props.markComplete} />
            </div>
          </div>
      )
  }
});

module.exports = ToDoList;
