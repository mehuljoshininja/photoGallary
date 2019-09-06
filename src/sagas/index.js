import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
  const json = yield fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(response => response.json(), );    
  yield put({ type: "PHOTO_RECIEVED", json: json.articles, });
}
function* actionWatcher() {
     yield takeLatest('GET_PHOTOS', fetchNews)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}