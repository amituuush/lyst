const React = require('react');
const _ = require('lodash');
const ListItem = require('../ListItem/ListItem')
require('./list-item-container.less');
// const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var ListItemContainer = React.createClass({

    propTypes: {
        lists: React.PropTypes.object,
        currentList: React.PropTypes.shape({
            id: React.PropTypes.string,
            name: React.PropTypes.string
        }),
        deleteItem: React.PropTypes.func,
        completeItem: React.PropTypes.func,
        filter: React.PropTypes.string
      },

    render: function() {

        var currentList = this.props.lists.lists.filter(function(list) {
            return list._id === this.props.currentList.id;
        }, this);

        if (this.props.lists.lists.length === 0) {
            var items = <div className="inbox-container"><i className="fa fa-plus-circle fa-5x" aria-hidden="true"></i><div className="inbox-greeting">Create a list to begin!</div></div>;

            return items;
        }

        else if (this.props.currentList.id === '') {
            var items = <div className="inbox-container"><i className="fa fa-list-ul fa-5x" aria-hidden="true"></i><div className="inbox-greeting">Select a list to begin!</div></div>;

            return items;
        }

        else if (currentList[0].items.length === 0) {
            var items = <div className="inbox-container"><i className="fa fa-inbox fa-5x" aria-hidden="true"></i><div className="inbox-greeting">Woohoo! Time to relax!</div></div>;

            return items;
        }

        else if (this.props.currentList.id) {

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
                <ul className="list-ul">

                        {items}

                </ul>
            );
        }
    }
});

module.exports = ListItemContainer;
