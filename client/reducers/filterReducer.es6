import {ALL_ITEM_FILTER, ACTIVE_ITEM_FILTER, COMPLETED_ITEM_FILTER} from '../actions/filter'


var filterReducer = function(state = 'all', action) {

    switch(action.type) {
        case ALL_ITEM_FILTER:
            console.log('filter is set to: ' + action.filter);
            return action.filter;
        case ACTIVE_ITEM_FILTER:
            console.log('filter is set to: ' + action.filter);
            return action.filter;
        case COMPLETED_ITEM_FILTER:
            console.log('filter is set to: ' + action.filter);
            return action.filter;
        default:
            return state;
    }
}


module.exports = {filterReducer};
