import * as actionTypes from './actionTypes'

const initialState = []

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ITEM:
            return [
                ...state,
                { id: new Date(), title: action.payload.title }
            ]
        case actionTypes.RENAME_ITEM:
            return [
                ...state.filter(item => item.id !== action.payload.id),
                { id: action.payload.id, title: action.payload.newTitle }
            ]
        case actionTypes.DELETE_ITEM:
            return [
                ...state.filter(item => item.id !== action.payload.id)
            ]
        default:
            return state
    }
}