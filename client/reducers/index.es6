const {INCREMENT} = require('../actions');

const appReducer = (state = 0, action) => {
    console.log(action);
    switch(action.type) {
        case INCREMENT:
            console.log('case INCREMENT hit');
            return state + 1;
        default:
            console.log('case default hit');
            return state;
    }
}

module.exports = {appReducer};
