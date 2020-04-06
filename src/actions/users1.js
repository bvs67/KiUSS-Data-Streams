export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAIL = 'GET_USERS_FAIL'

export function getUsers(dispatch) {
  dispatch(requestUsers)
    return fetch('/users')
    .then(response => response.json())
    .then(data => dispatch(requestUsersSuccess))
    .catch(err => dispatch(requestUsersFail(err)))
}

// Где requestUsers, requestUsersSuccess, requestUsersFail - функции action creators

function requestUsers(site) {
  return {
      type: REQUEST_USERS,
      site
  }
}
  
function requestUsersSuccess(users) {
  return {
    type: GET_USERS_SUCCESS,
    users
  }
}

function requestUsersFail(err) {
  return {
    type: GET_USERS_FAIL,
    err
  }
}
