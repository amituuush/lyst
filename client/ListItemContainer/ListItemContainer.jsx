const React = require('react');
require('./list-item-container.less');

var ListItemContainer = React.createClass({
    render: function() {
        var items = this.props.items.map(
            (arrayItem, index) => {
                var handleDelete = () => {
                    this.props.deleteItem(index);
                }
                var handleComplete = () => {
                    this.props.markComplete(index);
                }
                return <ListItem deleteItem={handleDelete} key={index} index={index} item={arrayItem} markComplete={handleComplete} />
        });

        return (
            <ul>
                {items}
            </ul>
        )
    }
});

var ListItem = React.createClass({
    render: function() {
        return (
            <div>
                <li className={this.props.item.completed ? 'style-complete' : 'style-incomplete'}>{this.props.item.name}</li>
                <button onClick={this.props.markComplete}>Complete</button>
                <button onClick={this.props.deleteItem}>Delete</button>
            </div>
        )
    }
});

module.exports = ListItemContainer;
