const React = require('react');
const List = require('../List/List');
require('./list-container.less');

var ListContainer = React.createClass({

    propTypes: {

      },

    render: function() {

        return (
            <div className="list-container-container">
                <h2>My Lysts</h2>
                <List listName="Grocery" />
                <List listName="Shopping" />
                <List listName="Vacation" />
                <List listName="Work" />
            <div className="list-input-container">
                <input className="list-input" type="text" />
                <i className="fa fa-plus-circle fa-3x" aria-hidden="true"></i>
            </div>
            </div>
        )
    }
});

module.exports = ListContainer;
