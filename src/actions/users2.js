
function getUsers(dispatch) {
  dispatch(requestUsers)
    return fetch('api/v1/users')
    .then(response => response.json())
    .then(users => dispatch(requestUsersSuccess))
    .catch(er => dispatch(requestUsersFail(er)))
}

// Где requestUsers, requestUsersSuccess, requestUsersFail - функции action creators

function requestPosts(site) {
  return {
      type: REQUEST_POSTS,
      site
  }
  
  function fetchPosts(site) {
  return dispatch => {
      dispatch(requestPosts(site))
      return fetch(`http://notareallink.com/posts`)
          .then( response => response.json() )
          .then( json => dispatch( receivePosts( site, json ) ) )
  }
  
  function requestPost(site) {
  return {
      type: REQUEST_POST,
      site
  }
  
  function fetchPost(site) {
  return dispatch => {
      dispatch(requestPost(site))
      return fetch(`http://notareallink.com/post/post-id`)
          .then( response => response.json() )
          .then( json => dispatch( receivePost( site, json ) ) )
  }
  
  function requestUsers(site) {
  return {
      type: REQUEST_USERS,
      site
  }
  
  function fetchUsers(site) {
  return dispatch => {
      dispatch(requestUsers(site))
      return fetch(`http://notareallink.com/users`)
          .then( response => response.json() )
          .then( json => dispatch( receiveUsers( site, json ) ) )
  }

 // ----------------------------------------------------------------

  const promiseMiddleware = ({dispatch}) => next => action => {
    const {promise, pending, success, fail} = action
    if(promise) {
      dispatch(pending());
      promise.then(
        res => dispatch(success(res)),
        err => dispatch(fail(err))
      )
    }
    return next(action)
 }
 // ----------------------------------------------------------------
 const requestPosts = () => ({ type: REQUEST_POSTS })
 const recievePosts = posts => ({ type: RECIEVE_POSTS, posts })
 const requestPostsFail = reason => ({ type: REQUEST_POSTS_FAIL, reason })
 
 const fetchPosts = () => dispatch => dispatch({
   promise: callAPI('posts'),
   pending: requestPosts,
   success: receivePosts,
   fail: requestPostsFail
 })
