const React = require('react');
require('./list-item-container.less');

// _____________________________________________

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
            <div className='list-item-parent'>
                <li className={this.props.item.completed ? 'style-complete list-item' : 'style-incomplete list-item'}>
                    {this.props.item.name}
                    <button onClick={this.props.deleteItem} className='delete-button'>
                        <i className="fa fa-times fa-2x"></i>
                    </button>
                    <button onClick={this.props.markComplete} className='check-button'>
                        <i className="fa fa-check-circle fa-4x"></i>
                    </button>
                </li>
            </div>
        )
    }
});

module.exports = ListItemContainer;
