const React = require('react');
require('./list-item.less');

var ListItem = React.createClass({

    _handleCompleteItem: function() {
        this.props.markComplete(this.props.item._id);
    },

    _handleDeleteItem: function() {
        this.props.deleteItem(this.props.item._id);
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
                        <i className="fa fa-check-square fa-3x"></i>
                    </button>

                </li>
            </div>
        )
    }
});

// _____________________________________________

module.exports = ListItem;
