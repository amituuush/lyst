const React = require('react');
require('./items-left.less');

var ItemsLeft = React.createClass({

    propTypes: {
        lists: React.PropTypes.object,
        currentList: React.PropTypes.shape({
            id: React.PropTypes.string,
            name: React.PropTypes.string
        }),
        deleteCompletedItems: React.PropTypes.func
    },

    _handleDeleteCompletedItems: function() {
        this.props.currentList.id ?
        this.props.deleteCompletedItems(this.props.currentList.id)
        : alert('You have to select a list before you can remove completed items!');
    },

    render: function() {

        if (this.props.currentList.id) {
            var itemsLeft = this.props.lists.lists.filter(
                function(list) {
                    return list._id === this.props.currentList.id;
                }, this
            )

            var completedItemsLeft = itemsLeft[0].items.filter(
                function(item) {
                    return item.completed === false;
                }, this
            )

            var itemsLeftLength = completedItemsLeft.length;
            var itemsLeftText;

            if (itemsLeftLength > 1) {
              itemsLeftText = itemsLeftLength + ' items left';
            } else if (itemsLeftLength === 1) {
              itemsLeftText = itemsLeftLength + ' item left';
            } else {
              itemsLeftText = '0 items left';
            }
        }

        return (
            <div className="items-left-container">
                <div id="items-left">{itemsLeftText}</div>
                <div id="clear-completed" onClick={this._handleDeleteCompletedItems}>
                    Clear completed
                </div>
            </div>
        )
    }
});

// _____________________________________________

module.exports = ItemsLeft;
