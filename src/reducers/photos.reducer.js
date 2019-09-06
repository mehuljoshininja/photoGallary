import * as type from '../actions/actionTypes'
import { initialStore } from '../sagas/initialStore'

export const photoReducer = (state = initialStore.photos, action = null) => {
    switch(action.type) {
        case type.LOAD_IMAGE:
            return { ...state, loading: action.payload }
            case type.STORE_IMAGE:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}