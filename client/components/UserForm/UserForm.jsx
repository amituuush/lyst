const React = require('react');
require('./user-form.less');


var UserForm = React.createClass({
    getInitialState: function() {
        return {
            name: '',
            priority: ''
        }
    },

    _handleSubmit: function(event) {
        event.preventDefault();
        if(this.state.name && this.state.priority) {
            this.props.addItem(this.state.name, this.state.priority);
        }
        this.setState({
            name: '',
            priority: ''
        })
    },

    _handleNameChange: function(event) {
        this.setState({name: event.target.value});
    },

    _handlePriorityChange: function(event) {
        this.setState({priority: event.target.value});
    },

    render: function(){
        return (
        <div>
            <form onSubmit={this._handleSubmit}>
                <div onClick={this.props.clearList} className='reset-list'>
                    <i className="fa fa-trash-o fa-lg"></i>
                </div>

                <input type="text" onChange={this._handleNameChange} value={this.state.name} className='item-input' placeholder='What needs to get done?'/>

                <button type="submit" value="Add item" className='add-item'>
                    <i className="fa fa-plus fa-3x"></i>
                </button>
                <select name="priority" onChange={this._handlePriorityChange} value={this.state.priority}>
                    <option value="default" disabled>Priority</option>
                    <option value="low" >Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </form>
        </div>
        //
        // <select className="milk-type" name="milk-type" value={this.props.value} onChange={this.props.handleChange}>
        //         <option value="default" disabled>Milk Type</option>
        )
    }
});

module.exports = UserForm;
