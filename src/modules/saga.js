import { put, takeLatest, all, call } from 'redux-saga/effects'
import { actions, makeApiCall, apiResponse } from '../redux/actions'

const _makeApiCall = (url) =>
        fetch(url)
        .then(response => response.json())
        .catch(error => {
            throw error
        });

function* makeRestCall() {
    try {

        const response = yield call(_makeApiCall, 'http://www.mocky.io/v2/5d0c2a363500005c00b896df');
        console.log(response);
        yield put(apiResponse(response))
    } catch (error) {
        console.log(error)
    }
}

//= ============================================================================================================

function* getConnectionStatusWatcher() {
    yield takeLatest(actions.MAKE_API_CALL, makeRestCall)
}

export default function* connection() {
    yield all([getConnectionStatusWatcher()])
}