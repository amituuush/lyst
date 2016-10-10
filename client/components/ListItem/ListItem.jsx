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
                    <div className="list-item-text">
                        <div className="list-item-name">{this.props.item.name}</div>
                        <div className="list-item-other">
                        <span id="list-item-due-date">{this.props.item.dueDate}</span>
                        <span id="list-item-priority">{this.props.item.priority}</span>
                        </div>
                    </div>

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
