const React = require('react');
require('./items-left.less');

var ItemsLeft = React.createClass({

    propTypes: {
        currentList: React.PropTypes.shape({
            id: React.PropTypes.string,
            name: React.PropTypes.string
        }),
        deleteCompletedItems: React.PropTypes.func
    },

    _handleDeleteCompletedItems: function() {
        this.props.deleteCompletedItems(this.props.currentList.id);
    },

    render: function() {

        // var itemsLeft = this.props.items.filter(function(item) {
        //   return item.completed === false;
        // })
        //
        // var itemsLeftText;
        //
        // if (itemsLeft.length > 1) {
        //   itemsLeftText = itemsLeft.length + ' items left';
        // } else if (itemsLeft.length === 1) {
        //   itemsLeftText = itemsLeft.length + ' item left';
        // } else {
        //   itemsLeftText = '0 items left';
        // }

        return (
            <div className="items-left-container">
                {/* <div id="items-left">{itemsLeftText}</div> */}
                <div id="clear-completed" onClick={this._handleDeleteCompletedItems}>
                    Clear completed
                </div>
            </div>
        )
    }
});

// _____________________________________________

module.exports = ItemsLeft;
