const React = require('react');
require('./control-bar.less');

var ControlBar = React.createClass({

    propTypes: {
          lists: React.PropTypes.object,
          currentList: React.PropTypes.object,
          filter: React.PropTypes.string,
          clearList: React.PropTypes.func,
          allItemFilter: React.PropTypes.func,
          activeItemFilter: React.PropTypes.func,
          completedItemFilter: React.PropTypes.func,
      },

    _handleClearList: function() {
        if (this.props.currentList.id === '') {
            alert('You have to select a list before you reset it!');
        } else {
          console.log('clearing list');
          var userConfirm = confirm('Are you sure you want to clear this list?');
          userConfirm ? this.props.clearList(this.props.currentList.id) : ''
        }
    },

    render: function() {

        return (
            <div className="control-bar-container">
                <div onClick={this.props.allItemFilter} className={this.props.filter === 'all' ? 'filter-button active-filter' : 'filter-button'}>
                    All
                </div>
                <div onClick={this.props.activeItemFilter} className={this.props.filter === 'active' ? 'filter-button active-filter' : 'filter-button'}>
                    Active
                </div>
                <div onClick={this.props.completedItemFilter} className={this.props.filter === 'completed' ? 'filter-button active-filter' : 'filter-button'}>
                   Completed
                </div>
                <div onClick={this._handleClearList} className='reset-button'>
                    Reset
                </div>
            </div>
        )
    }
});

// _____________________________________________

module.exports = ControlBar;
