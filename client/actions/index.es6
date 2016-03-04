const INCREMENT = 'INCREMENT'; // ACTION TYPE being assigned to variable so we can export it later and import it when using a reducer.

const increment = () => { // ACTION CREATER, returns an action (an object with an action type, which has the option to take parameters and use them when returning the action)
    console.log('increment function running');
    return {
        type: INCREMENT // ACTION (which is an object)
    }
}

module.exports = {INCREMENT, increment}; // es6 shorthand for {INCREMENT: INCREMENT, increment: increment}
