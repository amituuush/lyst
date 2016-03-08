const React = require('react');
require('./user-form.less');

// _____________________________________________

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
                <div onClick={this.props.clearList} className='reset-list'>
                    <i className="fa fa-trash-o fa-lg"></i>
                </div>

                <input type="text" onChange={this._handleNumberChange} value={this.state.item} className='item-input' placeholder='Enter item here.'/>

                <button type="submit" value="Add item" className='add-item'>
                    <i className="fa fa-plus-circle fa-4x"></i>
                </button>
            </form>

        </div>
        )
    }
});

module.exports = UserForm;
