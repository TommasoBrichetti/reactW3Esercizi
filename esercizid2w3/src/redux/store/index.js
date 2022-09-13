import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favReducer from '../reducers/favReducer'
import jobsReducer from '../reducers/jobsReducer'
import userReducer from '../reducers/userReducer'


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt';

//!persist
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['jobs'],
    transforms:[encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY
    })]
  }

const bigReducer = combineReducers({
    fav: favReducer,
    jobs: jobsReducer,
    user: userReducer
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

export const store = configureStore({
    reducer: persistedReducer, // perchè c'è spazio per uno solo!
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    })
  })

  export const persistor =  persistStore(store)