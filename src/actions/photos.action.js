import * as type from './actionTypes'

export const storePhotos = (photos) => {
  return { type: type.STORE_IMAGE, payload: photos }
}

export const fetchNextBatch = (pageNo) => {
  return { type: type.STORE_NEXT_BATCH, payload: pageNo }
}
