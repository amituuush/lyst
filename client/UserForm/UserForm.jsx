const React = require('react');
require('./user-form.less');

var UserForm = React.createClass({
    getInitialState: function() {
        return {item: ''}
    },

    _handleSubmit: function(event) {
        event.preventDefault();
        if(this.state.item) {
            this.props.onFormSubmit(this.state.item);
        }
        this.setState({
            item: ''
        })
    },

    _handleNumberChange: function(event) {
        this.setState({item: event.target.value});
    },

    render: function(){
        return (
        <div>
            <form onSubmit={this._handleSubmit}>
                <input type="text" onChange={this._handleNumberChange} value={this.state.item}/>
                <input type="submit" value="Add item" />
            </form>
            <button onClick={this.props.clearList}>Reset</button>
        </div>
        )
    }
});

module.exports = UserForm;
