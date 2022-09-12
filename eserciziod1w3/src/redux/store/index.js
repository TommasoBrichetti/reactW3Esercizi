import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favReducer from '../reducers/favReducer'
import jobsReducer from '../reducers/jobsReducer'

const bigReducer = combineReducers({
    fav: favReducer,
    jobs: jobsReducer
})

const store = configureStore({
    reducer: bigReducer
})

export default store