import { put, takeLatest, all, call } from 'redux-saga/effects'
import { actions, makeApiCall } from './actions'

// const _makeApiCall = () =>
//     // NetInfo.isConnected
//     //     .fetch()
//     //     .then(isConnected => isConnected)
//     //     .catch(error => {
//     //         throw error
//     //     })

function* makeRestCall() {
    // try {
    //
    //     const response = yield call(_makeApiCall)
    //
    //     yield put(makeApiCall(response))
    // } catch (error) {
    //     console.log(error)
    // }
    console.log('HELLO')
}

//= ============================================================================================================

function* getConnectionStatusWatcher() {
    yield takeLatest(actions.MAKE_API_CALL, makeRestCall)
}

export default function* connection() {
    yield all([getConnectionStatusWatcher()])
}