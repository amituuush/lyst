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
                <div>{itemsLeftText}</div>
              <div onClick={this.props.allItemFilter} className="filter-button">
                  All
                </div>
                <div onClick={this.props.activeItemFilter} className="filter-button">
                  Active
                </div>
                <div onClick={this.props.completedItemFilter} className="filter-button">
                  Completed
                </div>
            </div>
        )
    }
});

// _____________________________________________

module.exports = ControlBar;
