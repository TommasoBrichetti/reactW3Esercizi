export const ADD_TO_FAV = 'ADD_TO_FAV'
export const REMOVE_TO_FAV = 'REMOVE_TO_FAV'
export const GET_JOBS = 'GET_JOBS'
export const GET_JOBS_ERROR = 'GET_BOOKS_ERROR'
export const GET_JOBS_LOADING = 'GET_BOOKS_LOADING'

export const addToFavActions = (data) => ({
    type: ADD_TO_FAV, 
    payload: data, 
})
export const removeToFavActions = (i) => ({
    type: REMOVE_TO_FAV, 
    payload: i, 
})

export const getJobsAction = (query) => {
    return async (dispatch, getState) => {

      try {
        const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?search=' + query + '&limit=20')
        if (response.ok) {
          const { data } = await response.json()
          console.log('GETSTATE', getState())
          dispatch({
            type: GET_JOBS,
            payload: data,
          })
        } else {
          alert('Error fetching results')
          dispatch({
            type: GET_JOBS_ERROR,
          })
          dispatch({
            type: GET_JOBS_LOADING,
          })
        }
      } catch (error) {
        console.log(error)
        dispatch({
          type: GET_JOBS_ERROR,
        })
        dispatch({
          type: GET_JOBS_LOADING,
        })
      }
    }
  }