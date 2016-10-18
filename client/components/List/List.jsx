const React = require('react');
// const ListItem = require('../ListItem/ListItem');
require('./list.less');

var List = React.createClass({

    propTypes: {
        name: React.PropTypes.string
      },

    _handleDeleteList: function() {
        console.log('deleting list!');
        this.props.deleteList(this.props.id);
    },

    render: function() {

        return (
            <div className="list">
                <div className="list-name">{this.props.name}</div>
                <i onClick={this._handleDeleteList} className="fa fa-times" aria-hidden="true"></i>
            </div>
        )
    }
});

module.exports = List;
