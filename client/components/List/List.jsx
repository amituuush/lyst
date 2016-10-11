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
                {this.props.listName}
            </div>
        )
    }
});

module.exports = List;
