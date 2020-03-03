export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export function getUsers() {
    return dispatch => {
        dispatch(requestUsers());
        return fetch('/users')
            .then(response => response.json())
            .then(response => {
                dispatch(requestUsersSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestUsersFail(err));
            });
    };
}

// Где requestUsers, requestUsersSuccess, requestUsersFail - функции action creators

function requestUsers() {
    return {
        type: GET_USERS_REQUEST,
    };
}

function requestUsersSuccess(users) {
    var myList = []
    for (var i = 0; i < users.length; i++) {
        var listItem = []
        listItem[0]=users[i].id
        listItem[1]=users[i].Dept_id
        listItem[2]=users[i].Name
        listItem[3]=users[i].Phone_01
        listItem[4]=users[i].Email_01
        myList[i] = listItem
    }
    return {
        type: GET_USERS_SUCCESS,
        payload: myList,
    };
}

function requestUsersFail(err) {
    return {
        type: GET_USERS_FAIL,
        payload: err
    };
}
