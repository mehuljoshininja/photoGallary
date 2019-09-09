import * as type from '../actions/actionTypes'
import { initialStore } from '../sagas/initialStore'

export const photoReducer = (state = initialStore.photos, action) => {
  switch (action.type) {
    case type.LOAD_IMAGE:
      return { ...state, loading: action.payload }
    case type.STORE_IMAGE_LOCAL:
      return {
        ...state,
        data: action.payload,
        current: action.payload.slice(0, 15),
        total: action.payload.length
      }
    case type.FETCH_NEXT_BATCH:
      return {
        ...state,
        current: state.data.slice((action.data.payload - 1) * 15, ((action.data.payload - 1) * 15) + 15)
      }
    case type.STORE_TO_FAVOURITE:
      return {
        ...state,
        favourite: [...state.favourite, state.current.find(x => x.id === action.id.payload)]
      }
    default:
      return state
  }
}
