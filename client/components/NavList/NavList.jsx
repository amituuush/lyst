const React = require('react');
require('./nav-list.less');

var NavList = React.createClass({

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

module.exports = NavList;
