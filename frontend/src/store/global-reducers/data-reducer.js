import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_DATA = 'FETCH_DATA'

// ------------------------------------
// Actions
// ------------------------------------

export function fetchData () {
  return (dispatch) => axios.get('/api/v1/data').then((response) => dispatch({
    type: 'FETCH_DATA',
    payload: response.data
  })).catch((err) => {
    throw err
  })
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_DATA]: (state, action) => ({...action.payload})
}

// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  data: []
}

export default function listReducer (state = initialState, action) {
  if (action.error) return state

  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
