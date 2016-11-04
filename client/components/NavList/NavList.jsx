const React = require('react');
require('./nav-list.less');

var NavList = React.createClass({

    propTypes: {
        id: React.PropTypes.string,
        name: React.PropTypes.string,
        deleteList: React.PropTypes.func,
        setCurrentList: React.PropTypes.func,
        clearCurrentList: React.PropTypes.func
    },

    _handleListClick: function() {
        this.props.setCurrentList(this.props.id, this.props.name);
        this.props.handleNavShow();
    },

    _handleDeleteList: function() {
        var userConfirmDelete = confirm('Are you sure you want to delete this list?');
        if (userConfirmDelete) {
            this.props.clearCurrentList();
            this.props.deleteList(this.props.id);
        }
    },

    render: function() {

        return (
            <div className="list">
                <div onClick={this._handleListClick} className="list-name">{this.props.name}</div>
                <i onClick={this._handleDeleteList} className="fa fa-times" aria-hidden="true"></i>
            </div>
        )
    }
});

module.exports = NavList;
