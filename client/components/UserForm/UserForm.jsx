const React = require('react');
require('./user-form.less');
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

var UserForm = React.createClass({

    propTypes: {
          addItem: React.PropTypes.func,
          clearList: React.PropTypes.func,
          currentList: React.PropTypes.string
    },

    getInitialState: function() {
        return {
            name: '',
            priority: '',
            dueDatePlaceholder: moment(),
            dueDate: ''
        }
    },

    _handleSubmit: function(event) {
        event.preventDefault();
        this.state.name ? this.props.addItemToList(this.props.currentList, this.state.name, this.state.priority, this.state.dueDate)
        : alert('You forgot to enter in a task name!')

        this.setState({
            name: '',
            priority: '',
            dueDatePlaceholder: moment(),
            dueDate: ''
        })
    },

    _handleNameChange: function(event) {
        this.setState({name: event.target.value});
    },

    _handlePriorityChange: function(event) {
        this.setState({priority: event.target.value});
    },

    _handleDateChange: function(date, callback) {
        this.setState({
            dueDatePlaceholder: date,
            dueDate: date.format('L')
        });
    },

    _handleClearList: function() {
        console.log('clearing list');
        var userConfirm = confirm('Are you sure you want to clear this list?');
        userConfirm ? this.props.clearList(this.props.currentList) : ''
    },


    render: function(){

        if (this.state.dueDate) {
            var datePickerComponent = <DatePicker
                className="date-picker"
                todayButton={'Today'}
                selected={this.state.dueDatePlaceholder}
                onChange={this._handleDateChange} />
        } else {
            var datePickerComponent = <DatePicker
                className="date-picker"
                todayButton={'Today'}
                placeholderText="Due date"
                onChange={this._handleDateChange} />
        }

        return (
        <div className="user-form-container">
            <form onSubmit={this._handleSubmit}>
                <div className="user-form-top">
                    <div onClick={this._handleClearList} className='reset-list'>
                        <i className="fa fa-trash fa-lg"></i>
                    </div>

                    <input type="text" onChange={this._handleNameChange} value={this.state.name} className='item-input' placeholder='What needs to get done?'/>

                    <button type="submit" value="Add item" className='add-item'>
                        Add
                    </button>
                </div>
                <div className="user-form-bottom">
                    <select className="priority-select" name="priority" onChange={this._handlePriorityChange} value={this.state.priority}>
                        <option value="default" disabled>Priority</option>
                        <option value="low" >Low</option>
                    <option value="med">Med</option>
                        <option value="high">High</option>
                    </select>
                    {datePickerComponent}
                </div>
            </form>
        </div>
        )
    }
});

module.exports = UserForm;
