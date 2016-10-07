const React = require('react');
require('./user-form.less');

// _________________________________________

var UserForm = React.createClass({
    getInitialState: function() {
        return {item: ''}
    },

    _handleSubmit: function(event) {
        event.preventDefault();
        if(this.state.item) {
            this.props.addItem(this.state.item);
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
                <div onClick={this.props.clearList} className='reset-list'>
                    <i className="fa fa-trash-o fa-lg"></i>
                </div>

                <input type="text" onChange={this._handleNumberChange} value={this.state.item} className='item-input' placeholder='What needs to get done?'/>

                <button type="submit" value="Add item" className='add-item'>
                    <i className="fa fa-plus fa-3x"></i>
                </button>
            </form>
        </div>
        )
    }
});

// _____________________________________________

module.exports = UserForm;
