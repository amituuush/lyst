const CLEAR_ITEMS = 'CLEAR_ITEMS'; // ACTION TYPE being assigned to variable so we can export it later and import it when using a reducer.

const clearItems = () => { // ACTION CREATER, returns an action (an object with an action type, which has the option to take parameters and use them when returning the action)
    return {
        type: CLEAR_ITEMS, // ACTION (which is an object)
    }
}

module.exports = {CLEAR_ITEMS, clearItems}; // es6 shorthand for {INCREMENT: INCREMENT, increment: increment}
