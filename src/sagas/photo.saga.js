import { call, put, take, takeLatest, select, actionChannel } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import axios from 'axios'

function* fetchPhotos(action) {
    try {
        const { subscriber } = action
        const photos = yield axios.get('https://jsonplaceholder.typicode.com/photos')
        yield put({ type: types.STORE_IMAGE, data: photos })
    }catch(err) {
        yield put({ type: types.IMAGE_ERR, err })
    }
}

export function* photoSaga() {
    yield all( [
        takeLatest(types.STORE_IMAGE, fetchPhotos),
    ])
}