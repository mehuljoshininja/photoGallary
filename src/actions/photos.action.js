import * as type from './actionTypes'


export const storePhotos = (photos) => {
    return { type: type.STORE_IMAGE, payload: photos }
}
