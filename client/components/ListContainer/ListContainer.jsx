const React = require('react');
const List = require('../List/List');
require('./list-container.less');

var ListContainer = React.createClass({

    propTypes: {
        lists: React.PropTypes.array,
        addList: React.PropTypes.func,
        deleteList: React.PropTypes.func,
    },

    getInitialState: function() {
        return {
            name: ''
        }
    },

    _handleSubmit: function(event) {
        event.preventDefault();
        console.log('creating a list');
        this.state.name ? this.props.addList(this.state.name) : alert('Enter in a list name!');
        this.setState({
            name: ''
        });
    },

    _handleAddListChange: function(event) {
        this.setState({
            name: event.target.value
        })
    },

    render: function() {

        var lists = this.props.lists.map(
            function(list) {
                return <List
                          key={list._id}
                          id={list._id}
                          name={list.name}
                          deleteList={this.props.deleteList} />
        }, this);

        return (
            <div className="list-container-container">
                <h2>My Lysts</h2>
                <div>{lists}</div>
            <div className="list-input-container">
                <form onSubmit={this._handleSubmit}>
                    <input onChange={this._handleAddListChange} className="list-input" type="text" placeholder="Create a list" />
                    <button type="submit"><i className="fa fa-plus-circle fa-3x" aria-hidden="true"></i></button>
                </form>
            </div>
            </div>
        )
    }
});

module.exports = ListContainer;
