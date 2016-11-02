const React = require('react');
const NavList = require('../NavList/NavList');
require('./list-navigation.less');

var ListNavigation = React.createClass({

    propTypes: {
        lists: React.PropTypes.object,
        addList: React.PropTypes.func,
        deleteList: React.PropTypes.func,
        setCurrentList: React.PropTypes.func,
        clearCurrentList: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            navShow: false,
            name: ''
        }
    },

    _handleNavShow: function() {
        this.setState({
            navShow: !this.state.navShow
        })
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
                function(list, i) {
                    return <NavList
                              key={list._id}
                              id={list._id}
                              name={list.name}
                              deleteList={this.props.deleteList}
                              setCurrentList={this.props.setCurrentList}
                              clearCurrentList={this.props.clearCurrentList} />
            }, this);
        }

        return (
            <div className="list-navigation-container">
                <div className="nav-top">
                    <i onClick={this._handleNavShow} className="fa fa-bars fa-2x" aria-hidden="true"></i>
                </div>
                <div className={this.state.navShow ? 'nav-bottom' : 'nav-bottom nav-hide'}>
                    <h2>My Lists</h2>
                    <div>{lists}</div>

                    <div className="list-input-container">
                        <form onSubmit={this._handleSubmit}>
                            <input onChange={this._handleAddListChange} className="list-input" type="text" value={this.state.name} placeholder="Create a list" />
                            <button type="submit"><i className="fa fa-plus-circle fa-3x" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = ListNavigation;
