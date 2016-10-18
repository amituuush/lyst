const React = require('react');
require('./list-item.less');

var ListItem = React.createClass({

    propTypes: {
          item: React.PropTypes.object,
          deleteItem: React.PropTypes.func,
          markComplete: React.PropTypes.func
      },

    _handleCompleteItem: function() {
        this.props.markComplete(this.props.item._id);
    },

    _handleDeleteItem: function() {
        this.props.deleteItem(this.props.item._id);
    },

    render: function() {

        return (
            <div className='list-item-parent'>
                <li>
                    <div className={this.props.item.completed ? 'style-complete list-item' : 'style-incomplete list-item'}>
                        {this.props.item.name}
                    </div>

                    <button onClick={this._handleDeleteItem} className='delete-button'>
                        <i className="fa fa-times fa-lg"></i>
                    </button>

                    <button onClick={this._handleCompleteItem} className='check-button'>
                        <i className="fa fa-check-square fa-3x"></i>
                    </button>

                    <div className={this.props.item.completed ? 'list-item-text style-complete' : 'list-item-text'}>
                        <div className="list-item-other">
                        <span id="list-item-due-date">Due: {this.props.item.dueDate ? this.props.item.dueDate : 'never!'}</span>
                    <span className='list-item-priority'>Priority: {this.props.item.priority ? this.props.item.priority : 'none'}</span>
                        </div>
                    </div>

                </li>
            </div>
        )
    }
});

// _____________________________________________

module.exports = ListItem;
