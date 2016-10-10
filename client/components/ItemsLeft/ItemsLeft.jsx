const React = require('react');
require('./items-left.less');

var ItemsLeft = React.createClass({

    propTypes: {
          items: React.PropTypes.array,
          deleteCompletedItems: React.PropTypes.func
      },

    render: function() {

        var itemsLeft = this.props.items.filter(function(item) {
          return item.completed === false;
        })

        var itemsLeftText;

        if (itemsLeft.length > 1) {
          itemsLeftText = itemsLeft.length + ' items left';
        } else if (itemsLeft.length === 1) {
          itemsLeftText = itemsLeft.length + ' item left';
        } else {
          itemsLeftText = 'Woohoo! Time to relax!';
        }

        return (
            <div className="items-left-container">
                <div id="items-left">{itemsLeftText}</div>
                <div id="clear-completed" onClick={this.props.deleteCompletedItems}>
                    Clear completed
                </div>
            </div>
        )
    }
});

// _____________________________________________

module.exports = ItemsLeft;
