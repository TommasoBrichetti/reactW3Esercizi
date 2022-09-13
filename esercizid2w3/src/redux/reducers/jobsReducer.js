import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING, GET_JOBS_LOADING_START } from "../actions"

const initialState = {  
    jobs: [], 
    loading: false,
    error: false,
}


const jobsReducer = (state = initialState, action) => {

    switch (action.type) {
      case GET_JOBS:
        return {
          ...state,
          jobs: action.payload,
        }
  
      case GET_JOBS_ERROR:
        return {
          ...state,
          error: true,
        }
  
      case GET_JOBS_LOADING:
        return {
          ...state,
          loading: false,
        }
      case GET_JOBS_LOADING_START:
        return {
          ...state,
          loading: true,
        }
  
      default:
        return state
    }
}
  
export default jobsReducer