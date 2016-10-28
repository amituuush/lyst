const SET_CURRENT_LIST = 'SET_CURRENT_LIST'

const setCurrentList = (listId, listName) => {
    return {
        type: SET_CURRENT_LIST,
        listId: listId,
        listName: listName
    }
}

module.exports = { setCurrentList, SET_CURRENT_LIST };
