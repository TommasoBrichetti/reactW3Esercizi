import artistsReducer from '../reducers/artistReducers'
import { configureStore, combineReducers } from '@reduxjs/toolkit'



const bigReducer = combineReducers({
    art: artistsReducer
})

const store = configureStore({
    reducer: bigReducer
})

export default store
