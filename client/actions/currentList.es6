const SET_CURRENT_LIST = 'SET_CURRENT_LIST'

const setCurrentList = (listId) => {
    return {
        type: SET_CURRENT_LIST,
        listId: listId
    }
}

module.exports = { setCurrentList, SET_CURRENT_LIST };
