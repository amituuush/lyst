const React = require('react');
const ListItemContainer = require('../ListItemContainer/ListItemContainer');
const UserForm = require('../UserForm/UserForm');
require('./to-do-list-container.less');
const ControlBar = require('../ControlBar/ControlBar');
const ItemsLeft = require('../ItemsLeft/ItemsLeft');

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
                filter={this.props.filter}
                allItemFilter={this.props.allItemFilter}
                activeItemFilter={this.props.activeItemFilter}
                completedItemFilter={this.props.completedItemFilter} />
              <ListItemContainer
                  items={this.props.items}
                  deleteItem={this.props.deleteItem}
                  markComplete={this.props.markComplete}
                  filter={this.props.filter} />
              <ItemsLeft
                  items={this.props.items}
                  deleteCompletedItems={this.props.deleteCompletedItems} />
            </div>
          </div>
      )
  }
});

module.exports = ToDoList;
