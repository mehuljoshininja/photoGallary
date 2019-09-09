import * as type from '../actions/actionTypes'
import { initialStore } from '../sagas/initialStore'
import remove from 'lodash/remove'
import clone from 'lodash/clone'

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
      console.log('action.payload', action.payload)
      return {
        ...state,
        current: state.data.slice((action.data.payload - 1) * 15, ((action.data.payload - 1) * 15) + 15)
      }
    case type.STORE_TO_FAVOURITE:
      return {
        ...state,
        favourite: [...state.favourite, state.current.find(x => x.id === action.id.payload)]
      }
    case type.DELETE_FROM_FAV:
      return {
        ...state,
        favourite: remove(clone(state.favourite), o => o.id !== action.id.payload)
      }

    default:
      return state
  }
}
