const React = require('react');
require('./list.less');

var List = React.createClass({

    propTypes: {
        id: React.PropTypes.string,
        name: React.PropTypes.string,
        deleteList: React.PropTypes.func,
        setCurrentList: React.PropTypes.func
      },

    _handleSetCurrentList: function() {
        this.props.setCurrentList(this.props.id, this.props.name);
    },

    _handleDeleteList: function() {
        var userConfirmDelete = confirm('Are you sure you want to delete this list?');
        userConfirmDelete ? this.props.deleteList(this.props.id) : ''

    },

    render: function() {

        return (
            <div className="list">
                <div onClick={this._handleSetCurrentList} className="list-name">{this.props.name}</div>
                <i onClick={this._handleDeleteList} className="fa fa-times" aria-hidden="true"></i>
            </div>
        )
    }
});

module.exports = List;
