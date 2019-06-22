import { all } from 'redux-saga/effects'

import connection from './saga'

export default function* rootSaga() {
    yield all([connection()])
}
