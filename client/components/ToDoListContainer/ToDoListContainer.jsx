const React = require('react');
const ListItemContainer = require('../ListItemContainer/ListItemContainer');
const UserForm = require('../UserForm/UserForm');
require('./to-do-list-container.less');
const ControlBar = require('../ControlBar/ControlBar');

var ToDoList = React.createClass({

  componentWillMount: function() {
    this.props.fetchItems();
  },

  render: function () {
      return (
          <div id="container">
          <header>Lyst</header>
            <div id="content">
              <UserForm
                  addItem={this.props.addItem} clearList={this.props.clearList} />
              <ControlBar
                items={this.props.items}
                allItemFilter={this.props.allItemFilter}
                activeItemFilter={this.props.activeItemFilter}
                completedItemFilter={this.props.completedItemFilter} />
              <ListItemContainer
                  items={this.props.items}
                  deleteItem={this.props.deleteItem}
                  markComplete={this.props.markComplete}
                  filter={this.props.filter} />
            </div>
          </div>
      )
  }
});

module.exports = ToDoList;
