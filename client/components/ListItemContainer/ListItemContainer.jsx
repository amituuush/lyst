const React = require('react');
const ListItem = require('../ListItem/ListItem')
require('./list-item-container.less');

// __________________________________________

var ListItemContainer = React.createClass({
    render: function() {
        var items = this.props.items.map(
            function(arrayItem) {
                return <ListItem
                    deleteItem={this.props.deleteItem}
                    key={arrayItem._id}
                    item={arrayItem}
                    markComplete={this.props.markComplete} />
            }, this);

        return (
            <ul className="list-ul">
                {items}
            </ul>
        )
    }
});

// _____________________________________________

module.exports = ListItemContainer;
