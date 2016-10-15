const React = require('react');
const NavList = require('../NavList/NavList');
require('./list-navigation.less');

var ListNavigation = React.createClass({

    propTypes: {

      },

    getInitialState: function() {
        return {
            navShow: false
        }
    },

    _handleNavShow: function() {
        this.setState({
            navShow: !this.state.navShow
        })
    },

    render: function() {

        return (
            <div className="list-navigation-container">
                <div className="nav-top">
                    <i onClick={this._handleNavShow} className="fa fa-bars fa-2x" aria-hidden="true"></i>
                </div>
                <div className={this.state.navShow ? 'nav-bottom' : 'nav-bottom nav-hide'}>
                    <h2>Navigation List</h2>
                    <NavList listName="Grocery" />
                    <NavList listName="Shopping" />
                    <NavList listName="Vacation" />
                    <NavList listName="Work" />
                    <div className="list-input-container">
                        <input className="list-input" type="text" />
                        <i className="fa fa-plus-circle fa-3x" aria-hidden="true"></i>
                    </div>
            <   /div>
            </div>
        )
    }
});

module.exports = ListNavigation;
