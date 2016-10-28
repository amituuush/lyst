const SET_CURRENT_LIST = 'SET_CURRENT_LIST';
const CLEAR_CURRENT_LIST = 'CLEAR_CURRENT_LIST';

const setCurrentList = (listId, listName) => {
    return {
        type: SET_CURRENT_LIST,
        listId: listId,
        listName: listName
    }
}

const clearCurrentList = () => {
    return {
        type: CLEAR_CURRENT_LIST
    }
}

module.exports = { setCurrentList, SET_CURRENT_LIST, clearCurrentList, CLEAR_CURRENT_LIST };
