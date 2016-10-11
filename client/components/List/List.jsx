const React = require('react');
// const ListItem = require('../ListItem/ListItem');
require('./list.less');

var List = React.createClass({

    propTypes: {
        listName: React.PropTypes.string
      },

    render: function() {

        return (
            <div className="list">
                <div className="list-name">{this.props.listName}</div>
                <i className="fa fa-times" aria-hidden="true"></i>
            </div>
        )
    }
});

module.exports = List;
