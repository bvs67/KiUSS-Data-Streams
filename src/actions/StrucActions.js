export const GET_STRUC_REQUEST = 'GET_STRUC_REQUEST';
export const GET_STRUC_SUCCESS = 'GET_STRUC_SUCCESS';
export const GET_STRUC_FAIL = 'GET_STRUC_FAIL';
export const SET_CURRENT_NODE = 'SET_CURRENT_NODE';

export function getStrucTree() {
    return dispatch => {
        dispatch(requestStruc());
        return fetch('/structree')
            .then(response => response.json())
            .then(response => {
                dispatch(requestStrucSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestStrucFail(err));
            });
    };
}

function requestStruc() {
    return {
        type: GET_STRUC_REQUEST,
    };
}

function requestStrucSuccess(structree) {
    return {
        type: GET_STRUC_SUCCESS,
        payload: structree,
    };
}

function requestStrucFail(err) {
    return {
        type: GET_STRUC_FAIL,
        payload: err
    };
}

export function setNode(node) {
    return async dispatch => {
        await dispatch(setCurrentNode(node));
        // await dispatch(getHistory(id));
    };
}

export function setCurrentNode(node) {
    return dispatch => {
        dispatch({
            type: SET_CURRENT_NODE,
            payload: node,
        });
    };
}