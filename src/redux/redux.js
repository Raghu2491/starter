import { combineReducers, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import immutableTransform from 'redux-persist-transform-immutable'
import { composeWithDevTools } from 'remote-redux-devtools'

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../modules/sagas'

import data from './reducers'

const rootReducer = combineReducers({
    data
})

const persistConfig = {
    key: 'root',
    storage,
    transforms: [immutableTransform()],
    // stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
