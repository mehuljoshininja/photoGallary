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
        current: state.data.slice(action.data.payload * 15, (action.data.payload * 15) + 15)
      }
    default:
      return state
  }
}
