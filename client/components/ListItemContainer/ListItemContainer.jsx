const React = require('react');
require('./list-item-container.less');

// _______________________________________

var ListItemContainer = React.createClass({
    render: function() {
        var items = this.props.items.map(
            function(arrayItem) {
                return <ListItem
                    deleteItem={this.props.deleteItem}
                    key={arrayItem.id}
                    item={arrayItem}
                    markComplete={this.props.markComplete} />
            }, this);

        return (
            <ul>
                {items}
            </ul>
        )
    }


});


var ListItem = React.createClass({

    _handleCompleteItem: function() {
        this.props.markComplete(this.props.item.id);
    },

    _handleDeleteItem: function() {
        this.props.deleteItem(this.props.item.id);
    },

    render: function() {
        return (
            <div className='list-item-parent'>
                <li className={this.props.item.completed ? 'style-complete list-item' : 'style-incomplete list-item'}>
                    {this.props.item.name}

                    <button onClick={this._handleDeleteItem} className='delete-button'>
                        <i className="fa fa-times fa-2x"></i>
                    </button>

                    <button onClick={this._handleCompleteItem} className='check-button'>
                        <i className="fa fa-check-circle fa-4x"></i>
                    </button>

                </li>
            </div>
        )
    }
});

// _____________________________________________

module.exports = ListItemContainer;
