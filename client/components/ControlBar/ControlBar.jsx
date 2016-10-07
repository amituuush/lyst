const React = require('react');
require('./control-bar.less');

var ControlBar = React.createClass({

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
            <div className="control-bar-container">
              {itemsLeftText}
            </div>
        )
    }
});

// _____________________________________________

module.exports = ControlBar;
