export const GET_SHIP_REQUEST = 'GET_SHIP_REQUEST';
export const GET_SHIP_SUCCESS = 'GET_SHIP_SUCCESS';
export const GET_SHIP_FAIL = 'GET_SHIP_FAIL';
export const SET_CURRENT_SHIP = 'SET_CURRENT_SHIP';

export function getShipTree() {
    return dispatch => {
        dispatch(requestShip());
        return fetch('/ship')
            .then(response => response.json())
            .then(response => {
                dispatch(requestShipSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestShipFail(err));
            });
    };
}

function requestShip() {
    return {
        type: GET_SHIP_REQUEST,
    };
}

function requestShipSuccess(ship) {
    return {
        type: GET_SHIP_SUCCESS,
        payload: ship,
    };
}

function requestShipFail(err) {
    return {
        type: GET_SHIP_FAIL,
        payload: err
    };
}

export function setShip(ship) {
    return async dispatch => {
        await dispatch(setCurrentShip(ship));
        // await dispatch(getHistory(id));
    };
}

export function setCurrentShip(ship) {
    return dispatch => {
        dispatch({
            type: SET_CURRENT_SHIP,
            payload: ship,
        });
    };
}