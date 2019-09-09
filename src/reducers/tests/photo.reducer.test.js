import { call, put, take } from 'redux-saga/effects';
import * as types from '../../actions/actionTypes'
import { expectSaga } from 'redux-saga-test-plan';
import { photoReducer } from '../photos.reducer'

const mock = [
    {
        id: 1,
        albumId: 2,
        title: 'Title',
        url: 'http://url.com',
        thumbnailUrl: 'http://thubmnailUrl.com'
    },
    {
        id: 2,
        albumId: 2,
        title: 'Title2',
        url: 'http://url2.com',
        thumbnailUrl: 'http://thubmnailUrl2.com'
    }
]

function * saga() {
    yield put({ type: types.STORE_IMAGE_LOCAL, payload: mock })
}

it("handle reducer and store images", () => {
    return expectSaga(saga)
    .withReducer(photoReducer)
    .hasFinalState({
        loading: false,
        data: mock,         
        current: mock,
        page: 1,
        total: 2,
        favourite: [] }).run()
})



