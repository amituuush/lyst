const React = require('react');
const List = require('../List/List');
require('./list-container.less');

var ListContainer = React.createClass({

    propTypes: {
        lists: React.PropTypes.object,
        addList: React.PropTypes.func,
        deleteList: React.PropTypes.func,
        setCurrentList: React.PropTypes.func,
        clearCurrentList: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            name: ''
        }
    },

    _handleSubmit: function(event) {
        event.preventDefault();
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

        if (this.props.lists.lists) {
            var lists = this.props.lists.lists.map(
                function(list) {
                    return <List
                              key={list._id}
                              id={list._id}
                              name={list.name}
                              deleteList={this.props.deleteList}
                              setCurrentList={this.props.setCurrentList}
                              clearCurrentList={this.props.clearCurrentList} />
            }, this);
        } else if (this.props.lists.lists.length === 0) {
            var lists = <h3>Create a list below</h3>;
        }

        return (
            <div className="list-container-container">
                <h2>My Lysts</h2>
                <div>{lists}</div>

            <div className="list-input-container">
                <form onSubmit={this._handleSubmit}>
                    <input onChange={this._handleAddListChange} className="list-input" type="text" value={this.state.name} placeholder="Create a list" />
                    <button type="submit"><i className="fa fa-plus-circle fa-3x" aria-hidden="true"></i></button>
                </form>
            </div>
            </div>
        )
    }
});

module.exports = ListContainer;
