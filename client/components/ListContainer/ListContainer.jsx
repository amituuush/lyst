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
            </div>
        )
    }
});

module.exports = ListContainer;
