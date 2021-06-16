import * as actionTypes from './actionTypes'

export const addItem = (title) => {
    return {
        type: actionTypes.ADD_ITEM,
        payload: {
            title
        }
    }
}

export const renameItem = (id, newTitle) => {
    return {
        type: actionTypes.RENAME_ITEM,
        payload: {
            id,
            newTitle
        }
    }
}

export const deleteItem = (id) => {
    return {
        type: actionTypes.DELETE_ITEM,
        payload: {
            id
        }
    }
}